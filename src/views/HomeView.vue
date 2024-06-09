<script setup>
import ButtonForm from '@/components/ButtonComponent.vue'
</script>

<template>
  <main class="">
    <div class="snap-mandatory snap-y overflow-scroll h-screen">
      <div
        class="snap-start z-10 pt-[100px] h-screen font-mono text-white w-full flex items-center justify-between pl-[46px] pr-[56px] vvgBack bg-no-repeat bg-center bg-cover relative bgLandHole"
      >
        <div class="w-1/2 flex flex-col relative">
          <Swiper
            @swiper="onSwiper1"
            ref="swiper1"
            :slides-per-view="1"
            :space-between="150"
            :autoplay="{ delay: 2500, disableOnInteraction: false }"
            :modules="modules"
            class="swiper swiper1 m-0 w-full"
          >
            <!-- Additional required wrapper -->

            <!-- Slides -->
            <swiper-slide>
              <p class="text-[30px] mb-[14px]">Готовитесь к выставке?</p>
              <p class="mb-[41px] text-[90px] font-mulish font-[900] uppercase">
                НАЙДЁМ <br />
                КРЕАТИВНОЕ <br />
                РЕШЕНИЕ
              </p>
              <p class="mb-[3px] font-mono text-[25px] font-[400]">Для вашего стенда</p>
            </swiper-slide>
            <swiper-slide>
              <p class="text-[30px] mb-[14px]">Готовитесь к выставке?</p>
              <p class="mb-[41px] text-[90px] font-mulish font-[900] uppercase">
                НАЙДЁМ <br />
                КРЕАТИВНОЕ <br />
                РЕШЕНИЕ
              </p>
              <p class="mb-[3px] font-mono text-[25px] font-[400]">Для вашего стенда</p>
            </swiper-slide>
            <swiper-slide>
              <p class="text-[30px] mb-[14px]">Готовитесь к выставке?</p>
              <p class="mb-[41px] text-[90px] font-mulish font-[900] uppercase">
                НАЙДЁМ <br />
                КРЕАТИВНОЕ <br />
                РЕШЕНИЕ
              </p>
              <p class="mb-[3px] font-mono text-[25px] font-[400]">Для вашего стенда</p>
            </swiper-slide>
          </Swiper>

          <p class="mb-[100px] text-[#FFCD00] font-mono text-[15px] font-[400]">Подробнее →</p>
          <div class="flex justify-start gap-[20px] custom-pagination left-0">
            <svg
              v-for="(slide, index) in slides1"
              :key="index"
              @click="goToSlide1(index)"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="2"
              viewBox="0 0 60 2"
              fill="none"
            >
              <path d="M0 1H60" :stroke="index == activePaginationIndex1 ? '#FFCD00' : '#ffffff'" />
            </svg>
          </div>
        </div>
        <div
          class="relative z-[100] px-[50px] pt-[59px] pb-[68px] border borderwhite/30 h-fit font-mono"
        >
          <p class="mb-[65px] text-white font-mulish text-[20px] font-[900]">
            Перезвоним Вам и обсудим проект
          </p>
          <input
            type="text"
            class="mb-[44px] border-b border-transparent border-b-white bg-transparent outline-none p-1 placeholder-white w-full text-[15px]"
            placeholder="Ваше имя"
          />
          <input
            type="text"
            class="mb-[26px] border-b border-transparent border-b-white bg-transparent outline-none p-1 placeholder-white w-full text-[15px]"
            placeholder="Ваш телефон"
          />
          <p class="text-white pb-[22px]">
            Нажимая «Отправить», вы соглашаетесь с <br />
            политикой конфиденциальности
          </p>
          <ButtonForm />
        </div>
      </div>
      <div class="h-auto snap-start">
        <section
          class="section-1 flex flex-col items-center justify-start px-[65px] bg-neutral-100 py-[153px]"
        >
          <div class="max-w-[1000px] w-full mx-auto flex flex-col justify-center items-end">
            <p
              class="flex items-center gap-[20px] font-mulish font-[900] text-black text-[20px] w-full"
            >
              <span class="text-[30px] font-[800]">
                <span class="text-[#0073FF] text-[25px]">1 /</span>
                EXIM</span
              >
              <svg
                width="40"
                height="2"
                viewBox="0 0 40 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H40" stroke="black" />
              </svg>
              Успех и качество с 2022 года
            </p>
            <p class="w-4/5 mr-[7px]">
              Идейные соображения высшего порядка, а также новая модель организационной деятельности
              представляет собой интересный эксперимент проверки систем массового участия.
              Повседневная практика показывает, что новая модель организационной деятельности
              представляет собой интересный эксперимент проверки соответствующий условий
              активизации.
            </p>
          </div>
        </section>
        <section
          class="section-1 flex flex-col items-center justify-start px-[65px] bg-white pt-[86px]"
        >
          <div
            class="max-w-[1000px] w-full mx-auto flex flex-col justify-center items-start gap-[58px]"
          >
            <p
              class="flex items-center gap-[20px] font-mulish font-[900] text-black text-[20px] w-full"
            >
              <span class="text-[30px] font-[800]">
                <span class="text-[#0073FF] text-[25px]">2 /</span>
                Услуги</span
              >
            </p>
            <div
              class="px-[44px] w-full grid grid-cols-4 grid-rows-2 gap-y-[10px] gap-x-[20px] text-[#D0D0D0] font-mulish font-[800] text-[20px]"
            >
              <div
                class="flex flex-col items-center justify-between gap-[20px] group transition-all p-[40px]"
              >
                <svg
                  width="30"
                  height="51"
                  viewBox="0 0 30 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_270_66)">
                    <path
                      d="M13 1H17C23.9036 1 29.5 6.59644 29.5 13.5V38.5C29.5 44.8513 24.3513 50 18 50H12C5.64873 50 0.5 44.8513 0.5 38.5V13.5C0.5 6.59644 6.09644 1 13 1Z"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                    />
                    <path
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      d="M0.5 16H29.5"
                      stroke="#D0D0D0"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15 1.5V16"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke="#D0D0D0"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_270_66">
                      <rect width="30" height="50" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>

                <p class="transition-colors group-hover:text-[#0073FF]">3D Дизайн</p>
              </div>
              <div
                class="flex flex-col items-center justify-between gap-[20px] group transition-all p-[40px]"
              >
                <svg
                  width="43"
                  height="44"
                  viewBox="0 0 43 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_270_22)">
                    <path
                      d="M1.5 4.5L5 8L10.5 1"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.5 5.5H42.5"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M1 22.5L4.5 26L10 19"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15 23.5H42"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M1 39.5L4.5 43L10 36"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15 40.5H42"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_270_22">
                      <rect width="43" height="44" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p class="transition-colors group-hover:text-[#0073FF]">Планировка</p>
              </div>
              <div
                class="flex flex-col items-center justify-between gap-[20px] group transition-all p-[40px]"
              >
                <svg
                  width="47"
                  height="57"
                  viewBox="0 0 47 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_270_88)">
                    <path
                      d="M18.2207 7H43.7207C44.554 7.16667 46.2207 8 46.2207 10C46.2207 12 46.2207 25.8333 46.2207 32.5C46.054 33.3333 45.3207 35 43.7207 35C42.1207 35 27.7207 35 20.7207 35"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M29.7207 4V6.5"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M33.7207 35L39.2207 56"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M1.22086 32.5C1.62086 34.9 2.7207 35 3.72086 35H12.7207L13.2207 55C13.054 55.5 13.2207 56.5 15.2207 56.5C17.2207 56.5 17.7207 55.5 17.7207 55V21L22.7207 24L31.2207 19.5C32.054 19 33.5207 17.7 32.7207 16.5C31.9207 15.3 30.3874 15.6667 29.7207 16L22.7207 20C19.2207 17.5 17.1207 13.5 10.7207 13.5C4.3207 13.5 1.72081 17.5 1.22086 19.5C1.05419 22.8333 0.820862 30.1 1.22086 32.5Z"
                      fill="#D0D0D0"
                      class="transition-colors group-hover:fill-[#0073FF]"
                    />
                    <path
                      d="M17.2209 35H12.7207M12.7207 35H3.72086C2.7207 35 1.62086 34.9 1.22086 32.5C0.820862 30.1 1.05419 22.8333 1.22086 19.5C1.72081 17.5 4.3207 13.5 10.7207 13.5C17.1207 13.5 19.2207 17.5 22.7207 20L29.7207 16C30.3874 15.6667 31.9207 15.3 32.7207 16.5C33.5207 17.7 32.054 19 31.2207 19.5L22.7207 24L17.7207 21V55C17.7207 55.5 17.2207 56.5 15.2207 56.5C13.2207 56.5 13.054 55.5 13.2207 55L12.7207 35Z"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M3.7207 55V35.5H8.7207L8.2207 55C8.05404 55.5 7.3207 56.5 5.7207 56.5C4.1207 56.5 3.7207 55.5 3.7207 55Z"
                      fill="#D0D0D0"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF] group-hover:fill-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M10.2207 10C12.9821 10 15.2207 7.76142 15.2207 5C15.2207 2.23858 12.9821 0 10.2207 0C7.45928 0 5.2207 2.23858 5.2207 5C5.2207 7.76142 7.45928 10 10.2207 10Z"
                      fill="#D0D0D0"
                      class="transition-colors group-hover:fill-[#0073FF]"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_270_88">
                      <rect width="47" height="57" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p class="transition-colors group-hover:text-[#0073FF]">Проектирование</p>
              </div>
              <div
                class="flex flex-col items-center justify-between gap-[20px] group transition-all p-[40px]"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_270_77)">
                    <path
                      d="M20.5 5.5L21.5 1H26.5L27.5 5.5"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M42.4999 20L46.9999 21V26L42.4185 27"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5.5 27L1 26V21L5.5 20"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M28 42.5L27 47H22L21 42.5"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M13.5002 39.5L9.24305 42.4247L5.70752 38.8891L8.50045 34.5001"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.1819 13.1317L5.70703 9.24262L9.24256 5.70709L13.4999 8.50002"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M34.5 8.50002L38.9794 5.73315L42.3799 9.39872L39.761 13.1923"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M39.9498 34L42.4246 37.8891L38.8891 41.4246L35 38.9498"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M24 32.5C28.6944 32.5 32.5 28.6944 32.5 24C32.5 19.3056 28.6944 15.5 24 15.5C19.3056 15.5 15.5 19.3056 15.5 24C15.5 28.6944 19.3056 32.5 24 32.5Z"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                    />
                    <path
                      d="M24 42.5C34.2173 42.5 42.5 34.2173 42.5 24C42.5 13.7827 34.2173 5.5 24 5.5C13.7827 5.5 5.5 13.7827 5.5 24C5.5 34.2173 13.7827 42.5 24 42.5Z"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_270_77">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p class="transition-colors group-hover:text-[#0073FF]">Производство</p>
              </div>
              <div
                class="flex flex-col items-center justify-between gap-[20px] group transition-all p-[40px]"
              >
                <svg
                  width="52"
                  height="40"
                  viewBox="0 0 52 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.60753 34.4856H3.24523C2.35585 34.5997 0.577092 34.3625 0.577092 32.5017C0.577092 30.6408 0.577092 12.0234 0.577092 2.94728C0.554305 2.24037 0.946552 0.826538 2.69784 0.826538C4.44912 0.826538 20.3939 0.826538 28.1474 0.826538C28.8543 0.87215 30.2681 1.36016 30.2681 2.94728C30.2681 4.53441 30.2228 24.7709 30.2002 34.6908"
                    stroke="#D9D9D9"
                    class="transition-colors group-hover:stroke-[#0073FF]"
                  />
                  <path
                    d="M30.2002 9.24121H44.498C45.1982 9.2412 45.2409 9.24124 45.7979 10.5411C46.4547 12.0735 49.5379 20.4837 50.9973 24.4973V32.8437C51.0429 33.2769 50.5584 34.4856 49.1502 34.4856C47.4933 34.4856 45.3874 34.5996 44.498 34.4856"
                    stroke="#D9D9D9"
                    class="transition-colors group-hover:stroke-[#0073FF]"
                  />
                  <path
                    d="M19.1719 34.6008H35.563"
                    stroke="#D9D9D9"
                    class="transition-colors group-hover:stroke-[#0073FF]"
                  />
                  <circle
                    cx="14.3707"
                    cy="34.6908"
                    r="4.30139"
                    stroke="#D9D9D9"
                    class="transition-colors group-hover:stroke-[#0073FF]"
                  />
                  <circle
                    cx="40.3644"
                    cy="34.6908"
                    r="4.30139"
                    stroke="#D9D9D9"
                    class="transition-colors group-hover:stroke-[#0073FF]"
                  />
                </svg>

                <p class="transition-colors group-hover:text-[#0073FF]">Перевозка</p>
              </div>
              <div
                class="flex flex-col items-center justify-between gap-[20px] group transition-all p-[40px]"
              >
                <svg
                  width="41"
                  height="43"
                  viewBox="0 0 41 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_270_118)">
                    <path
                      d="M34.8447 0.923462H6.84473C3.80716 0.923462 1.34473 3.3859 1.34473 6.42346V37.0079C1.34473 40.0454 3.80716 42.5079 6.84473 42.5079H34.8447C37.8823 42.5079 40.3447 40.0454 40.3447 37.0079V6.42346C40.3447 3.3859 37.8823 0.923462 34.8447 0.923462Z"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                    />
                    <path
                      d="M1.2832 14.9631H40.4247"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M1.77197 29.3455H40.4248"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M13.3613 1.45801V14.6389"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M28.8115 1.45801V14.855"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M13.4697 29.3455V41.7572"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M28.5952 29.3455V41.9733"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M20.8447 15.1792V29.3455"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_270_118">
                      <rect width="41" height="43" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p class="transition-colors group-hover:text-[#0073FF]">Монтаж</p>
              </div>
              <div
                class="flex flex-col items-center justify-between gap-[20px] group transition-all p-[40px]"
              >
                <svg
                  width="46"
                  height="51"
                  viewBox="0 0 46 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_270_57)">
                    <path
                      d="M31.8681 40.4516C32.3619 45.5132 30.386 47.9997 29.3364 48.6102C21.01 53.4531 8.31869 47.6348 3.78204 38.6262C0.405771 31.9219 -2.82626 17.0188 7.97839 7.44367C21.5273 -4.5634 35.1285 2.82552 39.4503 5.99673C43.5987 9.04073 49.4345 20.6836 40.5355 24.9522C31.6366 29.2208 31.2509 34.1246 31.8681 40.4516Z"
                      stroke="#D0D0D0"
                      class="transition-colors group-hover:stroke-[#0073FF]"
                      stroke-linecap="round"
                    />
                    <path
                      d="M24.1245 12.3132C25.3707 12.3132 26.3809 11.303 26.3809 10.0568C26.3809 8.81068 25.3707 7.80048 24.1245 7.80048C22.8784 7.80048 21.8682 8.81068 21.8682 10.0568C21.8682 11.303 22.8784 12.3132 24.1245 12.3132Z"
                      fill="#D0D0D0"
                      class="transition-colors group-hover:fill-[#0073FF]"
                    />
                    <path
                      d="M15.161 14.0439C16.1169 14.0439 16.8918 13.269 16.8918 12.3131C16.8918 11.3572 16.1169 10.5823 15.161 10.5823C14.2051 10.5823 13.4302 11.3572 13.4302 12.3131C13.4302 13.269 14.2051 14.0439 15.161 14.0439Z"
                      fill="#D0D0D0"
                      class="transition-colors group-hover:fill-[#0073FF]"
                    />
                    <path
                      d="M9.41199 21.4001C10.7093 21.4001 11.761 20.3484 11.761 19.0511C11.761 17.7538 10.7093 16.7021 9.41199 16.7021C8.11467 16.7021 7.06299 17.7538 7.06299 19.0511C7.06299 20.3484 8.11467 21.4001 9.41199 21.4001Z"
                      fill="#D0D0D0"
                      class="transition-colors group-hover:fill-[#0073FF]"
                    />
                    <path
                      d="M8.42261 30.4506C9.65163 30.4506 10.6479 29.4543 10.6479 28.2253C10.6479 26.9963 9.65163 25.9999 8.42261 25.9999C7.19358 25.9999 6.19727 26.9963 6.19727 28.2253C6.19727 29.4543 7.19358 30.4506 8.42261 30.4506Z"
                      fill="#D0D0D0"
                      class="transition-colors group-hover:fill-[#0073FF]"
                    />
                    <path
                      d="M12.3171 38.3885C13.2869 38.3885 14.0731 37.6023 14.0731 36.6325C14.0731 35.6627 13.2869 34.8765 12.3171 34.8765C11.3472 34.8765 10.561 35.6627 10.561 36.6325C10.561 37.6023 11.3472 38.3885 12.3171 38.3885Z"
                      fill="#D0D0D0"
                      class="transition-colors group-hover:fill-[#0073FF]"
                    />
                    <path
                      d="M19.6115 43.9521C20.8544 43.9521 21.8621 42.9445 21.8621 41.7015C21.8621 40.4585 20.8544 39.4509 19.6115 39.4509C18.3685 39.4509 17.3608 40.4585 17.3608 41.7015C17.3608 42.9445 18.3685 43.9521 19.6115 43.9521Z"
                      fill="#D0D0D0"
                      class="transition-colors group-hover:fill-[#0073FF]"
                    />
                    <path
                      d="M35.3917 18.6185C37.3377 18.6185 38.9153 17.041 38.9153 15.095C38.9153 13.149 37.3377 11.5714 35.3917 11.5714C33.4457 11.5714 31.8682 13.149 31.8682 15.095C31.8682 17.041 33.4457 18.6185 35.3917 18.6185Z"
                      fill="#D0D0D0"
                      class="transition-colors group-hover:fill-[#0073FF]"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_270_57">
                      <rect width="46" height="51" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p class="transition-colors group-hover:text-[#0073FF]">Оформление</p>
              </div>
              <div
                class="flex flex-col items-center justify-between gap-[20px] group transition-all p-[40px]"
              >
                <svg
                  width="42"
                  height="50"
                  viewBox="0 0 42 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.85352 10.4276L6.35596 45.7337C6.49898 46.9499 7.45038 49.3394 10.1118 49.1677C12.7731 48.996 26.173 49.0962 32.5402 49.1677C33.5418 49.0246 35.6309 48.1375 35.9743 45.7337C36.3177 43.3299 36.8328 21.1947 37.0474 10.4276"
                    class="transition-colors group-hover:stroke-[#0073FF]"
                    stroke="#cccccc"
                    stroke-linecap="round"
                  />
                  <path
                    d="M0.561035 10.1057H41.2324"
                    class="transition-colors group-hover:stroke-[#0073FF]"
                    stroke="#cccccc"
                    stroke-linecap="round"
                  />
                  <path
                    d="M13.2144 10.0876V3.99995C13.1028 3.21604 13.4557 1.62142 15.7598 1.51425C18.0639 1.40708 24.2215 1.4696 27.0123 1.51425C27.5258 1.58623 28.5662 2.18415 28.6198 4C28.6733 5.81585 28.6421 8.815 28.6198 10.0876"
                    class="transition-colors group-hover:stroke-[#0073FF]"
                    stroke="#cccccc"
                    stroke-linecap="round"
                  />
                  <path
                    d="M12.8359 18.0681L13.4604 40.8865"
                    class="transition-colors group-hover:stroke-[#0073FF]"
                    stroke="#cccccc"
                    stroke-linecap="round"
                  />
                  <path
                    d="M28.8607 17.8839L28.4175 40.8866"
                    class="transition-colors group-hover:stroke-[#0073FF]"
                    stroke="#cccccc"
                    stroke-linecap="round"
                  />
                  <path
                    d="M21 17.8839V40.8866"
                    class="transition-colors group-hover:stroke-[#0073FF]"
                    stroke="#cccccc"
                    stroke-linecap="round"
                  />
                </svg>
                <p class="transition-colors group-hover:text-[#0073FF]">Утилизация</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <section
      class="section-1 flex flex-col items-center justify-start px-[65px] bg-white pt-[86px] pb-[56px]"
    >
      <div
        class="max-w-[1000px] w-full mx-auto flex flex-col justify-center items-start gap-[58px]"
      >
        <p
          class="flex items-center gap-[20px] font-mulish font-[900] text-black text-[20px] w-full"
        >
          <span class="text-[30px] font-[800]">
            <span class="text-[#0073FF] text-[25px]">3 /</span>
            Отзывы клиентов</span
          >
        </p>
      </div>
    </section>
    <section class="section-1 flex flex-col items-center justify-start bg-black pb-[14px]">
      <div
        class="max-w-[1000px] w-full mx-auto flex flex-col justify-center items-start gap-[36px]"
      >
        <div class="w-full flex items-center justify-center">
          <div class="w-1/2">
            <div class="" v-for="item in 5">
              <!-- <transition name="fade1" mode="out-in"> -->
              <div>
                <img
                  v-if="item == activePaginationIndex"
                  class="w-full"
                  src="@/assets/img/videoPrew.jpeg"
                  alt=""
                />
                <img
                  v-if="item - 1 == activePaginationIndex && item - 1 == 0"
                  class="w-full h-[329px]"
                  src="@/assets/img/PrewUniv.png"
                  alt=""
                />
              </div>
              <!-- </transition> -->
            </div>
          </div>

          <div class="w-1/2 pl-[50px]">
            <Swiper
              @swiper="onSwiper"
              @slideChange="indexRed"
              ref="swiper"
              :slides-per-view="1"
              :space-between="150"
              :autoplay="{ delay: 2500, disableOnInteraction: false }"
              :modules="modules"
              class="swiper swiper2 m-0 w-full"
            >
              <!-- Additional required wrapper -->

              <!-- Slides -->
              <swiper-slide
                class="swiper-slide flex flex-col items-start justify-center text-white"
              >
                <p
                  class="flex items-center gap-[20px] font-mulish font-[900] text-[20px] w-full mb-[20px]"
                >
                  <span class="text-[20px] font-[900]">
                    <span class="text-[#FFCD00] text-[15px]">1 /</span>
                    Lenovo</span
                  >
                </p>
                <p class="font-mono text-[15px] mb-[20px]">
                  "Мы признательны команде Exim за
                  <br />
                  профессионализм, индивидуальный подход, <br />
                  гибкость и оперативность при возникающих в
                  <br />
                  процессе работы вопросов! Спасибо, Exim!
                </p>
                <p class="text-[15px] font-[700] mb-[15px]">Антон, директор компании</p>
                <p class="text-[#FFCD00] font-mono text-[15px] font-[400]">Подробнее →</p>
              </swiper-slide>
              <swiper-slide
                class="swiper-slide flex flex-col items-start justify-center text-white"
              >
                <p
                  class="flex items-center gap-[20px] font-mulish font-[900] text-[20px] w-full mb-[20px]"
                >
                  <span class="text-[20px] font-[900]">
                    <span class="text-[#FFCD00] text-[15px]">1 /</span>
                    Lenovo</span
                  >
                </p>
                <p class="font-mono text-[15px] mb-[20px]">
                  "Мы признательны команде Exim за
                  <br />
                  профессионализм, индивидуальный подход, <br />
                  гибкость и оперативность при возникающих в
                  <br />
                  процессе работы вопросов! Спасибо, Exim!
                </p>
                <p class="text-[15px] font-[700] mb-[15px]">Антон, директор компании</p>
                <p class="text-[#FFCD00] font-mono text-[15px] font-[400]">Подробнее →</p>
              </swiper-slide>
              <swiper-slide
                class="swiper-slide flex flex-col items-start justify-center text-white"
              >
                <p
                  class="flex items-center gap-[20px] font-mulish font-[900] text-[20px] w-full mb-[20px]"
                >
                  <span class="text-[20px] font-[900]">
                    <span class="text-[#FFCD00] text-[15px]">1 /</span>
                    Lenovo</span
                  >
                </p>
                <p class="font-mono text-[15px] mb-[20px]">
                  "Мы признательны команде Exim за
                  <br />
                  профессионализм, индивидуальный подход, <br />
                  гибкость и оперативность при возникающих в
                  <br />
                  процессе работы вопросов! Спасибо, Exim!
                </p>
                <p class="text-[15px] font-[700] mb-[15px]">Антон, директор компании</p>
                <p class="text-[#FFCD00] font-mono text-[15px] font-[400]">Подробнее →</p>
              </swiper-slide>
              <swiper-slide
                class="swiper-slide flex flex-col items-start justify-center text-white"
              >
                <p
                  class="flex items-center gap-[20px] font-mulish font-[900] text-[20px] w-full mb-[20px]"
                >
                  <span class="text-[20px] font-[900]">
                    <span class="text-[#FFCD00] text-[15px]">1 /</span>
                    Lenovo</span
                  >
                </p>
                <p class="font-mono text-[15px] mb-[20px]">
                  "Мы признательны команде Exim за
                  <br />
                  профессионализм, индивидуальный подход, <br />
                  гибкость и оперативность при возникающих в
                  <br />
                  процессе работы вопросов! Спасибо, Exim!
                </p>
                <p class="text-[15px] font-[700] mb-[15px]">Антон, директор компании</p>
                <p class="text-[#FFCD00] font-mono text-[15px] font-[400]">Подробнее →</p>
              </swiper-slide>
              <swiper-slide
                class="swiper-slide flex flex-col items-start justify-center text-white"
              >
                <p
                  class="flex items-center gap-[20px] font-mulish font-[900] text-[20px] w-full mb-[20px]"
                >
                  <span class="text-[20px] font-[900]">
                    <span class="text-[#FFCD00] text-[15px]">1 /</span>
                    Lenovo</span
                  >
                </p>
                <p class="font-mono text-[15px] mb-[20px]">
                  "Мы признательны команде Exim за
                  <br />
                  профессионализм, индивидуальный подход, <br />
                  гибкость и оперативность при возникающих в
                  <br />
                  процессе работы вопросов! Спасибо, Exim!
                </p>
                <p class="text-[15px] font-[700] mb-[15px]">Антон, директор компании</p>
                <p class="text-[#FFCD00] font-mono text-[15px] font-[400]">Подробнее →</p>
              </swiper-slide>
            </Swiper>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center gap-[200px] w-1/2 mt-[16px]">
        <div
          class="group p-5 min-w-[102px]"
          @mouseenter="hovered = false"
          @mouseleave="hovered = true"
        >
          <transition name="fade1" mode="out-in">
            <svg
              v-if="hovered"
              class="swiper-button-prev2 transition-all"
              width="41"
              height="9"
              viewBox="0 0 41 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M40.4609 4.66898H0.941895" stroke="white" stroke-linecap="round" />
              <path d="M0.941895 4.64441L4.27539 0.999054" stroke="white" stroke-linecap="round" />
              <path d="M0.942047 4.64432L4.5874 7.97781" stroke="white" stroke-linecap="round" />
            </svg>
            <svg
              v-else
              width="62"
              height="9"
              viewBox="0 0 62 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M61.0327 5.08426L1.03271 5.08426" stroke="#FFCD00" stroke-linecap="round" />
              <path d="M1.03271 5.05969L4.36621 1.41434" stroke="#FFCD00" stroke-linecap="round" />
              <path d="M1.03287 5.0596L4.67822 8.3931" stroke="#FFCD00" stroke-linecap="round" />
            </svg>
          </transition>
        </div>
        <div class="flex custom-pagination">
          <div
            class="p-[10px] pagination-bullet-wrapper"
            v-for="(slide, index) in slides"
            :key="index"
            @click="goToSlide(index)"
          >
            <div
              class="pagination-bullet w-[60px] h-[0px] border"
              :class="activePaginationIndex == index ? 'border-[#FFCD00]' : 'border-[#ffffff]'"
              data-index="0"
            ></div>
          </div>
        </div>
        <div class="p-5 min-w-[102px]" @mouseenter="hovered1 = false" @mouseleave="hovered1 = true">
          <transition name="fade1" mode="out-in">
            <svg
              v-if="hovered1"
              idth="41"
              height="9"
              viewBox="0 0 41 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.490234 4.48855L40.0093 4.48856" stroke="white" stroke-linecap="round" />
              <path d="M40.0093 4.51312L36.6758 8.15848" stroke="white" stroke-linecap="round" />
              <path d="M40.0091 4.51321L36.3638 1.17972" stroke="white" stroke-linecap="round" />
            </svg>

            <svg
              v-else
              width="62"
              height="9"
              viewBox="0 0 62 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.12598 3.90383L61.126 3.90384" stroke="#FFCD00" stroke-linecap="round" />
              <path d="M61.126 3.92841L57.7925 7.57376" stroke="#FFCD00" stroke-linecap="round" />
              <path d="M61.1258 3.9285L57.4805 0.595001" stroke="#FFCD00" stroke-linecap="round" />
            </svg>
          </transition>
        </div>
      </div>
    </section>
    <section
      class="section-1 flex flex-col items-center justify-start px-[65px] bg-white pt-[86px]"
    >
      <div
        class="max-w-[1000px] w-full mx-auto flex flex-col justify-center items-start gap-[58px]"
      >
        <p
          class="flex items-center gap-[20px] font-mulish font-[900] text-black text-[20px] w-full"
        >
          <span class="text-[30px] font-[800]">
            <span class="text-[#0073FF] text-[25px]">4 /</span>
            Почему именно мы?</span
          >
        </p>
        <div
          class="px-[44px] w-full grid grid-cols-3 grid-rows-2 gap-y-[10px] gap-x-[20px] text-[#D0D0D0] font-mulish font-[800] text-[20px]"
        >
          <div
            class="flex flex-col items-start justify-start gap-[35px] group transition-all px-[30px] pb-[67px] py-[38px] border border-transparent hover:border-[#E2E2E2] hover:scale-[1.05] rounded-[10px]"
          >
            <svg
              class="text-[#000] w-[70px] h-[70px]"
              width="49"
              height="51"
              viewBox="0 0 49 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20"
                cy="20"
                r="18.5"
                class="transition-colors group-hover:stroke-[#C50000]"
                stroke="#cccccc"
                stroke-width="3"
              />
              <path
                d="M32 34L47.5 49.5"
                class="transition-colors group-hover:stroke-[#C50000]"
                stroke="#cccccc"
                stroke-width="3"
              />
            </svg>

            <p class="text-black font-mulish font-[900]">Прозрачность</p>
            <p class="text-[15px] font-mono text-black font-[400]">
              У нас есть собственное производство в Москве, на котором вы можете увидеть, как мы
              создаём ваш стенд. Презентацию стенда мы можем провести в нашем офисе, чтобы вы сразу
              очно познакомились с менеджером, который будет вести проект.
            </p>
          </div>
          <div
            class="flex flex-col items-start justify-start gap-[35px] group transition-all px-[30px] pb-[67px] py-[38px] border border-transparent hover:border-[#E2E2E2] hover:scale-[1.05] rounded-[10px]"
          >
            <svg
              width="73"
              height="58"
              viewBox="0 0 73 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="36.8999"
                cy="28.8033"
                r="27.2334"
                class="transition-colors group-hover:stroke-[#C50000]"
                stroke="#cccccc"
                stroke-width="2"
              />
              <path
                d="M70.8569 23.3005L63.9189 34.306L56.1431 23.3005L70.8569 23.3005Z"
                fill="#D0D0D0"
                class="transition-colors group-hover:stroke-[#C50000] group-hover:fill-[#C50000]"
                stroke="#cccccc"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M2.70068 37.0178L9.63867 26.0123L17.4145 37.0178H2.70068Z"
                fill="#D0D0D0"
                class="transition-colors group-hover:stroke-[#C50000] group-hover:fill-[#C50000]"
                stroke="#cccccc"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            <p class="text-black font-mulish font-[900]">Универсальность</p>
            <p class="text-[15px] font-mono text-black font-[400]">
              Мы любим трудные задачи, но поможем и с простыми. Нам доверяют строительство сложных
              стендов крупные компании на статусные выставочные события. С нами работают
              представительства европейских брендов, которые только выходят на российский рынок.
            </p>
          </div>
          <div
            class="flex flex-col items-start justify-start gap-[35px] group transition-all px-[30px] pb-[67px] py-[38px] border border-transparent hover:border-[#E2E2E2] hover:scale-[1.05] rounded-[10px]"
          >
            <svg
              width="56"
              height="51"
              viewBox="0 0 56 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.0679 10.2947C26.6546 6.88855 22.0019 0.271899 14.6973 1.05457C5.56649 2.03291 -16.2839 17.5026 28.0678 49.5699"
                stroke="#D0D0D0"
                class="transition-colors group-hover:stroke-[#C50000]"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M28.0683 10.2863C29.4818 7.02764 34.1353 0.697568 41.4412 1.44634C50.5736 2.38231 72.4274 18.6023 28.0679 49.2808"
                stroke="#D0D0D0"
                class="transition-colors group-hover:stroke-[#C50000]"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            <p class="text-black font-mulish font-[900]">Лояльность</p>
            <p class="text-[15px] font-mono text-black font-[400]">
              В нашем портфолио 40% стендов для постоянных клиентов. С некоторыми заказчиками мы
              работаем больше 10 лет. Нас рекомендуют как надежного выставочного застройщика своим
              партнерам. Мы публикуем живые видео-отзывы наших клиентов после проведения выставок.
            </p>
          </div>
          <div
            class="flex flex-col items-start justify-start gap-[35px] group transition-all px-[30px] pb-[67px] py-[38px] border border-transparent hover:border-[#E2E2E2] hover:scale-[1.05] rounded-[10px]"
          >
            <svg
              width="62"
              height="56"
              viewBox="0 0 62 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.3198 10.7681C30.6089 11.2355 32.8003 12.8754 31.2534 15.696C29.3198 19.2217 21.5348 20.8942 19.9075 14.6112C18.2803 8.32818 22.955 -0.333211 30.4427 1.26253C37.9304 2.85827 48.8027 13.1359 34.8707 27.3748"
                stroke="#D0D0D0"
                class="transition-colors group-hover:stroke-[#C50000]"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M47.4743 39.6685C46.2323 40.2495 43.5231 40.6394 42.6224 37.5512C41.4967 33.6909 45.8188 27.0034 51.4122 30.2955C57.0057 33.5877 59.8246 43.0177 53.4017 47.184C46.9787 51.3502 31.9193 52.088 31.7023 32.1682"
                stroke="#D0D0D0"
                class="transition-colors group-hover:stroke-[#C50000]"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M15.5629 40.7417C15.3232 39.3917 15.6477 36.6739 18.8639 36.6032C22.884 36.5149 28.2249 42.4207 23.5973 46.9714C18.9697 51.5222 9.13131 51.8044 6.76942 44.522C4.40752 37.2396 7.59248 22.5024 26.8897 27.4484"
                stroke="#D0D0D0"
                class="transition-colors group-hover:stroke-[#C50000]"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M31.6746 32.6017C31.4095 29.8048 28.3039 28.0331 26.832 27.4811C32.6098 28.4014 31.2548 28.4762 35.0386 27.1864C33.0889 29.4448 32.5119 29.7746 31.6746 32.6017Z"
                fill="#D0D0D0"
                stroke="#D0D0D0"
                class="transition-colors group-hover:stroke-[#C50000] group-hover:fill-[#C50000]"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            <p class="text-black font-mulish font-[900]">Творчество</p>
            <p class="text-[15px] font-mono text-black font-[400]">
              Мы работаем с вашим техническим заданием, но всегда оставляем себе место для
              творчества в рамках бюджета.Наша цель - уникальный имиджевый стенд, который обладает
              необходимым функционалом и отвечает вашим маркетинговым задачам.
            </p>
          </div>
          <div
            class="flex flex-col items-start justify-start gap-[35px] group transition-all px-[30px] pb-[67px] py-[38px] border border-transparent hover:border-[#E2E2E2] hover:scale-[1.05] rounded-[10px]"
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.146 12.0584V44.3824"
                stroke="#D9D9D9"
                class="transition-colors group-hover:stroke-[#C50000]"
                stroke-width="2"
                stroke-linecap="round"
              />
              <circle
                cx="27.8564"
                cy="28.2154"
                r="26.6455"
                class="transition-colors group-hover:stroke-[#C50000]"
                stroke="#D9D9D9"
                stroke-width="2"
              />
              <path
                d="M35.8879 20.838C35.6221 19.0289 33.7176 15.4107 28.2263 15.4107C21.3622 15.4107 19.8457 19.883 19.8457 21.7256C19.8457 23.1624 19.7666 26.0906 28.2263 27.2154C36.686 28.3402 35.8879 32.9834 35.8879 34.819C35.8879 36.6547 33.4136 40.7111 27.747 40.7111C22.0803 40.7111 19.8457 36.0022 19.8457 35.2839"
                stroke="#D9D9D9"
                class="transition-colors group-hover:stroke-[#C50000]"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            <p class="text-black font-mulish font-[900]">Бюджет</p>
            <p class="text-[15px] font-mono text-black font-[400]">
              Мы всегда придерживаемся выставочного бюджета, предлагая проект с учетом финансовых
              требований заказчика. Можем подобрать стоимость стенда под любой бюджет.
            </p>
          </div>
          <div
            class="flex flex-col items-start justify-start gap-[35px] group transition-all px-[30px] pb-[67px] py-[38px] border border-transparent hover:border-[#E2E2E2] hover:scale-[1.05] rounded-[10px]"
          >
            <svg
              width="54"
              height="55"
              viewBox="0 0 54 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.01221"
                y="5.79181"
                width="51.5801"
                height="35.9759"
                rx="3"
                class="transition-colors group-hover:stroke-[#C50000]"
                stroke="#D0D0D0"
                stroke-width="2"
              />
              <path
                d="M26.8022 1.815V5.60352"
                stroke="#D0D0D0"
                class="transition-colors group-hover:stroke-[#C50000]"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M11.7876 53.5011L18.4175 42.1356"
                stroke="#D0D0D0"
                class="transition-colors group-hover:stroke-[#C50000]"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M35.4663 42.2711L42.0962 53.7719"
                stroke="#D0D0D0"
                class="transition-colors group-hover:stroke-[#C50000]"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M11.3823 28.6053L16.8022 30.9055L23.0183 22.1107L31.9483 28.6053L42.2314 15.616"
                stroke="#D0D0D0"
                class="transition-colors group-hover:stroke-[#C50000]"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            <p class="text-black font-mulish font-[900]">Эффективность</p>
            <p class="text-[15px] font-mono text-black font-[400]">
              Мы строим всё максимально быстро и качественно, укладываясь в сроки и решая все
              пробелемы очень быстро. Стенды всегда готовы вовремя, в иногда даже раньше срока.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="section-1 flex flex-col items-center justify-start px-[65px] bg-white pt-[86px]"
    >
      <div class="max-w-[1000px] w-full mx-auto flex flex-col justify-center items-start">
        <p
          class="flex items-center gap-[20px] font-mulish font-[900] text-black text-[20px] w-full mb-[72px]"
        >
          <span class="text-[30px] font-[800]">
            <span class="text-[#0073FF] text-[25px]">5 /</span>
            Как мы работаем?</span
          >
        </p>

        <div class="flex items-center justify-between w-full">
          <div
            class="flex group select-none cursor-pointer"
            v-for="item in fiveBlock"
            :key="item.id"
          >
            <svg
              width="180"
              height="100"
              viewBox="0 0 180 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="setActive(item.id)"
            >
              <circle
                cx="50"
                cy="50"
                r="49.5"
                :stroke="item.active ? '#C50000' : '#0073FF'"
                class="transition-colors group-hover:stroke-[#C50000]"
              />
              <path
                v-if="item.id != 6"
                d="M180 50L175 47.1132V52.8868L180 50ZM100 50.5H175.5V49.5H100V50.5Z"
                :fill="item.active ? '#0073FF' : '#0073FF'"
                class="transition-colors group-hover:fill-[#0073FF]"
              />
              <text
                x="50"
                y="55"
                text-anchor="middle"
                font-size="20"
                :fill="item.active ? '#C50000' : '#0073FF'"
                class="transition-colors group-hover:fill-[#C50000]"
              >
                {{ item.id }}
              </text>
            </svg>
          </div>
        </div>
        <div class="ml-[50px] mt-[41px] flex items-center justify-start">
          <div class="relative">
            <div class="mr-[37px] inset-0 h-[109px] w-[2px] bg-[#61A5F8]"></div>
          </div>
          <Transition name="fade" mode="out-in">
            <p v-if="activeItem" :key="activeItem.id" class="font-mono text-[15px] font-[400]">
              {{ activeItem.content }}
            </p>
          </Transition>
        </div>
      </div>
    </section>
    <section
      class="section-1 flex flex-col items-center justify-start px-[65px] bg-white pt-[86px]"
    >
      <div class="max-w-[1000px] w-full mx-auto flex flex-col justify-center items-start">
        <div class="flex w-full items-center justify-between mb-[71px]">
          <p
            class="flex items-center gap-[20px] font-mulish font-[900] text-black text-[20px] w-full"
          >
            <span class="text-[30px] font-[800]">
              <span class="text-[#0073FF] text-[25px]">6 /</span>
              Последние новости</span
            >
          </p>
          <p class="min-w-fit text-[#898989] text-[15px] font-mono">Все новости →</p>
        </div>
      </div>
      <div class="flex justify-between flex-wrap gap-[21px]">
        <div v-for="item in 3" :key="item" class="flex flex-col">
          <div class="border border-[#E2E2E2] pt-[14px] pb-[11px] px-[21px]">
            <p class="font-mulish text-[20px] font-[800]">YKK GROUP</p>
            <p class="font-mono text-[15px] font-[400]">Промышленность</p>
          </div>
          <img src="@/assets/img/prewCont.jpeg" class="w-[319px]" alt="" />
        </div>
      </div>
    </section>
    <section class="section-1 flex flex-col items-center justify-start bg-white pt-[86px]">
      <div class="max-w-[1000px] w-full mx-auto flex flex-col justify-center items-start">
        <div class="flex w-full items-center justify-between mb-[56px]">
          <p
            class="flex items-center gap-[20px] font-mulish font-[900] text-black text-[20px] w-full"
          >
            <span class="text-[30px] font-[800]">
              <span class="text-[#0073FF] text-[25px]">7 /</span>
              Готовитесь к выставке?</span
            >
          </p>
        </div>
      </div>
      <div class="w-full bg-black pt-[70px] pb-[75px]">
        <div class="max-w-[915px] w-full mx-auto flex flex-col justify-center items-start">
          <p class="font-mulish font-[800] text-[20px] text-white mb-[27px]">
            Заполните форму, и мы с Вами свяжемся
          </p>
          <p class="font-mono font-[400] text-[15px] text-white mb-[41px]">
            Свяжитесь с нами, мы обязательно поможем. Найдем для вас креативное решение,
            спроектируем технологичный, современный стенд, поможем с проведением выставки, оформим
            любое мероприятие, разработаем уникальный контент, предоставим необходимое оборудование
            и обеспечим сопровождение.
          </p>
          <div class="w-full flex gap-[40px]">
            <div class="w-1/2 flex flex-col gap-[47px]">
              <div class="form__group field w-full">
                <input
                  type="input"
                  class="form__field font-mono"
                  placeholder="Ваше имя"
                  name="name"
                  id="name"
                  required
                />
                <label for="name" class="form__label font-mono">Ваше имя</label>
              </div>
              <div class="w-full text-right">
                <p class="font-mono text-white font-[400] text-[10px]">
                  Нажимая «Отправить», вы соглашаетесь с <br />
                  политикой конфиденциальности
                </p>
              </div>
            </div>
            <div class="w-1/2 flex flex-col gap-[34px]">
              <div class="form__group field w-full">
                <input
                  type="input"
                  class="form__field font-mono"
                  placeholder="Ваш телефон"
                  name="tell"
                  id="tell"
                  required
                />
                <label for="tell" class="form__label font-mono">Ваш телефон</label>
              </div>
              <button
                class="w-full hover:bg-[#1700c5] bg-[#C50000] text-left py-[18px] pl-[29px] rounded-[10px] text-white font-mulish font-[800] text-[15px] transition-all"
              >
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="section-1 flex flex-col items-center justify-start bg-white pt-[103px] pb-[144px]"
    >
      <div class="max-w-[1000px] w-full mx-auto flex flex-col justify-center items-start">
        <p
          class="flex items-center gap-[20px] font-mulish font-[900] text-black text-[20px] w-full"
        >
          <span class="text-[30px] font-[800]">
            <span class="text-[#0073FF] text-[25px]">7 /</span>
            Готовитесь к выставке?</span
          >
        </p>
        <div class="w-full mt-[49px] min-h-[850px]">
          <transition-group name="accordion" tag="div">
            <div
              v-for="item in questions"
              :key="item.id"
              class="mb-4 border border-gray-300 px-[40px] py-[29px] rounded-[10px]"
            >
              <button
                @click="toggleAnswer(item.id)"
                class="w-full text-left py-2 focus:outline-none"
              >
                <div class="flex justify-between items-center">
                  <h2 class="text-lg text-[#4D4D4D] font-mulish text-[20px] font-[800]">
                    {{ item.question }}
                  </h2>
                  <span>
                    <svg
                      v-if="activeQuestionId === item.id"
                      width="10"
                      height="4"
                      viewBox="0 0 10 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.878516 3.22V0.0999996H9.12852V3.22H0.878516Z" fill="#4D4D4D" />
                    </svg>
                    <svg
                      v-else
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.41234 14.25V0.749999H8.62234V14.25H5.41234ZM0.102344 9V6H13.9323V9H0.102344Z"
                        fill="#4D4D4D"
                      />
                    </svg>
                  </span>
                </div>
              </button>
              <transition name="accordion">
                <div v-show="activeQuestionId === item.id" class="overflow-hidden max-h-[400px]">
                  <div class="py-2 font-mono text-[15px] text-[#4D4D4D]">
                    {{ item.answer }}
                  </div>
                </div>
              </transition>
            </div>
          </transition-group>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'

import { RouterLink, RouterView } from 'vue-router'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
// Import Swiper styles

export default {
  data() {
    return {
      modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y],
      swiper1: null,
      activeQuestionId: 1,
      activePaginationIndex1: 0,
      slides1: 3,
      hovered: true,
      hovered1: true,
      slides: 5,
      swiper: null,
      activePaginationIndex: 0,
      fiveBlock: [
        {
          id: 1,
          content:
            ' высылаем вам форму брифа, в котором необходимоуказать выставочную площадку, тип застройки, ваши маркетинговые и имиджевые цели,детально рассказать о том, что должно быть на стенде, включая требуемое мультимедийное оборудование. Обязательно обозначить рамки вашего бюджета на строительство стенда',
          active: true
        },
        {
          id: 2,
          content:
            ' в котором необходимоуказать выставочную площадку, тип застройки, ваши маркетинговые и имиджевые цели,детально рассказать о том, что должно быть на стенде, включая требуемое мультимедийное оборудование. Обязательно обозначить рамки вашего бюджета на строительство стенда',
          active: false
        },
        {
          id: 3,
          content:
            'чения технического задания мы высылаем вам форму брифа, в котором необходимоуказать выставочную площадку, тип застройки, ваши маркетинговые и имиджевые цели,детально рассказать о том, что должно быть на стенде, включая требуемое мультимедийное оборудование. Обязательно обозначить рамки вашего бюджета на строительство стенда',
          active: false
        },
        {
          id: 4,
          content:
            'ать выставочную площадку, тип застройки, ваши маркетинговые и имиджевые цели,детально рассказать о том, что должно быть на стенде, включая требуемое мультимедийное оборудование. Обязательно обозначить рамки вашего бюджета на строительство стенда',
          active: false
        },
        {
          id: 5,
          content:
            'Дляифа, в котором необходимоуказать выставочную площадку, тип застройки, ваши маркетинговые и имиджевые цели,детально рассказать о том, что должно быть на стенде, включая требуемое мультимедийное оборудование. Обязательно обозначить рамки вашего бюджета на строительство стенда',
          active: false
        },
        {
          id: 6,
          content:
            'Длвысылаем вам форму брифа, в котором необходимоуказать выставочную площадку, тип застройки, ваши маркетинговые и имиджевые цели,детально рассказать о том, что должно быть на стенде, включая требуемое мультимедийное оборудование. Обязательно обозначить рамки вашего бюджета на строительство стенда',
          active: false
        }
      ],
      questions: [
        {
          id: 1,
          question: 'Сколько стоит выставочный стенд?',
          answer:
            'Свяжитесь с нами, мы обязательно поможем. Найдем для вас креативное решение, спроектируем технологичный, современный стенд, поможем с проведением выставки, оформим любое мероприятие, разработаем уникальный контент, предоставим необходимое оборудование и обеспечим сопровождение.',
          isOpen: false
        },
        {
          id: 2,
          question: 'Готовитесь к мероприятию или выставке?',
          answer:
            'Свяжитесь с нами, мы обязательно поможем. Найдем для вас креативное решение, спроектируем технологичный, современный стенд, поможем с проведением выставки, оформим любое мероприятие, разработаем уникальный контент, предоставим необходимое оборудование и обеспечим сопровождение.',
          isOpen: false
        },
        {
          id: 3,
          question: 'Возможно ли застроить стенд по готовому дизайн-проекту?',
          answer:
            'Свяжитесь с нами, мы обязательно поможем. Найдем для вас креативное решение, спроектируем технологичный, современный стенд, поможем с проведением выставки, оформим любое мероприятие, разработаем уникальный контент, предоставим необходимое оборудование и обеспечим сопровождение.',

          isOpen: false
        },
        {
          id: 4,
          question: 'Можно ли заказать только дизайн выставочного стенда?',
          answer:
            'Свяжитесь с нами, мы обязательно поможем. Найдем для вас креативное решение, спроектируем технологичный, современный стенд, поможем с проведением выставки, оформим любое мероприятие, разработаем уникальный контент, предоставим необходимое оборудование и обеспечим сопровождение.',

          isOpen: false
        },
        {
          id: 5,
          question: 'Какие выставочные стенды строит компания EXIM?',
          answer:
            'Свяжитесь с нами, мы обязательно поможем. Найдем для вас креативное решение, спроектируем технологичный, современный стенд, поможем с проведением выставки, оформим любое мероприятие, разработаем уникальный контент, предоставим необходимое оборудование и обеспечим сопровождение.',

          isOpen: false
        },
        {
          id: 6,
          question:
            'Каких форматов бывают выставочные стенды?Каких форматов бывают выставочные стенды?',
          answer:
            'Свяжитесь с нами, мы обязательно поможем. Найдем для вас креативное решение, спроектируем технологичный, современный стенд, поможем с проведением выставки, оформим любое мероприятие, разработаем уникальный контент, предоставим необходимое оборудование и обеспечим сопровождение.',

          isOpen: false
        }
      ]
    }
  },
  computed: {
    activeItem() {
      return this.fiveBlock.find((item) => item.active)
    }
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper
      this.swiper.on('slideChange', () => {
        this.activePaginationIndex = this.swiper.activeIndex
      })
    },
    goToSlide(index) {
      this.activePaginationIndex = index
      this.swiper.slideTo(index)
    },
    setActive(id) {
      this.fiveBlock.forEach((item) => {
        item.active = item.id === id
      })
    },
    toggleAnswer(questionId) {
      if (this.activeQuestionId !== questionId) {
        this.activeQuestionId = null
        setTimeout(() => {
          this.activeQuestionId = questionId
        }, 300) // Задержка для завершения анимации закрытия
      }
    },
    onSwiper1(swiper) {
      this.swiper1 = swiper
      this.swiper1.on('slideChange', () => {
        this.activePaginationIndex1 = this.swiper1.activeIndex
      })
    },
    goToSlide1(index) {
      this.activePaginationIndex1 = index
      this.swiper1.slideTo(index)
    },
    indexRed(index) {
      // if (this.activePaginationIndex == 3) {
      //   this.activePaginationIndex = 1
      // } else {
      //   this.activePaginationIndex++
      // }
      console.log(this.activePaginationIndex1)
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.custom-pagination1 div {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 50%;
}

.custom-pagination1 div.active {
  background-color: #333;
}
.bgLandHole:before {
  content: '';
  z-index: 0;
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
}
.vvgBack {
  background-image: url(@/assets/img/bgLanding.png);
}
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
}

.form__field {
  width: 100%;
  border: 0;
  border-bottom: 2px solid #fff;
  outline: 0;
  font-size: 15px;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 15px;
    cursor: text;
    top: 20px;
    color: #ffffff99;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 15px;
  color: #fff;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 12px;
  }

  padding-bottom: 6px;

  border-width: 3px;

  border-image-slice: 1;
}

/* reset input */
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade1-enter-active,
.fade1-leave-active {
  transition: opacity 0.1s ease;
}

.fade1-enter-from,
.fade1-leave-to {
  opacity: 0;
}
.accordion-enter-active,
.accordion-leave-active {
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
}
.accordion-enter, .accordion-leave-to /* .accordion-leave-active в версии <2.1.8 */ {
  max-height: 0;
  opacity: 0;
}
</style>
