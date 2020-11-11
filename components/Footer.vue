<template>
  <footer>
    <div class="container">
      <Nav :block="'footer'" />
      <div class="social-links">
        <a class="link" href="https://t.me/exer7um/" target="_blank">
          <img
            src="@/assets/social/Telegram.svg"
            alt="TG"
            style="padding-right: 4px"
          />
        </a>
        <a class="link" href="https://twitter.com/exer7um/" target="_blank">
          <img src="@/assets/social/Twitter.svg" alt="TW" />
        </a>
        <a class="link" href="https://github.com/exer7um/" target="_blank">
          <img src="@/assets/social/GitHub.svg" alt="GH" />
        </a>
        <a class="link" href="https://vk.com/exer7um/" target="_blank">
          <img src="@/assets/social/VK.svg" alt="VK" />
        </a>
      </div>
      <a href="https://nuxtjs.org/" class="nuxt" target="_blank">
        <img src="@/assets/Nuxt.svg" alt="Built with Nuxt.js" />
      </a>
      <div class="signature">
        <p class="copyright other">© 2020 exer7um</p>
        <p class="link other">
          Made by
          <a href="https://exer7um.github.io" target="_blank">exer7um</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  margin-top: 120px;
  background: var(--footer-background);
  width: 100%;
  padding: 40px 0;

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;

    .social-links {
      margin-top: 34px; // +4px из-за подчеркивания
      display: flex;

      a.link {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.15);
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

    a.nuxt {
      margin-top: 30px;
    }

    .signature {
      display: flex;
      font-size: 16px;
      color: var(--text-2);
      margin-top: 30px;

      p.link {
        margin-left: 40px;

        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
