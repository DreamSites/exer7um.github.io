<template>
  <header class="container">
    <nav>
      <NuxtLink class="nav-item" to="/" exact>
        Главная
        <hr />
      </NuxtLink>
      <NuxtLink class="nav-item" to="/projects"
        >Проекты
        <hr />
      </NuxtLink>
      <NuxtLink class="nav-item" to="/tools"
        >Инструменты
        <hr
      /></NuxtLink>
      <div class="nav-item">Обо мне</div>
    </nav>
    <button class="default">Написать мне 👋🏻</button>
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

  nav {
    display: flex;

    .nav-item {
      margin-right: 40px;
      color: var(--text-2);
      text-decoration: none;
      line-height: 30px;
      position: relative;
      display: flex;
      justify-content: center;
      transition: color 0.2s ease-in-out;

      hr {
        border: 1px solid var(--main);
        width: 0;
        position: absolute;
        bottom: -4px;
        transition: width 0.2s ease-in-out;
        opacity: 0;
      }

      &.nuxt-link-active {
        color: var(--main);

        hr {
          width: 25px;
          opacity: 1;
        }
      }

      &:hover {
        color: var(--main);
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
