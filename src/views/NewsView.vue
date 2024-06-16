<template>
  <div class="mt-[244px] mb-[48px]">
    <div class="max-w-[1000px] mx-auto">
      <p class="font-mulish text-[30px] text-black font-[900] mb-[39px]">Новости</p>
      <hr class="max-w-[1000px] mt-[38px] mb-[30px]" />

      <div class="flex justify-between items-center mb-[40px]"></div>
      <div class="flex justify-between flex-wrap gap-[18px] mb-[35px]">
        <RouterLink
          to="/universal"
          class="flex flex-col max-w-[320px] group cursor-pointer"
          v-for="item in 6"
          :key="item"
        >
          <div
            class="border border-[#E2E2E2] group-hover:border-[#979797] transition-all pt-[14px] pb-[25px]"
          >
            <div class="pb-[11px] px-[21px]">
              <p class="font-mulish text-[20px] font-[800]">Выставка “Интерткань”</p>
              <p class="font-mono text-[15px] font-[400]">Промышленность</p>
            </div>

            <div class="relative overflow-hidden w-[319px] h-[auto]">
              <img
                src="@/assets/img/prewCont.jpeg"
                class="w-full h-full transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                alt=""
              />
            </div>
            <div class="font-mono text-[15px]">
              <p class="px-[20px] mt-[30px]">
                В ЦВК Экспоцентр прошла выставка “Интерткань”. Там можно было познакомиться ...
              </p>
              <p
                class="px-[20px] mt-[17px] text-[#898989] group-hover:text-[#0073FF] transition-all"
              >
                Подробнее →
              </p>
            </div>
          </div>
        </RouterLink>
      </div>
      <div class="flex items-center justify-between">
        <div class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="8"
            viewBox="0 0 42 8"
            fill="none"
          >
            <path
              d="M41 4.5C41.2761 4.5 41.5 4.27614 41.5 4C41.5 3.72386 41.2761 3.5 41 3.5V4.5ZM0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM41 3.5L1 3.5V4.5L41 4.5V3.5Z"
              fill="#898989"
            />
          </svg>
        </div>
        <div class="flex items-center justify-center gap-[37px]">
          <p
            class="font-mulish font-[600] text-[20px]"
            :class="item == 1 ? 'text-[#C50000]' : 'text-[#898989]'"
            v-for="item in 5"
            :key="item"
          >
            {{ item }}
          </p>
        </div>
        <div class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="8"
            viewBox="0 0 62 8"
            fill="none"
          >
            <path
              d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM61.3535 4.35355C61.5488 4.15829 61.5488 3.84171 61.3535 3.64645L58.1716 0.464466C57.9763 0.269204 57.6597 0.269204 57.4645 0.464466C57.2692 0.659728 57.2692 0.976311 57.4645 1.17157L60.2929 4L57.4645 6.82843C57.2692 7.02369 57.2692 7.34027 57.4645 7.53553C57.6597 7.7308 57.9763 7.7308 58.1716 7.53553L61.3535 4.35355ZM1 4.5H61V3.5H1V4.5Z"
              fill="#0073FF"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
