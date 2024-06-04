<script setup></script>
<template>
  <header class="flex flex-col items-center justify-start">
    <div class="z-30 fixed w-full px-[63px] backdrop-blur-md">
      <div
        class="mt-[21px] px-[86px] py-[45px] bg-white flex justify-between items-center gap-[50px] font-mulish text-neutral-600 transition-all text-[15px] rounded-[15px] shadow"
      >
        <ul class="flex items-center justify-start gap-[32px] w-fit">
          <li class="hover:text-[#C50000]"><RouterLink to="/stands"> Портфолио</RouterLink></li>
          <li class="transition-colors group-hover:text-[#0073FF]">/</li>
          <li class="hover:text-[#C50000]"><RouterLink to="/review">Отзывы </RouterLink></li>
          <li class="transition-colors group-hover:text-[#0073FF]">/</li>
          <li class="hover:text-[#C50000] min-w-fit">
            <RouterLink to="/breef">Заполнить бриф</RouterLink>
          </li>
          <li class="transition-colors group-hover:text-[#0073FF]">/</li>
          <li class="hover:text-[#C50000]">Презентация</li>
        </ul>
        <RouterLink to="/">
          <img class="h-[37px] justify-self-center" src="@/assets/img/Logo.png" alt="" />
        </RouterLink>
        <ul class="flex items-center justify-end gap-[32px] max-w-[562px] w-full">
          <li class="hover:text-[#C50000]">kolesnikov.alfa@gmail.con</li>
          <li class="transition-colors group-hover:text-[#0073FF]">/</li>
          <li class="hover:text-[#C50000] min-w-fit">7 951 353 13 63</li>
        </ul>
      </div>
    </div>
  </header>
  <RouterView />
  <footer class="relative footer mt-[93px] pb-[55px]">
    <svg
      class="absolute bottom-0 z-0"
      width="1918"
      height="372"
      viewBox="0 0 1918 372"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="959" cy="307.5" rx="1439" ry="307.5" fill="#E4E4E4" />
    </svg>
    <div class="relative z-20 w-[1700px] mx-auto bg-black rounded-[15px]">
      <div
        class="max-w-[1000px] mx-auto pt-[51px] pb-[90px] text-white flex justify-between items-center transition-all"
      >
        <div class="text-start">
          <ul class="flex flex-col gap-[15px] font-mono text-[15px] text-[#D0D0D0]">
            <li class="font-mulish text-[20px] font-[600] text-white">Карта сайта</li>
            <li class="hover:text-[#FFCD00]"><RouterLink to="/"> Главная</RouterLink></li>
            <li class="hover:text-[#FFCD00]"><RouterLink to="/stands">Портфолио</RouterLink></li>
            <li class="hover:text-[#FFCD00]"><RouterLink to="/review">Отзывы</RouterLink></li>
            <li class="hover:text-[#FFCD00]"><RouterLink to="/service">Услуги</RouterLink></li>
            <li class="hover:text-[#FFCD00]"><RouterLink to="/contacts">Контакты</RouterLink></li>
          </ul>
        </div>
        <div class=""><img class="w-[283px]" src="@/assets/img/logoFoot.png" alt="" /></div>
        <div class="text-end">
          <ul class="flex flex-col gap-[15px] font-mono text-[15px] text-[#D0D0D0]">
            <li class="font-mulish text-[20px] font-[600] text-white">Полезные ссылки</li>
            <li class="hover:text-[#FFCD00]"><a href="">Заказать звонок</a></li>
            <li class="hover:text-[#FFCD00]"><a href="">Скачать презентацию</a></li>
            <li class="hover:text-[#FFCD00]"><a href="">Политика ОПД</a></li>
            <li class="hover:text-[#FFCD00]"><a href="">Заполнить бриф</a></li>
            <li class="hover:text-[#FFCD00]"><a href="">Заполнить бриф</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
// Import Swiper styles

export default {
  data() {
    return {}
  },
  setup() {
    return {}
  },
  methods: {},
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style></style>
