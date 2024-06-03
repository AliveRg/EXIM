<template>
  <div class="mt-[244px] mb-[48px]">
    <div class="max-w-[1000px] mx-auto">
      <p class="font-mulish text-[30px] text-black font-[900] mb-[39px]">Наши услуги</p>

      <div class="flex justify-between flex-wrap gap-[21px] mb-[110px]">
        <RouterLink to="/universal" class="flex flex-col" v-for="item in 6" :key="item">
          <div class="border border-[#E2E2E2] pt-[14px] pb-[11px] px-[21px]">
            <p class="font-mulish text-[20px] font-[800]">YKK GROUP</p>
            <p class="font-mono text-[15px] font-[400]">Промышленность</p>
          </div>
          <img src="@/assets/img/prewCont.jpeg" class="w-[319px]" alt="" />
        </RouterLink>
      </div>
    </div>
    <div class="w-full bg-[#F4F4F4] pt-[70px] pb-[75px]">
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
