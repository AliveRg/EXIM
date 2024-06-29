<template>
  <div class="comments-tab">
    <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="form.name" required />
      </div>
      <div>
        <label for="content">Content:</label>
        <textarea v-model="form.content" required></textarea>
      </div>
      <div>
        <label for="company">Company:</label>
        <input type="text" v-model="form.company" required />
      </div>
      <div>
        <label for="preview">Preview Image:</label>
        <input type="file" ref="previewInput" name="preview" @change="handlePreviewUpload" />
      </div>
      <!-- <div>
        <label for="image">Image URLs (comma separated):</label>
        <input type="text" v-model="form.image" />
      </div> -->
      <button type="submit">{{ editMode ? 'Update Comment' : 'Add Comment' }}</button>
    </form>

    <div v-if="!selectedComment">
      <ul class="comment-list flex flex-wrap items-center justify-start gap-[50px]">
        <li
          v-for="comment in paginatedComments"
          :key="comment.id"
          class="comment-item border border-[#000] bg-blue-400 rounded-xl p-[10px]"
        >
          <h3>{{ comment.name }}</h3>
          <p>{{ comment.content }}</p>

          <video
            controls
            class="comment-image w-[300px] h-[300px] object-contain"
            v-if="comment.preview"
            :src="`http://localhost:8081/uploads/${comment.preview}`"
            alt="Preview Image"
          ></video>
          <button @click="editComment(comment)">Edit</button>
          <button @click="showCommentDetails(comment)">Details</button>
          <button @click="deleteComment(comment.id)">Delete</button>
        </li>
      </ul>
      <div class="pagination flex justify-between items-center mt-[30px]">
        <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>

    <div v-if="selectedComment">
      <h2>{{ selectedComment.name }}</h2>
      <p>{{ selectedComment.content }}</p>
      <p>{{ selectedComment.company }}</p>
      <video
        controls
        v-if="selectedComment.preview"
        class="w-[700px]"
        :src="`http://localhost:8081/uploads/${selectedComment.preview}`"
        alt="Preview Image"
      ></video>
      <!-- <div v-if="selectedComment.images && selectedComment.images.length">
        <h3>Images:</h3>
        <img
          v-for="image in selectedComment.images"
          :key="image"
          :src="`http://localhost:8081/uploads/${image}`"
          alt="Image"
        />
      </div> -->
      <button @click="goBackToList()">Back to List</button>
    </div>
  </div>
</template>

<script>
import axios from '@/plugins/axios' // Импортируйте настроенный экземпляр Axios

export default {
  data() {
    return {
      commentList: [],
      form: {
        name: '',
        content: '',
        company: '',
        preview: null,
        image: ''
      },
      editMode: false,
      editingId: null,
      selectedComment: null,
      currentPage: 1, // Текущая страница
      pageSize: 9, // Количество комментариев на странице
      totalItems: 0, // Общее количество комментариев
      totalPages: 0, // Общее количество страниц
      paginatedComments: [] // Отображаемые комментарии на текущей странице
    }
  },

  computed: {
    sortedCommList() {
      return this.commentList.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }
  },
  created() {
    this.fetchComments()
  },
  methods: {
    async fetchComments() {
      try {
        const response = await axios.get('http://localhost:8081/comments')
        this.commentList = response.data
        this.totalItems = this.commentList.length
        this.totalPages = Math.ceil(this.totalItems / this.pageSize)
        this.paginateComments()
      } catch (error) {
        console.error('Error fetching comments:', error)
      }
    },
    paginateComments() {
      const startIndex = (this.currentPage - 1) * this.pageSize
      this.paginatedComments = this.commentList.slice(startIndex, startIndex + this.pageSize)
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
        this.paginateComments()
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
        this.paginateComments()
      }
    },
    handlePreviewUpload(event) {
      this.form.preview = event.target.files[0]
    },
    async handleSubmit() {
      if (this.editMode) {
        this.updateComment()
      } else {
        this.createComment()
      }
    },
    async createComment() {
      try {
        const formData = new FormData()
        for (let key in this.form) {
          if (key === 'preview' && this.form.preview instanceof File) {
            formData.append('preview', this.form.preview)
          } else if (key === 'image') {
            const imageArray = this.form.image
              ? this.form.image.split(',').map((item) => item.trim())
              : []
            imageArray.forEach((image) => {
              formData.append('images', image)
            })
          } else {
            formData.append(key, this.form[key])
          }
        }

        const response = await axios.post('http://localhost:8081/comments', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        this.commentList.push(response.data)
        this.resetForm()
      } catch (error) {
        console.error('Error creating comment:', error)
      }
    },
    async updateComment() {
      try {
        const formData = new FormData()
        for (let key in this.form) {
          if (key === 'preview' && this.form.preview instanceof File) {
            formData.append('preview', this.form.preview)
          } else if (key === 'image') {
            const imageArray = this.form.image
              ? this.form.image.split(',').map((item) => item.trim())
              : []
            imageArray.forEach((image) => {
              formData.append('images', image)
            })
          } else {
            formData.append(key, this.form[key])
          }
        }
        console.log(this.editingId)
        const response = await axios.put(
          `http://localhost:8081/comments/${this.editingId}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )

        const index = this.commentList.findIndex((comment) => comment.id === this.editingId)
        if (index !== -1) {
          this.$set(this.commentList, index, response.data)
        }
        this.resetForm()
      } catch (error) {
        console.error('Error updating comment:', error)
      }
    },
    editComment(comment) {
      this.editMode = true
      this.editingId = comment.id
      this.form = {
        ...comment,
        image: comment.images ? comment.images.join(', ') : '',
        preview: comment.preview || null
      }
    },
    async deleteComment(id) {
      try {
        await axios.delete(`http://localhost:8081/comments/${id}`)
        this.commentList = this.commentList.filter((comment) => comment.id !== id)
        this.paginatedComments = this.paginatedComments.filter((comment) => comment.id !== id)
      } catch (error) {
        console.error('Error deleting comment:', error)
      }
    },
    resetForm() {
      this.form = {
        name: '',
        content: '',
        company: '',
        preview: null,
        image: ''
      }
      this.editMode = false
      this.editingId = null
    },
    async showCommentDetails(comment) {
      try {
        const response = await axios.get(`http://localhost:8081/comments/${comment.id}`)
        this.selectedComment = response.data
      } catch (error) {
        console.error('Error fetching comment details:', error)
      }
    },
    goBackToList() {
      this.selectedComment = null
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
