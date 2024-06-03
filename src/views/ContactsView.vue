<template>
  <div class="mt-[244px] mb-[48px]">
    <div class="max-w-[1000px] mx-auto">
      <p class="font-mulish text-[30px] text-black font-[900] mb-[39px]">Отзывы клиентов</p>
      <p class="font-mono text-[20px] text-black font-[400] mb-[75px] max-w-[680px]">
        Идейные соображения высшего порядка, а также новая модель организационной деятельности
        представляет собой интересный эксперимент проверки систем массового участия. Повседневная
        практика показывает, что новая модель организационной деятельности представляет собой
        интересный эксперимент проверки соответствующий условий активизации.
      </p>

      <div
        class="max-w-[1000px] w-full mx-auto flex flex-col justify-center items-start gap-[36px] mb-[62px]"
      >
        <div class="grid grid-cols-3 gap-[20px] w-full mb-[40px]">
          <div
            class="w-full h-[270px] border flex flex-col items-start justify-start p-[20px] gap-[10px]"
          >
            <div class="flex items-center justify-start gap-[10px]">
              <img src="@/assets/img/iconphone.png" alt="" class="w-[70px]" />
              <p class="font-mulish font-[700] text-[20px]">Телефоны</p>
            </div>
            <div class="font-mono text-[15px] font-[400] flex flex-col gap-[24px] ml-[10px]">
              <p class="">7 999 300 40 40</p>
              <p class="">7 999 300 40 40</p>
              <p class="">7 999 300 40 40</p>
            </div>
          </div>
          <div
            class="w-full h-[270px] border flex flex-col items-start justify-start p-[20px] gap-[10px]"
          >
            <div class="flex items-center justify-start gap-[10px]">
              <img src="@/assets/img/icons8-internet.png" alt="" class="w-[70px]" />
              <p class="font-mulish font-[700] text-[20px]">Соцсети</p>
            </div>
            <div class="font-mono text-[15px] font-[400] flex flex-col gap-[24px] ml-[10px]">
              <p class="">VK</p>
              <p class="">INST</p>
              <p class="">TG</p>
            </div>
          </div>
          <div
            class="w-full h-[270px] border flex flex-col items-start justify-start p-[20px] gap-[10px]"
          >
            <div class="flex items-center justify-start gap-[10px]">
              <img src="@/assets/img/logouticon.png" alt="" class="w-[70px]" />
              <p class="font-mulish font-[700] text-[20px]">Соцсети</p>
            </div>
            <div class="font-mono text-[15px] font-[400] flex flex-col gap-[24px] ml-[10px]">
              <p class="">ИНН</p>
              <p class="">КПП</p>
              <p class="">ОГРН</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-[90px]">
        <div class="map-container">
          <div id="map" style="width: 100%; height: 480px"></div>
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

<script>
export default {
  name: 'YandexMap',
  data() {
    return {
      map: null
    }
  },
  mounted() {
    if (!window.ymaps) {
      this.loadYandexMap()
    } else {
      this.initMap()
    }
  },
  methods: {
    loadYandexMap() {
      const script = document.createElement('script')
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU'
      script.onload = this.initMap
      document.head.appendChild(script)
    },
    initMap() {
      if (this.map) return // Проверка на существование карты
      window.ymaps.ready(() => {
        this.map = new window.ymaps.Map('map', {
          center: [55.751244, 37.618423],
          zoom: 10
        })

        const placemark = new window.ymaps.Placemark(
          [55.751244, 37.618423],
          {
            balloonContent: 'This is a marker'
          },
          {
            preset: 'islands#icon',
            iconColor: '#0095b6'
          }
        )

        this.map.geoObjects.add(placemark)
      })
    }
  }
}
</script>

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
