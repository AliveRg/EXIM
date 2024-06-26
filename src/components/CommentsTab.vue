<template>
  <div class="comments-tab">
    <form @submit.prevent="handleSubmit">
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
        <label for="preview">Preview Image URL:</label>
        <input type="text" v-model="form.preview" />
      </div>
      <div>
        <label for="image">Image URLs (comma separated):</label>
        <input type="text" v-model="form.image" />
      </div>
      <button type="submit">{{ editMode ? 'Update Comment' : 'Add Comment' }}</button>
    </form>

    <ul>
      <li v-for="comment in commentList" :key="comment.id">
        <h3>{{ comment.name }}</h3>
        <p>{{ comment.content }}</p>
        <button @click="editComment(comment)">Edit</button>
        <button @click="deleteComment(comment.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      commentList: [],
      form: {
        name: '',
        content: '',
        company: '',
        preview: '',
        image: ''
      },
      editMode: false,
      editingId: null
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
      } catch (error) {
        console.error('Error fetching comments:', error)
      }
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
        const imageArray = this.form.image
          ? this.form.image.split(',').map((item) => item.trim())
          : []
        const payload = { ...this.form, image: imageArray }
        const response = await axios.post('http://localhost:8081/comments', payload)
        this.commentList.push(response.data)
        this.resetForm()
      } catch (error) {
        console.error('Error creating comment:', error)
      }
    },
    async updateComment() {
      try {
        const imageArray = this.form.image
          ? this.form.image.split(',').map((item) => item.trim())
          : []
        const payload = { ...this.form, image: imageArray }
        const response = await axios.put(
          `http://localhost:8081/comments/${this.editingId}`,
          payload
        )
        const index = this.commentList.findIndex((comment) => comment.id === this.editingId)
        this.$set(this.commentList, index, response.data)
        this.resetForm()
      } catch (error) {
        console.error('Error updating comment:', error)
      }
    },
    editComment(comment) {
      this.editMode = true
      this.editingId = comment.id
      this.form = { ...comment, image: comment.image.join(', ') }
    },
    async deleteComment(id) {
      try {
        await axios.delete(`http://localhost:8081/comments/${id}`)
        this.commentList = this.commentList.filter((comment) => comment.id !== id)
      } catch (error) {
        console.error('Error deleting comment:', error)
      }
    },
    resetForm() {
      this.form = {
        name: '',
        content: '',
        company: '',
        preview: '',
        image: ''
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
