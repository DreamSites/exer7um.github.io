<template>
  <div class="contact-container container">
    <div class="contact">
      <h1>👋🏻 Написать мне</h1>
      <form action="">
        <div class="input-container">
          <input
            id="name"
            type="text"
            class="default"
            name="Ваше имя"
            required
          />
          <label for="name">Ваше имя</label>
        </div>
        <div class="input-container">
          <input
            id="email"
            type="email"
            class="default"
            name="Ваша электронная почта"
            required
          />
          <label for="email">Ваша электронная почта</label>
        </div>
        <div class="input-container">
          <select id="service" class="default" name="Выбор услуги" required>
            <option value hidden disabled selected></option>
            <option value="Дизайн">Дизайн</option>
            <option value="Верстка">Верстка</option>
            <option value="Фронтенд">Фронтенд</option>
            <option value="Дизайн + Верстка">Дизайн + Верстка</option>
            <option value="Дизайн + Фронтенд">Дизайн + Фронтенд</option>
            <option value="Другое">Другое</option>
          </select>
          <label for="service">Выбор услуги</label>
          <svg
            width="15px"
            height="9px"
            viewBox="0 0 15 9"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>arrow</title>
            <g
              id="Symbols"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              fill-opacity="0.2"
            >
              <g
                id="arrow"
                transform="translate(-263.000000, -22.000000)"
                fill-rule="nonzero"
              >
                <g id="Group-2">
                  <path
                    d="M270.421875,30.4970703 C270.550781,30.4970703 270.672363,30.4736328 270.786621,30.4267578 C270.900879,30.3798828 271.001953,30.3037109 271.089844,30.1982422 L277.470703,23.6767578 C277.646484,23.5068359 277.734375,23.3017578 277.734375,23.0615234 C277.734375,22.8974609 277.694824,22.7480469 277.615723,22.6132812 C277.536621,22.4785156 277.431152,22.371582 277.299316,22.2924805 C277.16748,22.2133789 277.016602,22.1738281 276.84668,22.1738281 C276.606445,22.1738281 276.395508,22.2617188 276.213867,22.4375 L270.426,28.365 L264.629883,22.4375 C264.454102,22.2617188 264.246094,22.1738281 264.005859,22.1738281 C263.835938,22.1738281 263.685059,22.2133789 263.553223,22.2924805 C263.421387,22.371582 263.315918,22.4785156 263.236816,22.6132812 C263.157715,22.7480469 263.118164,22.8974609 263.118164,23.0615234 C263.118164,23.1845703 263.141602,23.2973633 263.188477,23.3999023 C263.235352,23.5024414 263.299805,23.5947266 263.381836,23.6767578 L269.753906,30.2070312 C269.953125,30.4003906 270.175781,30.4970703 270.421875,30.4970703 Z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="input-container">
          <select id="type" class="default" name="Выбор типа сайта" required>
            <option value hidden disabled selected></option>
            <option value="Лендинг">Лендинг</option>
            <option value="Интернет-магазин">Интернет-магазин</option>
            <option value="Другое">Другое</option>
          </select>
          <label for="type">Выбор типа сайта</label>
          <svg
            width="15px"
            height="9px"
            viewBox="0 0 15 9"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>arrow</title>
            <g
              id="Symbols"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              fill-opacity="0.2"
            >
              <g
                id="arrow"
                transform="translate(-263.000000, -22.000000)"
                fill-rule="nonzero"
              >
                <g id="Group-2">
                  <path
                    d="M270.421875,30.4970703 C270.550781,30.4970703 270.672363,30.4736328 270.786621,30.4267578 C270.900879,30.3798828 271.001953,30.3037109 271.089844,30.1982422 L277.470703,23.6767578 C277.646484,23.5068359 277.734375,23.3017578 277.734375,23.0615234 C277.734375,22.8974609 277.694824,22.7480469 277.615723,22.6132812 C277.536621,22.4785156 277.431152,22.371582 277.299316,22.2924805 C277.16748,22.2133789 277.016602,22.1738281 276.84668,22.1738281 C276.606445,22.1738281 276.395508,22.2617188 276.213867,22.4375 L270.426,28.365 L264.629883,22.4375 C264.454102,22.2617188 264.246094,22.1738281 264.005859,22.1738281 C263.835938,22.1738281 263.685059,22.2133789 263.553223,22.2924805 C263.421387,22.371582 263.315918,22.4785156 263.236816,22.6132812 C263.157715,22.7480469 263.118164,22.8974609 263.118164,23.0615234 C263.118164,23.1845703 263.141602,23.2973633 263.188477,23.3999023 C263.235352,23.5024414 263.299805,23.5947266 263.381836,23.6767578 L269.753906,30.2070312 C269.953125,30.4003906 270.175781,30.4970703 270.421875,30.4970703 Z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="input-container" id="textarea">
          <textarea
            name="message"
            id="message"
            cols="auto"
            rows="6"
            required
          ></textarea>
          <label for="message"
            >Опишите вкратце сайт, который хотите получить</label
          >
        </div>
        <button type="submit" class="default">Отправить сообщение ✨</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact-container {
  display: flex;
  justify-content: center;

  .contact {
    margin-top: 50px;

    form {
      margin-top: 40px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px 20px;

      #textarea {
        width: 100%;
        grid-column-start: 1;
        grid-column-end: 3;

        textarea {
          width: 100%;
        }
      }

      button[type='submit'] {
        grid-column-start: 1;
        grid-column-end: 3;
        margin: 0 auto;
      }
    }
  }
}
</style>
