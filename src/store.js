// src/store.js
import { createStore } from 'vuex'
import axios from '@/plugins/axios' // Импортируйте настроенный экземпляр Axios

const store = createStore({
  state: {
    comments: [],
    stands: [],
    news: []
  },
  mutations: {
    setComments(state, comments) {
      state.comments = comments
    },
    addComment(state, comment) {
      state.comments.push(comment)
    },
    updateComment(state, updatedComment) {
      const index = state.comments.findIndex((comment) => comment.id === updatedComment.id)
      if (index !== -1) {
        state.comments[index] = updatedComment
      }
    },
    deleteComment(state, commentId) {
      state.comments = state.comments.filter((comment) => comment.id !== commentId)
    },
    setStands(state, stands) {
      state.stands = stands
    },
    addStand(state, stand) {
      state.stands.push(stand)
    },
    updateStand(state, updatedStand) {
      const index = state.stands.findIndex((stand) => stand.id === updatedStand.id)
      if (index !== -1) {
        state.stands[index] = updatedStand
      }
    },
    deleteStand(state, standId) {
      state.stands = state.stands.filter((stand) => stand.id !== standId)
    },
    setNews(state, news) {
      state.news = news
    },
    addNews(state, news) {
      state.news.push(news)
    },
    updateNews(state, updatedNews) {
      const index = state.news.findIndex((newsItem) => newsItem.id === updatedNews.id)
      if (index !== -1) {
        state.news[index] = updatedNews
      }
    },
    deleteNews(state, newsId) {
      state.news = state.news.filter((newsItem) => newsItem.id !== newsId)
    }
  },
  actions: {
    // Actions for comments
    async fetchComments({ commit }) {
      try {
        const response = await axios.get('https://serverexpress.onrender.com/comments')
        commit('setComments', response.data)
      } catch (error) {
        console.error('Error fetching comments:', error)
      }
    },
    async createComment({ commit }, payload) {
      try {
        const response = await axios.post('https://serverexpress.onrender.com/comments', payload)
        commit('addComment', response.data)
      } catch (error) {
        console.error('Error creating comment:', error)
      }
    },
    async updateComment({ commit }, { id, payload }) {
      try {
        const response = await axios.put(
          `https://serverexpress.onrender.com/comments/${id}`,
          payload
        )
        commit('updateComment', response.data)
      } catch (error) {
        console.error('Error updating comment:', error)
      }
    },
    async deleteComment({ commit }, id) {
      try {
        await axios.delete(`https://serverexpress.onrender.com/comments/${id}`)
        commit('deleteComment', id)
      } catch (error) {
        console.error('Error deleting comment:', error)
      }
    },

    // Actions for stands
    async fetchStands({ commit }) {
      try {
        const response = await axios.get('https://serverexpress.onrender.com/stands')
        commit('setStands', response.data)
      } catch (error) {
        console.error('Error fetching stands:', error)
      }
    },
    async createStand({ commit }, payload) {
      try {
        const response = await axios.post('https://serverexpress.onrender.com/stands', payload)
        commit('addStand', response.data)
      } catch (error) {
        console.error('Error creating stand:', error)
      }
    },
    async updateStand({ commit }, { id, payload }) {
      try {
        const response = await axios.put(`https://serverexpress.onrender.com/stands/${id}`, payload)
        commit('updateStand', response.data)
      } catch (error) {
        console.error('Error updating stand:', error)
      }
    },
    async deleteStand({ commit }, id) {
      try {
        await axios.delete(`https://serverexpress.onrender.com/stands/${id}`)
        commit('deleteStand', id)
      } catch (error) {
        console.error('Error deleting stand:', error)
      }
    },

    // Actions for news
    async fetchNews({ commit }) {
      try {
        const response = await axios.get('https://serverexpress.onrender.com/news')
        commit('setNews', response.data)
      } catch (error) {
        console.error('Error fetching news:', error)
      }
    },
    async createNews({ commit }, payload) {
      try {
        const response = await axios.post('https://serverexpress.onrender.com/news', payload)
        commit('addNews', response.data)
      } catch (error) {
        console.error('Error creating news:', error)
      }
    },
    async updateNews({ commit }, { id, payload }) {
      try {
        const response = await axios.put(`https://serverexpress.onrender.com/news/${id}`, payload)
        commit('updateNews', response.data)
      } catch (error) {
        console.error('Error updating news:', error)
      }
    },
    async deleteNews({ commit }, id) {
      try {
        await axios.delete(`https://serverexpress.onrender.com/news/${id}`)
        commit('deleteNews', id)
      } catch (error) {
        console.error('Error deleting news:', error)
      }
    }
  },
  getters: {
    comments: (state) => state.comments,
    stands: (state) => state.stands,
    news: (state) => state.news
  }
})

export default store
