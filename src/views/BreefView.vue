<template>
  <div class="mt-[244px] mb-[48px]">
    <div class="max-w-[1000px] mx-auto">
      <p class="font-mulish text-[30px] text-black font-[900] mb-[39px]">
        Техническое задание на проектирование и застройку выставочного стенда
      </p>
      <p class="font-mono text-[20px] text-black font-[400] mb-[62px]">
        Уважаемые коллеги! Заполнение формы технического задания займет у вас 15 минут. Заполняйте
        только те характеристики, по которым у вас готовы требования или идеи. Заполненное ТЗ
        поможет менеджеру проекта подготовиться к обсуждению задания и сэкономит ваше время при
        разработке проекта экспозиции. Наши специалисты имеют 20-летний опыт в изготовлении
        выставочных стендов, и готовы создавать уникальные решения для наилучшего эффекта от участия
        вашей компании на выставке.
      </p>

      <div
        class="max-w-[1000px] w-full mx-auto flex flex-col justify-center items-start gap-[36px] mb-[62px]"
      >
        <div class="flex flex-col items-start w-full gap-[64px] mb-[66px]">
          <p class="font-mulish font-[800] text-[20px]">Контактные данные</p>
          <div class="grid grid-cols-2 gap-x-[40px] gap-y-[24px] w-full">
            <input
              placeholder="Ваше имя"
              class="w-full bg-transparent border-b-[1px] border-b-[#4D4D4D] focus:outline-none pb-[14px] font-mono text-[15px]"
              type="text"
            />
            <input
              placeholder="Название компании"
              class="w-full bg-transparent border-b-[1px] border-b-[#4D4D4D] focus:outline-none pb-[14px] font-mono text-[15px]"
              type="text"
            />
            <input
              placeholder="Email"
              class="w-full bg-transparent border-b-[1px] border-b-[#4D4D4D] focus:outline-none pb-[14px] font-mono text-[15px]"
              type="text"
            />
            <input
              placeholder="Название выставки"
              class="w-full bg-transparent border-b-[1px] border-b-[#4D4D4D] focus:outline-none pb-[14px] font-mono text-[15px]"
              type="text"
            />
            <input
              placeholder="Телефон"
              class="w-full bg-transparent border-b-[1px] border-b-[#4D4D4D] focus:outline-none pb-[14px] font-mono text-[15px]"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-col items-start w-full gap-[64px] mb-[66px]">
          <p class="font-mulish font-[800] text-[20px]">Контактные данные</p>
          <div class="grid grid-cols-2 gap-x-[40px] gap-y-[24px] w-full">
            <input
              placeholder="Размеры места под стенд"
              class="w-full bg-transparent border-b-[1px] border-b-[#4D4D4D] focus:outline-none pb-[14px] font-mono text-[15px]"
              type="text"
            />
            <input
              placeholder="Переговорные зоны"
              class="w-full bg-transparent border-b-[1px] border-b-[#4D4D4D] focus:outline-none pb-[14px] font-mono text-[15px]"
              type="text"
            />
            <input
              placeholder="Бюджет проекта"
              class="w-full bg-transparent border-b-[1px] border-b-[#4D4D4D] focus:outline-none pb-[14px] font-mono text-[15px]"
              type="text"
            />
            <input
              placeholder="Ресепшен"
              class="w-full bg-transparent border-b-[1px] border-b-[#4D4D4D] focus:outline-none pb-[14px] font-mono text-[15px]"
              type="text"
            />
            <input
              placeholder="Главная цель на выставке"
              class="w-full bg-transparent border-b-[1px] border-b-[#4D4D4D] focus:outline-none pb-[14px] font-mono text-[15px]"
              type="text"
            />
            <input
              placeholder="Зонирование"
              class="w-full bg-transparent border-b-[1px] border-b-[#4D4D4D] focus:outline-none pb-[14px] font-mono text-[15px]"
              type="text"
            />
            <input
              placeholder="Этажность или высота"
              class="w-full bg-transparent border-b-[1px] border-b-[#4D4D4D] focus:outline-none pb-[14px] font-mono text-[15px]"
              type="text"
            />
            <input
              placeholder="Главный акцент или продукт"
              class="w-full bg-transparent border-b-[1px] border-b-[#4D4D4D] focus:outline-none pb-[14px] font-mono text-[15px]"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-col items-start w-full gap-[64px]">
          <p class="font-mulish font-[800] text-[20px]">Контактные данные</p>
          <div class="grid grid-cols-2 gap-x-[40px] gap-y-[24px] w-full">
            <input
              placeholder="Срок сдачи проекта"
              class="w-full bg-transparent border-b-[1px] border-b-[#4D4D4D] focus:outline-none pb-[14px] font-mono text-[15px]"
              type="text"
            />
            <input
              placeholder="Срок принятия решения"
              class="w-full bg-transparent border-b-[1px] border-b-[#4D4D4D] focus:outline-none pb-[14px] font-mono text-[15px]"
              type="text"
            />
            <input
              placeholder="Дополнительная информация"
              class="w-full col-span-2 bg-transparent border-b-[1px] border-b-[#4D4D4D] focus:outline-none pb-[14px] font-mono text-[15px]"
              type="text"
            />
          </div>
        </div>
      </div>
      <div class="col-span-2 grid grid-cols-2 items-center justify-center gap-[41px]">
        <p class="w-full text-right font-mono text-black font-[400] text-[10px]">
          Нажимая «Отправить», вы соглашаетесь с <br />
          политикой конфиденциальности
        </p>
        <button
          class="w-full bg-[#C50000] text-left py-[18px] pl-[29px] rounded-[10px] text-white font-mulish font-[800] text-[15px]"
        >
          Отправить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss"></style>
