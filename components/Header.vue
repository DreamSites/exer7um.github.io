<template>
  <header class="container">
    <Nav :block="'header'" />
    <NuxtLink to="/contact-me">
      <button class="transparent">Написать мне 👋🏻</button>
    </NuxtLink>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 700px) {
  header {
    justify-content: center;

    button {
      display: none;
    }
  }
}

@media screen and (max-width: 500px) {
  header {
    height: 80px;

    nav .nav-item {
      margin-right: 20px;
    }
  }
}
</style>
