<template>
  <div class="container projects-container">
    <h1>💼 Проекты</h1>
    <div class="projects">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
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
  margin-top: 20px;

  .projects {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
}

@media (max-width: 1280px) {
  .projects-container .projects {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
  }
}

@media (max-width: 960px) {
  .projects-container .projects {
    margin-top: 30px;
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 630px) {
  .projects-container .projects {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
}
</style>
