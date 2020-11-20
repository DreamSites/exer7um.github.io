<template>
  <nav :class="[block == 'header' ? 'header' : 'footer']">
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
</template>

<script>
export default {
  props: {
    block: {
      default: 'header',
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;

  &.header .nav-item {
    color: var(--text-2);

    &.nuxt-link-active {
      color: var(--main);
    }
  }

  &.footer .nav-item {
    color: rgba(255, 255, 255, 0.7);

    &.nuxt-link-active {
      color: #fff;

      hr {
        border-color: #fff;
      }
    }

    &:hover {
      color: #fff;
    }
  }

  .nav-item {
    margin-right: 40px;
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

    &.nuxt-link-active hr {
      width: 25px;
      opacity: 1;
    }

    &:hover {
      color: var(--main);
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

@media screen and (max-width: 500px) {
  nav .nav-item {
    margin-right: 20px;
  }
}
</style>
