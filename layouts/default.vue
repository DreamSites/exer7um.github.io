<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

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

.container {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
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

  &.default {
    background: var(--main);
    color: #fff;
    border: none;
  }

  &.outlined {
    background: transparent;
    color: var(--main);
    border: 2px solid var(--main);
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>
