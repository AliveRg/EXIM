<template>
  <div class="mt-[244px] mb-[48px]">
    <div class="max-w-[1000px] mx-auto">
      <p class="font-mulish text-[30px] text-black font-[900] mb-[39px]">Наши проекты</p>
      <p class="font-mono text-[20px] text-black font-[400] mb-[62px] max-w-[680px]">
        Идейные соображения высшего порядка, а также новая модель организационной деятельности
        представляет собой интересный эксперимент проверки систем массового участия. Повседневная
        практика показывает, что новая модель организационной деятельности представляет собой
        интересный эксперимент проверки соответствующий условий активизации.
      </p>

      <div
        class="max-w-[1000px] w-full mx-auto flex flex-col justify-center items-start gap-[36px] mb-[62px]"
      >
        <div class="w-full flex items-center justify-center" v-for="item in 3" :key="item">
          <div class="w-1/2">
            <img class="w-full" src="@/assets/img/videoPrew.jpeg" alt="" />
          </div>

          <div class="w-1/2 pl-[50px]">
            <div class="div div2 m-0 w-full">
              <!-- Additional required wrapper -->

              <div class="div flex flex-col items-start justify-center text-black">
                <p
                  class="flex items-center gap-[20px] font-mulish font-[900] text-[20px] w-full mb-[20px]"
                >
                  <span class="text-[20px] font-[900]">
                    <span class="text-[#0073FF] text-[15px]">1 /</span>
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
                <p class="text-[#C50000] font-mono text-[15px] font-[400]">Подробнее →</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between mb-[68px]">
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
    <div class="bg-[#F4F4F4] py-[70px]">
      <div class="max-w-[915px] w-full mx-auto flex flex-col justify-center items-start">
        <p class="font-mulish font-[800] text-[20px] text-black mb-[27px]">
          Заполните форму, и мы с Вами свяжемся
        </p>
        <p class="font-mono font-[400] text-[15px] text-black mb-[41px]">
          Свяжитесь с нами, мы обязательно поможем. Найдем для вас креативное решение, спроектируем
          технологичный, современный стенд, поможем с проведением выставки, оформим любое
          мероприятие, разработаем уникальный контент, предоставим необходимое оборудование и
          обеспечим сопровождение.
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
              <p class="font-mono text-black font-[400] text-[10px]">
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
              class="w-full bg-[#C50000] text-left py-[18px] pl-[29px] rounded-[10px] text-white font-mulish font-[800] text-[15px]"
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
}

.form__field {
  width: 100%;
  border: 0;
  border-bottom: 2px solid #000;
  outline: 0;
  font-size: 15px;
  color: #000;
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
    color: #000;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 15px;
  color: #000;
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
</style>
