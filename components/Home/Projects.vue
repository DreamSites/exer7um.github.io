<template>
  <div class="projects-container">
    <h1>💼 Проекты</h1>
    <div class="projects">
      <div
        v-for="project in projects.slice(0, 3)"
        :key="project.id"
        class="project"
      >
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
      <div class="show-all">
        <NuxtLink to="/projects">
          <button class="transparent">Смотреть всё</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['projects']),
  },
  mounted() {
    this.$store.dispatch('fetchFirebase')
  },
}
</script>

<style lang="scss" scoped>
.projects-container {
  margin-top: 60px;

  .projects {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

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

    .show-all {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

@media (max-width: 1280px) {
  .projects-container .projects {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 50px;

    .show-all {
      grid-column-start: 1;
      grid-column-end: 4;
    }
  }
}

@media (max-width: 960px) {
  .projects-container .projects {
    margin-top: 30px;
    grid-template-columns: 1fr 1fr;
    row-gap: 30px;

    .show-all {
      grid-column-start: auto;
      grid-column-end: auto;
    }
  }
}

@media (max-width: 630px) {
  .projects-container .projects {
    grid-template-columns: 1fr;
    row-gap: 20px;

    .project .content {
      padding: 20px 30px;

      p.text {
        margin-top: 10px;
        margin-bottom: 20px;
      }
    }

    .show-all {
      margin-top: 10px;
    }
  }
}
</style>
