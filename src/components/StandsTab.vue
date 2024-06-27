<template>
  <div class="stands-tab">
    <form @submit.prevent="handleSubmit">
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
        <label for="preview">Preview Image URL:</label>
        <input type="text" v-model="form.preview" />
      </div>
      <div>
        <label for="image">Image URLs (comma separated):</label>
        <input type="text" v-model="form.image" />
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

    <ul>
      <li v-for="stand in standList" :key="stand.id">
        <h3>{{ stand.title }}</h3>
        <p>{{ stand.description }}</p>
        <button @click="editStand(stand)">Edit</button>
        <button @click="deleteStand(stand.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '@/plugins/axios' // Импортируйте настроенный экземпляр Axios

// import axios from 'axios'

export default {
  data() {
    return {
      standList: [],
      form: {
        title: '',
        description: '',
        configuration: '',
        square: '',
        preview: '',
        image: '',
        theme: '',
        year: ''
      },
      editMode: false,
      editingId: null
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
    async handleSubmit() {
      if (this.editMode) {
        this.updateStand()
      } else {
        this.createStand()
      }
    },
    async createStand() {
      try {
        const previewArray = this.form.preview
          ? this.form.preview.split(',').map((item) => item.trim())
          : []
        const imageArray = this.form.image
          ? this.form.image.split(',').map((item) => item.trim())
          : []
        const payload = { ...this.form, preview: previewArray, image: imageArray }
        const response = await axios.post('http://localhost:8081/stands', payload)
        this.standList.push(response.data)
        this.resetForm()
      } catch (error) {
        console.error('Error creating stand:', error)
      }
    },
    async updateStand() {
      try {
        const previewArray = this.form.preview
          ? this.form.preview.split(',').map((item) => item.trim())
          : []
        const imageArray = this.form.image
          ? this.form.image.split(',').map((item) => item.trim())
          : []
        const payload = { ...this.form, preview: previewArray, image: imageArray }
        const response = await axios.put(`http://localhost:8081/stands/${this.editingId}`, payload)
        const index = this.standList.findIndex((stand) => stand.id === this.editingId)
        this.$set(this.standList, index, response.data)
        this.resetForm()
      } catch (error) {
        console.error('Error updating stand:', error)
      }
    },
    editStand(stand) {
      this.editMode = true
      this.editingId = stand.id
      this.form = { ...stand, preview: stand.preview.join(', '), image: stand.image.join(', ') }
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
        preview: '',
        image: '',
        theme: '',
        year: ''
      }
      this.editMode = false
      this.editingId = null
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
