<template>
  <div class="news-tab">
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
        <label for="content">Content:</label>
        <textarea v-model="form.content" required></textarea>
      </div>
      <div>
        <label for="new_date">Date:</label>
        <input type="date" v-model="form.new_date" required />
      </div>
      <div>
        <label for="new_image">Preview:</label>
        <input type="file" ref="fileInput" name="new_image" @change="handlePreviewUpload"  />
      </div>
      <div>
        <label for="new_image">Images:</label>
        <input type="file" ref="fileInput" name="images" multiple @change="handleImageUpload"  />
      </div>
      <div>
        <label for="hotNew">Hot News:</label>
        <input type="checkbox" v-model="form.hotNew" />
      </div>
      <button type="submit">{{ editMode ? 'Update News' : 'Add News' }}</button>
    </form>

    <div class="news-tab">
      <!-- Условие для отображения списка новостей или деталей новости -->
      <div v-if="!selectedNews">
        <ul class="news-list flex flex-wrap items-center justify-start gap-[50px]">
          <li
        v-for="news in paginatedNews"
        :key="news.id"
        class="news-item border border-[#000] bg-blue-400 rounded-xl p-[10px]"
      >
            <div class="news-content">
              <h3>{{ news.title }}</h3>
              <p>{{ news.description }}</p>
              <img
                class="news-image w-[300px] h-[300px] object-contain"
                v-if="news.new_image"
                :src="`http://localhost:8081/uploads/${news.new_image}`"
                alt="News Image"
              />
              <div class="button-group">
                <button @click="showNewsDetails(news)">Details</button>
                <button @click="editNews(news)">Edit</button>
                <button @click="deleteNews(news.id)">Delete</button>
              </div>
            </div>
          </li>
        </ul>
        <!-- Элементы управления пагинацией -->
        <div class="pagination flex justify-between items-center mt-[30px]">
          <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>
      </div>

      <!-- Детали новости -->
      <div v-if="selectedNews" class="news-details">
        <h2>
          <span class="font-bold font-mono text-[26px] px-10px">Заголовок:</span>
          {{ selectedNews.title }}
        </h2>
        <p>
          <span class="font-bold font-mono text-[26px] px-10px">Описание:</span>
          {{ selectedNews.description }}
        </p>
        <p>
          <span class="font-bold font-mono text-[26px] px-10px">Контент:</span>
          {{ selectedNews.content }}
        </p>
        <p class="flex items-center gap-[20px]">
          <span class="font-bold font-mono text-[26px] px-10px">Горячая новость:</span>
          <div class="w-[20px] h-[20px] ":class="selectedNews.hotNew ? 'bg-green-600' : 'bg-red-600'"></div>
         
        </p>
        <img
          class="news-image w-[700px]"
          v-if="selectedNews.new_image"
          :src="`http://localhost:8081/uploads/${selectedNews.new_image}`"
          alt="News Image"
        />
        <div>
        <h3>Images:</h3>
        <swiper :slides-per-view="1" :space-between="8" navigation pagination class="w-1/2">
          <swiper-slide v-for="image in selectedNews.images" :key="image">
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
      newsList: [],
      form: {
        title: '',
        description: '',
        content: '',
        new_date: '',
        new_image: null,
        images: [], // добавляем массив для изображений
        hotNew: false
      },
      editMode: false,
      editingId: null,
      selectedNews: null,
      currentPage: 1, // Текущая страница
      pageSize: 9, // Количество новостей на странице
      totalItems: 0, // Общее количество новостей
      totalPages: 0, // Общее количество страниц
      paginatedNews: [],
    }
  },
  computed: {
    sortedNewsList() {
      return this.newsList.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    },
    // paginatedNewsList() {
    //   const start = (this.currentPage - 1) * this.newsPerPage
    //   const end = start + this.newsPerPage
    //   return this.sortedNewsList.slice(start, end)
    // },
    // totalPages() {
    //   return Math.ceil(this.newsList.length / this.newsPerPage)
    // }
  },
  created() {
    this.fetchNews()
  },
  methods: {
    async fetchNews() {
      try {
        const response = await axios.get('http://localhost:8081/news')
        this.newsList = response.data
        this.totalItems = this.newsList.length
        this.totalPages = Math.ceil(this.totalItems / this.pageSize)
        this.paginateNews()
      } catch (error) {
        console.error('Error fetching news:', error)
      }
    },
    async paginateNews() {
      const startIndex = (this.currentPage - 1) * this.pageSize
      this.paginatedNews = this.sortedNewsList.slice(startIndex, startIndex + this.pageSize)
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
        this.paginateNews()
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
        this.paginateNews()
      }
    },
    handlePreviewUpload(event) {
      this.form.new_image = event.target.files[0]
    },
    handleImageUpload(event) {
      this.form.images = Array.from(event.target.files)
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
        const formData = new FormData()
        formData.append('title', this.form.title)
        formData.append('description', this.form.description)
        formData.append('content', this.form.content)
        formData.append('new_date', this.form.new_date)
        formData.append('hotNew', this.form.hotNew)
        if (this.form.new_image) {
          formData.append('new_image', this.form.new_image)
        }
        this.form.images.forEach((image) => {
          formData.append('images', image)
        })

        const response = await axios.post('http://localhost:8081/news', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        this.newsList.push(response.data)
        this.resetForm()
      } catch (error) {
        console.error('Error creating news:', error)
      }
    },
    async updateNews() {
      try {
        const formData = new FormData()
        formData.append('title', this.form.title)
        formData.append('description', this.form.description)
        formData.append('content', this.form.content)
        formData.append('new_date', this.form.new_date)
        formData.append('hotNew', this.form.hotNew)
        if (this.form.new_image) {
          formData.append('new_image', this.form.new_image)
        }
        this.form.images.forEach((image) => {
          formData.append('images', image)
        })

        await axios.put(`http://localhost:8081/news/${this.editingId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

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
      this.form = {
        title: news.title,
        description: news.description,
        content: news.content,
        new_date: this.formatDate(news.new_date),
        new_image: null, // очищаем изображение при редактировании
        images: [], // очищаем изображения при редактировании
        hotNew: news.hotNew
      }
    },
    async deleteNews(id) {
      try {
        await axios.delete(`http://localhost:8081/news/${id}`)
        this.newsList = this.newsList.filter((news) => news.id !== id)
        this.paginatedNews = this.paginatedNews.filter((news) => news.id !== id)
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
        new_image: null,
        images: [],
        hotNew: false
      }
      this.editMode = false
      this.editingId = null
    },
    async showNewsDetails(news) {
      try {
        const response = await axios.get(`http://localhost:8081/news/${news.id}`)
        this.selectedNews = response.data
      } catch (error) {
        console.error('Error fetching news details:', error)
      }
    },
    goBackToList() {
      this.selectedNews = null
    },
    formatDate(date) {
      if (!date) return ''
      const d = new Date(date)
      const month = '' + (d.getMonth() + 1)
      const day = '' + d.getDate()
      const year = d.getFullYear()
      return [year, month.padStart(2, '0'), day.padStart(2, '0')].join('-')
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
