<template>
  <div class="project">
    <div class="logo-background" :style="{ background: project.bg }">
      <img :src="project.logo" :alt="project.title" />
    </div>
    <div class="content">
      <h3>{{ project.title }}</h3>
      <p class="text">{{ project.description }}</p>
      <div class="additional-text">
        <p class="other">{{ project.date }}</p>
        <NuxtLink to="/projects">Подробнее →</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      default: {},
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
.project {
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  background: var(--background-2);

  .logo-background {
    padding-top: 56.25%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--border);

    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      max-width: 80%;
      height: 100%;
      max-height: 70%;
    }
  }

  .content {
    padding: 30px;

    p.text {
      line-height: 25px;
      margin-top: 15px;
      margin-bottom: 30px;
    }

    .additional-text {
      display: flex;
      justify-content: space-between;

      a {
        text-decoration: none;
        line-height: 30px;
        color: var(--main);
        transition: transform 0.2s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}

@media (max-width: 630px) {
  .project .content {
    padding: 20px 30px;

    p.text {
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
}
</style>
