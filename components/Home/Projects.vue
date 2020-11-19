<template>
  <div class="projects-container">
    <h1>💼 Проекты</h1>
    <div class="projects">
      <ProjectCard
        v-for="project in projects.slice(0, 3)"
        :key="project.id"
        :project="project"
      />
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

    .show-all {
      margin-top: 10px;
    }
  }
}
</style>
