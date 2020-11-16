<template>
  <main class="container">
    <Hero />
    <Projects />
    <Tools />
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Главная | ExEr7um',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            'Я фронтенд разработчик из Москвы. Люблю Vue, чистый код и красивый дизайн. Стараюсь всегда всё делать идеально, перфекционист.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
