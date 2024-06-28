<template>
  <div class="stands-tab">
    <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
      <div>
        <label for="title">Title:</label>
        <input type="text" v-model="form.title" required />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea v-model="form.description" required></textarea>
      </div>
      <div>
        <label for="configuration">Configuration:</label>
        <select v-model="form.configuration" required>
          <option value="Остров">Остров</option>
          <option value="Угловой">Угловой</option>
          <option value="Прямой">Прямой</option>
        </select>
      </div>
      <div>
        <label for="square">Square:</label>
        <input type="number" v-model="form.square" required />
      </div>
      <div>
        <label for="preview">Preview Image:</label>
        <input type="file" ref="previewInput" name="preview" @change="handlePreviewUpload" />
      </div>
      <div>
        <label for="images">Images:</label>
        <input type="file" ref="imageInput" @change="handleImageUpload" multiple />
      </div>
      <div>
        <label for="theme">Theme:</label>
        <input type="text" v-model="form.theme" required />
      </div>
      <div>
        <label for="year">Year:</label>
        <input type="date" v-model="form.year" required />
      </div>
      <button type="submit">{{ editMode ? 'Update Stand' : 'Add Stand' }}</button>
    </form>

    <div v-if="!selectedStand">
      <ul class="news-list flex flex-wrap items-center justify-start gap-[50px]">
        <li
          v-for="stand in sortedStandList"
          :key="stand.id"
          class="news-item border border-[#000] bg-blue-400 rounded-xl p-[10px]"
        >
          <h3>{{ stand.title }}</h3>
          <p>{{ stand.description }}</p>
          <img
            class="news-image w-[300px] h-[300px] object-contain"
            v-if="stand.preview"
            :src="`http://localhost:8081/uploads/${stand.preview}`"
            alt="Preview Image"
          />
          <button @click="editStand(stand)">Edit</button>
          <button @click="showStandDetails(stand)">Details</button>
          <button @click="deleteStand(stand.id)">Delete</button>
        </li>
      </ul>
    </div>

    <div v-if="selectedStand">
      <h2>{{ selectedStand.title }}</h2>
      <p>{{ selectedStand.description }}</p>
      <p>{{ selectedStand.configuration }}</p>
      <p>{{ selectedStand.square }}</p>
      <p>{{ selectedStand.theme }}</p>
      <p>{{ selectedStand.year }}</p>
      <img
        v-if="selectedStand.preview"
        class="w-[700px]"
        :src="`http://localhost:8081/uploads/${selectedStand.preview}`"
        alt="Preview Image"
      />
      <div v-if="selectedStand.images && selectedStand.images.length">
        <h3>Images:</h3>
        <img
          v-for="image in selectedStand.images"
          :key="image"
          :src="`http://localhost:8081/uploads/${image}`"
          alt="Image"
        />
      </div>
      <button @click="goBackToList()">Back to List</button>
    </div>
  </div>
</template>

<script>
import axios from '@/plugins/axios'

export default {
  data() {
    return {
      standList: [],
      form: {
        title: '',
        description: '',
        configuration: '',
        square: '',
        preview: null,
        // images: [],
        theme: '',
        year: ''
      },
      editMode: false,
      editingId: null,
      selectedStand: null
    }
  },
  computed: {
    sortedStandList() {
      return this.standList.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }
  },
  created() {
    this.fetchStands()
  },
  methods: {
    async fetchStands() {
      try {
        const response = await axios.get('http://localhost:8081/stands')
        this.standList = response.data
      } catch (error) {
        console.error('Error fetching stands:', error)
      }
    },
    handlePreviewUpload(event) {
      this.form.preview = event.target.files[0]
    },
    handleImageUpload(event) {
      this.form.images = Array.from(event.target.files)
    },
    async handleSubmit() {
      if (this.editMode) {
        this.updateStand()
      } else {
        this.createStand()
      }
    },
    async createStand() {
      try {
        // const formData = new FormData()
        // for (let key in this.form) {
        //   if (key === 'images') {
        //     this.form.images.forEach((image) => {
        //       formData.append('images', image)
        //     })
        //   } else {
        //     formData.append(key, this.form[key])
        //   }
        // }

        const response = await axios.post('http://localhost:8081/stands', this.form, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        console.log(this.form)
        this.standList.push(response.data)
        this.resetForm()
      } catch (error) {
        console.error('Error creating stand:', error)
      }
    },

    async updateStand() {
      try {
        const formData = new FormData()
        for (let key in this.form) {
          if (key === 'preview') {
            formData.append('preview', this.form.preview)
          } else if (key === 'images' && Array.isArray(this.form.images)) {
            this.form.images.forEach((image) => {
              formData.append('images', image)
            })
          } else {
            formData.append(key, this.form[key])
          }
        }
        console.log(formData)
        await axios.put(`http://localhost:8081/stands/${this.editingId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

        const updatedStand = await this.fetchSingleStand(this.editingId)
        const index = this.standList.findIndex((stand) => stand.id === this.editingId)
        if (index !== -1) {
          this.$set(this.standList, index, updatedStand) // Использование $set для обновления массива
        }
        this.resetForm()
      } catch (error) {
        console.error('Error updating stand:', error)
      }
    },
    async fetchSingleStand(id) {
      try {
        const response = await axios.get(`http://localhost:8081/stands/${id}`)
        return response.data
      } catch (error) {
        console.error('Error fetching single stand:', error)
        return null
      }
    },
    editStand(stand) {
      this.editMode = true
      this.editingId = stand.id
      this.form = {
        title: stand.title,
        description: stand.description,
        configuration: stand.configuration,
        square: stand.square,
        preview: stand.preview,
        //  ? this.formatDate(stand.preview) : null,
        theme: stand.theme,
        year: stand.year ? this.formatDate(stand.year) : '',
        images: [] // Очищаем изображения при редактировании
      }
    },
    formatDate(date) {
      if (!date) return ''
      const d = new Date(date)
      const month = '' + (d.getMonth() + 1)
      const day = '' + d.getDate()
      const year = d.getFullYear()

      return [year, month.padStart(2, '0'), day.padStart(2, '0')].join('-')
    },

    async deleteStand(id) {
      try {
        await axios.delete(`http://localhost:8081/stands/${id}`)
        this.standList = this.standList.filter((stand) => stand.id !== id)
      } catch (error) {
        console.error('Error deleting stand:', error)
      }
    },
    resetForm() {
      this.form = {
        title: '',
        description: '',
        configuration: '',
        square: '',
        preview: null,
        images: [],
        theme: '',
        year: ''
      }
      this.editMode = false
      this.editingId = null
    },
    async showStandDetails(stand) {
      try {
        const response = await axios.get(`http://localhost:8081/stands/${stand.id}`)
        this.selectedStand = response.data
      } catch (error) {
        console.error('Error fetching stand details:', error)
      }
    },
    goBackToList() {
      this.selectedStand = null
    }
  }
}
</script>

<style scoped>
form {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input,
textarea,
select {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 10px 15px;
  margin-right: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
