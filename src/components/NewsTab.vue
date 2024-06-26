<template>
  <div class="news-tab">
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
        <label for="content">Content:</label>
        <textarea v-model="form.content" required></textarea>
      </div>
      <div>
        <label for="new_date">Date:</label>
        <input type="date" v-model="form.new_date" required />
      </div>
      <div>
        <label for="new_image">Image URLs (comma separated):</label>
        <input type="text" v-model="form.new_image" />
      </div>
      <div>
        <label for="hotNew">Hot News:</label>
        <input type="checkbox" v-model="form.hotNew" />
      </div>
      <button type="submit">{{ editMode ? 'Update News' : 'Add News' }}</button>
    </form>

    <ul>
      <li v-for="news in newsList" :key="news.id">
        <h3>{{ news.title }}</h3>
        <p>{{ news.description }}</p>
        <button @click="editNews(news)">Edit</button>
        <button @click="deleteNews(news.id)">Delete</button>
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
      newsList: [],
      form: {
        title: '',
        description: '',
        content: '',
        new_date: '',
        new_image: '',
        hotNew: false
      },
      editMode: false,
      editingId: null
    }
  },
  created() {
    this.fetchNews()
  },
  methods: {
    async fetchNews() {
      try {
        const response = await axios.get('http://localhost:8081/news')
        this.newsList = response.data
      } catch (error) {
        console.error('Error fetching news:', error)
      }
    },
    async handleSubmit() {
      if (this.editMode) {
        this.updateNews()
      } else {
        this.createNews()
      }
    },
    async createNews() {
      try {
        const newImageArray = this.form.new_image.split(',').map((item) => item.trim())
        const payload = { ...this.form, new_image: newImageArray }
        const response = await axios.post('http://localhost:8081/news', payload)
        this.newsList.push(response.data)
        this.resetForm()
      } catch (error) {
        console.error('Error creating news:', error)
      }
    },
    async updateNews() {
      try {
        const newImageArray = this.form.new_image.split(',').map((item) => item.trim())
        const payload = { ...this.form, new_image: newImageArray }
        await axios.put(`http://localhost:8081/news/${this.editingId}`, payload)
        const updatedNews = await this.fetchSingleNews(this.editingId)
        const index = this.newsList.findIndex((news) => news.id === this.editingId)
        this.$set(this.newsList, index, updatedNews)
        this.resetForm()
      } catch (error) {
        console.error('Error updating news:', error)
      }
    },
    async fetchSingleNews(id) {
      try {
        const response = await axios.get(`http://localhost:8081/news/${id}`)
        return response.data
      } catch (error) {
        console.error('Error fetching single news:', error)
        return null
      }
    },
    editNews(news) {
      this.editMode = true
      this.editingId = news.id
      // Convert date to proper format (YYYY-MM-DD) for the input
      this.form = {
        ...news,
        new_date: this.formatDate(news.new_date),
        new_image: news.new_image.join(', ')
      }
    },
    async deleteNews(id) {
      try {
        await axios.delete(`http://localhost:8081/news/${id}`)
        this.newsList = this.newsList.filter((news) => news.id !== id)
      } catch (error) {
        console.error('Error deleting news:', error)
      }
    },
    resetForm() {
      this.form = {
        title: '',
        description: '',
        content: '',
        new_date: '',
        new_image: '',
        hotNew: false
      }
      this.editMode = false
      this.editingId = null
    },
    formatDate(date) {
      if (!date) return ''
      return new Date(date).toISOString().slice(0, 10)
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
textarea {
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
