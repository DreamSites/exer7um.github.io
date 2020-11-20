<template>
  <div class="hero">
    <div class="CTA">
      <h1>👋🏻 Привет!</h1>
      <p class="text">
        Я фронтенд разработчик из Москвы. Люблю Vue, чистый код и красивый
        дизайн. Стараюсь всегда всё делать идеально, перфекционист.
      </p>
      <div class="buttons">
        <NuxtLink to="/contact-me">
          <button class="default">Написать мне 👋🏻</button>
        </NuxtLink>
        <p class="other">или</p>
        <div class="social-links">
          <a class="link" href="https://t.me/exer7um/" target="_blank">
            <img
              src="@/assets/social/Telegram.svg"
              alt="TG"
              style="margin-right: 4px"
            />
          </a>
          <a class="link" href="https://twitter.com/exer7um/" target="_blank">
            <img src="@/assets/social/Twitter.svg" alt="TW" />
          </a>
        </div>
      </div>
    </div>
    <img src="@/assets/hero.png" alt="" class="code-windows" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;

  .CTA {
    margin-top: 120px;
    margin-right: 30px;

    p.text {
      width: 388px;
      margin-top: 30px;
      margin-bottom: 50px;
    }

    .buttons {
      display: flex;
      align-items: center;
      width: 388px;

      p {
        margin: 0 20px;
      }

      .social-links {
        display: flex;

        a.link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
          transition: transform 0.2s ease-in-out;

          &:hover {
            transform: scale(1.15);
          }

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }

  .code-windows {
    width: 862px;
    height: 540px;
  }
}

@media screen and (max-width: 1330px) {
  .hero {
    .code-windows {
      width: 65%;
      height: 100%;
    }
  }
}

@media screen and (max-width: 1160px) {
  .hero .CTA {
    margin-right: -20px;
    margin-top: 80px;
  }
}

@media screen and (max-width: 1010px) {
  .hero .CTA {
    margin-top: 65px;
    margin-right: -100px;
    p.text {
      margin-top: 25px;
      margin-bottom: 40px;
      width: 310px;
    }
  }
}

@media screen and (max-width: 780px) {
  .hero .CTA {
    margin-right: -120px;
  }
}

@media screen and (max-width: 700px) {
  .hero {
    flex-direction: column-reverse;

    .CTA {
      margin: 0;

      p.text {
        width: 90%;
        max-width: 500px;
      }
    }

    .code-windows {
      width: 100%;
      margin-top: -40px;
      margin-bottom: -30px;
    }
  }
}

@media screen and (max-width: 500px) {
  .hero {
    .CTA {
      p.text {
        margin-top: 20px;
        margin-bottom: 25px;
      }

      .buttons {
        width: auto;

        p {
          margin: 0 10px;
        }

        .social-links a.link {
          width: 44px;
          height: 44px;
          margin-right: 5px;

          img {
            width: 20px;
          }
        }
      }
    }

    .code-windows {
      margin-top: -30px;
    }
  }
}
</style>
