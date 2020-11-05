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
</style>
