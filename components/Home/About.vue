<template>
  <div class="about-container">
    <h1>👨🏻‍💻 Обо мне</h1>
    <div class="about">
      <div class="image">
        <hr />
        <img src="@/assets/Avatar.jpeg" alt="" />
        <hr />
      </div>
      <h2>Василий Кузин</h2>
      <p>
        Мне 18 лет, я из Москвы. Фронтенд разработкой занимаюсь уже 3 года. За
        это время я успел поработать с множеством фреймфорков и различных
        технологий. Сейчас в работе использую Vue и SCSS. CSS фреймворки не
        использую, все стили пишу сам.
      </p>
      <p>
        Также хочу сказать, что этот сайт может послужить отличным примером
        того, как я пишу код. Поэтому я открыл доступ к его исходному коду на
        GitHub, чтобы вы могли оценить мой уровень.
      </p>
      <div class="buttons">
        <a href="https://github.com/ExEr7um/exer7um.github.io/" target="_blank">
          <button class="github">
            <span>Открыть на&nbsp;</span>
            GitHub
            <svg
              width="26px"
              height="25px"
              viewBox="0 0 26 25"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>GitHub</title>
              <g
                id="Вебсайт"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Главная-1440px"
                  transform="translate(-683.000000, -2412.000000)"
                  fill="var(--text-1)"
                >
                  <g id="Обо-мне" transform="translate(80.088471, 1727.000000)">
                    <g
                      id="Блок-обо-мне"
                      transform="translate(271.911529, 105.000000)"
                    >
                      <g
                        id="Кнопка"
                        transform="translate(138.000000, 568.000000)"
                      >
                        <path
                          d="M205.818849,12.455 C198.917164,12.455 193.32,18.0513965 193.32,24.9553837 C193.32,30.478113 196.901295,35.1628793 201.868451,36.8157846 C202.493854,36.9308894 202.721762,36.5449045 202.721762,36.2134027 C202.721762,35.9171996 202.711019,35.13065 202.70488,34.0878003 C199.227947,34.8428879 198.494345,32.4118741 198.494345,32.4118741 C197.925728,30.9676922 197.106181,30.5832421 197.106181,30.5832421 C195.971248,29.808203 197.192126,29.8235503 197.192126,29.8235503 C198.446769,29.9117973 199.106703,31.1119569 199.106703,31.1119569 C200.221685,33.0219296 202.032668,32.4701938 202.744783,32.1502024 C202.858353,31.3429339 203.181414,30.7919655 203.538239,30.4796478 C200.762678,30.1642606 197.844387,29.0914836 197.844387,24.3015883 C197.844387,22.9372125 198.331664,21.8206957 199.131259,20.9474338 C199.002341,20.6312792 198.573384,19.3597546 199.254037,17.6393212 C199.254037,17.6393212 200.303026,17.3032151 202.691067,18.9208215 C203.687875,18.6430352 204.757582,18.5049095 205.820384,18.4995379 C206.882418,18.5049095 207.951358,18.6430352 208.9497,18.9208215 C211.336207,17.3032151 212.383661,17.6393212 212.383661,17.6393212 C213.065849,19.3597546 212.636891,20.6312792 212.508741,20.9474338 C213.309871,21.8206957 213.793311,22.9372125 213.793311,24.3015883 C213.793311,29.1037615 210.870416,30.1604237 208.086414,30.469672 C208.534555,30.8556569 208.934353,31.6184182 208.934353,32.7848137 C208.934353,34.4553683 208.919005,35.8036295 208.919005,36.2134027 C208.919005,36.547974 209.144611,36.9370283 209.778455,36.8150172 C214.741775,35.1582751 218.32,30.4765783 218.32,24.9553837 C218.32,18.0513965 212.722836,12.455 205.818849,12.455"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </a>
        <NuxtLink to="/contact-me">
          <button class="default">Написать мне 👋🏻</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about-container {
  margin-top: 80px;

  .about {
    margin: 40px auto 0;
    width: 100%;
    max-width: 735px;
    border: 3px solid var(--border);
    border-radius: 25px;
    padding: 50px 100px 75px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .image {
      display: flex;
      align-items: center;

      hr {
        border: 2.5px solid var(--main);
        margin: 0 40px;
        width: 100px;
        height: 5px;
      }

      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    }

    h2 {
      margin: 40px 0;
    }

    p {
      margin-bottom: 18px;
    }

    .buttons {
      margin-top: 32px; // -18px из-за отступа текста
      display: flex;

      a {
        text-decoration: none;
      }

      button.github {
        background: transparent;
        border: 2px solid var(--text-1);
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          margin-left: 10px;
          margin-right: -10px;
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .about-container .about {
    padding: 50px 75px;
  }
}

@media (max-width: 700px) {
  .about-container .about {
    .image hr {
      width: 75px;
    }

    .buttons button.github span {
      display: none;
    }
  }
}

@media (max-width: 600px) {
  .about-container .about {
    padding: 50px 20px;

    .buttons button.github {
      margin-right: 10px;
      padding-left: 15px;
      padding-right: 20px;
    }
  }
}

@media (max-width: 600px) {
  .about-container .about {
    .image {
      img {
        width: 100px;
        height: 100px;
      }

      hr {
        width: 50px;
        margin: 0 35px;
      }
    }

    h2 {
      margin: 20px 0;
    }

    p {
      margin-bottom: 16px;
    }

    .buttons {
      margin-top: 12px; // -18px из-за отступа текста
    }
  }
}
</style>
