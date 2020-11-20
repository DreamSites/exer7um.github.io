<template>
  <div>
    <div class="under-construction">⚠️ Сайт сейчас находится в разработке</div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('fetchFirebase')
  },
}
</script>

<style lang="scss">
html {
  font-family: 'Gill Sans';
  font-size: 18px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  appearance: none;
}

body {
  background: var(--background-1);
}

// БЛОКИ

.container {
  max-width: 1380px; // +100px для padding
  width: 100%;
  margin: 0 auto;
  padding: 0 50px;
}

button {
  height: 50px;
  outline: none;
  padding: 0 30px;
  border-radius: 50px;
  font-size: 18px;
  font-family: 'Gill Sans';
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  color: var(--text-1);

  &.default {
    background: var(--main);
    color: #fff;
  }

  &.transparent {
    background: var(--main-transparent);
    color: var(--main);
  }

  &:hover {
    transform: scale(1.1);
  }
}

.input-container {
  position: relative;

  input,
  select,
  textarea {
    border-radius: 15px;
    border: none;
    outline: none;
    min-width: 300px;
    padding: 12px 20px 0;
    color: var(--text-2);
    font-size: 18px;
    background: var(--input-bg);
    font-family: 'Gill Sans';

    &:focus + label,
    &:valid + label {
      top: 5px;
      transform: none;
      font-size: 12px;
    }
  }

  input {
    height: 50px;

    &:-webkit-autofill + label {
      color: rgba(0, 0, 0, 0.2);
    }
  }

  select {
    height: 50px;
  }

  textarea {
    resize: none;
    padding-top: 20px;

    & + label {
      top: 15px;
      transform: none;
    }
  }

  label {
    color: var(--placeholder);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    transition: all 0.2s ease-in-out;
    pointer-events: none;
  }

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-25%);
    pointer-events: none;

    g g {
      fill: var(--text-2);
    }
  }
}

// ТЕКСТОВЫЕ СТИЛИ
h1 {
  color: var(--text-1);
  font-family: 'Gill Sans';
  font-size: 56px;
}

h2 {
  color: var(--text-1);
  font-family: 'Gill Sans';
  font-size: 26px;
}

h3 {
  color: var(--text-1);
  font-family: 'Gill Sans';
  font-size: 18px;
}

p {
  color: var(--text-2);
  line-height: 30px;

  &.other {
    color: var(--text-3);
  }
}

@media screen and (max-width: 1010px) {
  // ТЕКСТОВЫЕ СТИЛИ
  h1 {
    font-size: 40px;
  }
}

@media screen and (max-width: 900px) {
  .container {
    padding: 0 30px;
  }
}

@media screen and (max-width: 500px) {
  html {
    font-size: 16px;
  }

  // БЛОКИ
  .container {
    padding: 0 15px;
  }

  button {
    height: 44px;
    font-size: 16px;
    padding: 0 25px;
  }

  // ТЕКСТОВЫЕ СТИЛИ
  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 16px;
  }

  p {
    line-height: 28px;
  }
}
</style>

<style lang="scss" scoped>
.under-construction {
  width: 100%;
  height: 40px;
  background: hsl(48, 100%, 73%);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
