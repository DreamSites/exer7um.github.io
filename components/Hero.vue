<template>
  <div class="hero">
    <div class="CTA">
      <h1>👋🏻 Привет!</h1>
      <p class="text">
        Я фронтенд разработчик из Москвы. Люблю Vue, чистый код и красивый
        дизайн. Стараюсь всегда всё делать идеально, перфекционист.
      </p>
      <div class="buttons">
        <button class="default">Написать мне 👋🏻</button>
        <p class="other">или</p>
        <div class="social-links">
          <a class="link" href="https://t.me/exer7um/">
            <img
              src="@/assets/social/Telegram.svg"
              alt="TG"
              style="padding-right: 4px"
            />
          </a>
          <a class="link" href="https://twitter.com/exer7um/">
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
</style>
