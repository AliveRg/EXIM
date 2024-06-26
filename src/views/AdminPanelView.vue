<template>
  <div class="mt-[300px] mx-[100px]">
    <div class="admin-panel">
      <h1>Admin Panel</h1>
      <div class="flex items-center justify-start gap-[30px] text-[#ffffff]">
        <div class="px-[25px] py-[13px] bg-blue-600 hover:bg-blue-800 rounded-xl">
          <button @click="activeTab = 'news'">News</button>
        </div>
        <div class="px-[25px] py-[13px] bg-blue-600 hover:bg-blue-800 rounded-xl">
          <button @click="activeTab = 'stands'">Stands</button>
        </div>
        <div class="px-[25px] py-[13px] bg-blue-600 hover:bg-blue-800 rounded-xl">
          <button @click="activeTab = 'comments'">Comments</button>
        </div>
      </div>

      <div v-if="activeTab == 'news'">
        <h2 class="m-[20px] rounded-xl bg-blue-600 px-[14px] py-[8px] text-center text-[#ffffff]">
          News
        </h2>
        <NewsTab />
      </div>
      <div v-if="activeTab == 'stands'">
        <h2 class="m-[20px] rounded-xl bg-blue-600 px-[14px] py-[8px] text-center text-[#ffffff]">
          Stands
        </h2>
        <StandsTab />
      </div>
      <div v-if="activeTab == 'comments'">
        <h2 class="m-[20px] rounded-xl bg-blue-600 px-[14px] py-[8px] text-center text-[#ffffff]">
          Comments
        </h2>
        <CommentsTab />
      </div>
    </div>
  </div>
</template>

<script>
import NewsTab from '@/components/NewsTab.vue'
import StandsTab from '@/components/StandsTab.vue'
import CommentsTab from '@/components/CommentsTab.vue'

export default {
  components: {
    NewsTab,
    StandsTab,
    CommentsTab
  },
  data() {
    return {
      activeTab: 'news'
    }
  },
  mounted() {
    const token = localStorage.getItem('token')
    if (!token) {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
button {
  margin-right: 10px;
}
</style>
