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
        <input type="file" ref="imageInput" name="image" @change="handleImageUpload" multiple />
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
          v-for="stand in paginatedStands"
          :key="stand.id"
          class="news-item border border-[#000] bg-blue-400 rounded-xl p-[10px]"
        >
          <!-- Display stand information -->
          <h3>{{ stand.title }}</h3>
          <p>{{ stand.description }}</p>
          <img
            v-if="stand.preview"
            :src="`http://localhost:8081/uploads/${stand.preview}`"
            class="news-image w-[300px] h-[300px] object-contain"
            alt="Preview Image"
          />
          <button @click="editStand(stand)">Edit</button>
          <button @click="showStandDetails(stand)">Details</button>
          <button @click="deleteStand(stand.id)">Delete</button>
        </li>
      </ul>
      <div class="pagination flex justify-between items-center mt-[30px]">
        <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
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
      <div>
        <h3>Images:</h3>
        <swiper :slides-per-view="2" :space-between="8" navigation pagination class="w-1/2">
          <swiper-slide v-for="image in selectedStand.image" :key="image">
            <img
              :src="`http://localhost:8081/uploads/${image}`"
              alt="Image"
              class="w-[200px] h-auto"
            />
          </swiper-slide>
        </swiper>
      </div>
      <button @click="goBackToList()">Back to List</button>
    </div>
  </div>
</template>

<script>
import axios from '@/plugins/axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      standList: [],
      form: {
        title: '',
        description: '',
        configuration: '',
        square: '',
        preview: null,
        images: [],
        theme: '',
        year: ''
      },
      editMode: false,
      editingId: null,
      selectedStand: null,
      currentPage: 1, // Current page of pagination
      pageSize: 9, // Number of stands per page
      totalItems: 0, // Total number of stands
      totalPages: 0, // Total number of pages
      paginatedStands: [] // Array to hold stands for the current page
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
        const response = await axios.get('http://localhost:8081/stands', {
          params: {
            _page: this.currentPage, // Pass current page as a query parameter
            _limit: this.pageSize // Pass page size as a query parameter
          }
        })
        this.standList = response.data
        // Assuming you receive total count headers, update totalItems and totalPages
        this.totalItems = this.standList.length
        this.totalPages = Math.ceil(this.totalItems / this.pageSize)
        this.paginateStands()
      } catch (error) {
        console.error('Error fetching stands:', error)
      }
    },
    paginateStands() {
      const startIndex = (this.currentPage - 1) * this.pageSize
      this.paginatedStands = this.standList.slice(startIndex, startIndex + this.pageSize)
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
        this.fetchStands() // Fetch stands for previous page
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
        this.fetchStands() // Fetch stands for next page
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
        const formData = new FormData()
        formData.append('title', this.form.title)
        formData.append('description', this.form.description)
        formData.append('configuration', this.form.configuration)
        formData.append('square', this.form.square)
        formData.append('theme', this.form.theme)
        formData.append('year', this.form.year)
        if (this.form.preview) {
          formData.append('preview', this.form.preview)
        }
        this.form.images.forEach((image) => {
          formData.append('image', image)
        })

        const response = await axios.post('http://localhost:8081/stands', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        this.standList.push(response.data)
        this.resetForm()
      } catch (error) {
        console.error('Error creating stand:', error)
      }
    },
    async updateStand() {
      try {
        const formData = new FormData()
        formData.append('title', this.form.title)
        formData.append('description', this.form.description)
        formData.append('configuration', this.form.configuration)
        formData.append('square', this.form.square)
        formData.append('theme', this.form.theme)
        formData.append('year', this.form.year)
        if (this.form.preview) {
          formData.append('preview', this.form.preview)
        }
        this.form.images.forEach((image) => {
          formData.append('image', image)
        })

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
        this.paginatedStands = this.paginatedStands.filter((stand) => stand.id !== id)
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
