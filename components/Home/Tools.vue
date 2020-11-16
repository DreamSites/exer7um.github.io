<template>
  <div class="tools-container">
    <h1>🛠 Инструменты</h1>
    <div class="tools">
      <NuxtLink class="tool" to="/tools">
        <img src="@/assets/tools/HTML.svg" alt="" id="HTML" />
      </NuxtLink>
      <NuxtLink class="tool" to="/tools">
        <img src="@/assets/tools/CSS.svg" alt="" id="CSS" />
      </NuxtLink>
      <NuxtLink class="tool" to="/tools">
        <img src="@/assets/tools/JavaScript.svg" alt="" id="JavaScript" />
      </NuxtLink>
      <NuxtLink class="tool" to="/tools">
        <img src="@/assets/tools/Vue.js.svg" alt="" id="Vue" />
      </NuxtLink>
      <NuxtLink class="tool" to="/tools">
        <img src="@/assets/tools/Nuxt.js.svg" alt="" id="Nuxt" />
      </NuxtLink>
      <NuxtLink class="tool" to="/tools">
        <img src="@/assets/tools/Sketch.svg" alt="" id="Sketch" />
      </NuxtLink>
    </div>
    <div class="learn-more">
      <NuxtLink to="/tools">
        <button class="transparent">Узнать подробнее</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.tools-container {
  margin-top: 120px;

  .tools {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 50px;
    flex-wrap: wrap;

    .tool {
      filter: grayscale(100%);
      opacity: 30%;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        filter: grayscale(0);
        opacity: 100%;
        transform: scale(1.1);
      }

      #HTML,
      #CSS,
      #JavaScript {
        height: 100%;
      }

      #Vue,
      #Nuxt,
      #Sketch {
        width: 100%;
      }
    }
  }

  .learn-more {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }
}

@media (max-width: 1100px) {
  .tools-container {
    .tools {
      margin-top: 40px;

      .tool {
        width: 75px;
        height: 75px;
      }
    }

    .learn-more {
      margin-top: 50px;
    }
  }
}

@media (max-width: 800px) {
  .tools-container {
    .tools {
      margin-top: 30px;

      .tool {
        width: 65px;
        height: 65px;
      }
    }

    .learn-more {
      margin-top: 40px;
    }
  }
}

@media (max-width: 700px) {
  .tools-container {
    .tools {
      margin-top: 20px;

      .tool {
        width: 50px;
        height: 50px;
      }
    }

    .learn-more {
      margin-top: 30px;
    }
  }
}

@media (max-width: 500px) {
  .tools-container {
    .tools {
      margin-top: 40px;

      .tool {
        width: 120px;
        height: 120px;
        padding: 20px;
        margin-bottom: 10px;
      }
    }

    .learn-more {
      margin-top: 20px;
    }
  }
}

@media (max-width: 400px) {
  .tools-container {
    .tools {
      margin-top: 30px;

      .tool {
        width: 90px;
        height: 90px;
        padding: 5px;
        margin-bottom: 30px;
      }
    }

    .learn-more {
      margin-top: 20px;
    }
  }
}
</style>
