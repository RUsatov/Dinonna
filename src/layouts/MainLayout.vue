<template>
  <q-layout view="lHh Lpr lFf" class="main-font" ref="layout">
    <q-header elevated class="header q-px-md-lg q-px-none">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          class="mobile-only"
        >
          <q-icon name="menu" class="text-main" />
        </q-btn>

        <q-toolbar-title class="text-main text-h5">{{ headerTitle }}</q-toolbar-title>

        <!-- <q-chip size="10px" dense icon-right="" class="absolute-top-left">200 руб</q-chip> -->
        <q-btn
          v-if="sumPrice"
          flat
          no-caps
          align="around"
          icon-right="shopping_cart"
          class="btn-fixed-width"
          :label="`${sumPrice} руб`"
          @click="openCart()"
        ></q-btn>
      </q-toolbar>

      <!-- Модалка корзины -->
      <q-dialog v-model="openCartModal">
        <q-card class="cart">
          <q-card-section>
            <div class="text-h6">Корзина</div>
          </q-card-section>

          <q-card-section
            class="row no-wrap items-center"
            v-for="item in products"
            :key="item.id + item.btn_val"
          >
            <q-img
              v-if="item.img"
              :ratio="1"
              style="max-width: 50px; height: 50px; border-radius: 50%;"
              :src="item.img"
            >
              <template v-slot:loading>
                <q-spinner-gears color="primary" />
              </template>
            </q-img>
            <div class="q-pl-md">
              <p>{{item.name}}</p>
              <p>{{item.options.label}}</p>
            </div>

            <div class="q-ml-auto row-sm column">
              <div class="counter row-sm column reverse items-center q-mr-lg">
                <q-btn
                  @click="changeAmount(item, '-')"
                  flat
                  round
                  size="10px"
                  color="text-main"
                  icon="fas fa-minus"
                />
                <q-chip
                  color="secondary"
                  text-color="white"
                  class="q-mx-sm text-subtitle1"
                >{{ item.count }}</q-chip>
                <q-btn
                  @click="changeAmount(item, '+')"
                  flat
                  round
                  size="10px"
                  color="text-main"
                  icon="fas fa-plus"
                />
              </div>
              <span class="price text-h6 self-center">{{ item.totalPrice }} ₽</span>
            </div>
          </q-card-section>

          <q-separator></q-separator>

          <q-card-section align="right">
            <p class="text-subtitle1">К оплате:</p>
            <p class="text-h5">{{ sumPrice }} ₽</p>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Очистить корзину" color="primary" @click="clearCart()" />
            <q-btn flat label="Заказать" color="secondary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-header>

    <!-- Сайдбар -->
    <q-drawer v-model="leftDrawerOpen" content-class="bg-white" :width="256" elevated>
      <!-- Логотип -->
      <router-link to="/">
        <q-img src="./statics/img/logo.png" spinner-color="primary" />
      </router-link>

      <!-- Район доставки с номером телефона -->
      <div class="q-px-md q-py-xs">
        <q-select
          v-model="select.district"
          :options="options.district"
          label="Район"
          options-selected-class="text-second"
          class="text-subtitle1"
        />
        <q-btn
          type="a"
          href="tel: 903-903"
          size="md"
          unelevated
          color="secondary"
          icon="local_phone"
          label="903-903"
          class="q-my-md full-width text-weight-bold text-subtitle1"
        />
      </div>
      <q-list class="q-py-xs">
        <q-separator spaced />
        <!-- Заголовок меню -->
        <q-item-label header>Меню</q-item-label>
        <!-- Элемент списка -->
        <div v-for="item in menuItems" :key="item.id">
          <q-separator spaced v-if="item.id === 10" />
          <q-item
            @click="toggleDropdownList(item)"
            :to="item.link"
            clickable
            v-ripple
            active-class="bg-item"
            class="text-subtitle1"
            exact
          >
            <!-- Иконка -->
            <q-item-section avatar v-if="item.icon">
              <q-icon color="grey-7" :name="item.icon" />
            </q-item-section>

            <!-- Название -->
            <q-item-section>{{ item.name }}</q-item-section>

            <!-- Иконка подменю-->
            <q-item-section avatar v-if="item.subMenu">
              <q-icon :class="{'rotate-180': item.open}" name="keyboard_arrow_down" />
            </q-item-section>
          </q-item>

          <!-- <q-slide-transition> -->
          <q-list v-show="item.open" class="text-subtitle1">
            <q-item
              v-for="sub in item.subMenu"
              :key="sub.id"
              :to="sub.link"
              @click="toggleDropdownList(sub)"
              active-class="bg-item"
              clickable
              v-ripple
            >
              <q-item-section class="q-px-md">{{sub.name}}</q-item-section>
            </q-item>
          </q-list>
          <!-- </q-slide-transition> -->
        </div>
      </q-list>
    </q-drawer>

    <q-page-container class="layout--bg-color">
      <router-view />

      <footer v-if="$route.name !== 'Error404'" class="footer--bg-color">
        <div class="container">
          <div class="row footer--text">
            <div class="col-md-4 col-12">
              <q-list class="q-my-md-xl q-mb-md q-mt-xl q-mr-md-md q-mr-none">
                <q-item-label class="q-mb-lg">Контакты</q-item-label>

                <a href="tel: 903-903">
                  <q-item clickable v-ripple dark class="q-py-md">
                    <q-item-section side>
                      <q-icon size="24px" name="local_phone" color="white" />
                    </q-item-section>
                    <q-item-section class="q-pl-md">
                      <p>903-903</p>
                      <p class="item--text-second">Телефон</p>
                    </q-item-section>
                  </q-item>
                </a>

                <q-item clickable dark class="q-py-md">
                  <q-item-section side>
                    <q-icon size="24px" name="home" color="white" />
                  </q-item-section>
                  <q-item-section class="q-pl-md">
                    <p>Нехинская, 57</p>
                    <p class="item--text-second">Адрес</p>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>

            <div class="col-md-4 col-12">
              <q-list class="q-my-md-xl q-my-md q-mx-md-md q-mx-none">
                <q-item-label class="q-mb-lg">Наши приложения</q-item-label>

                <a
                  href="https://play.google.com/store/apps/details?id=com.FoodSoul.VNovgorodDinonnaPizze"
                  rel="nofollow"
                >
                  <q-item clickable v-ripple dark>
                    <q-item-section side>
                      <q-icon size="24px" color="white" name="android" />
                    </q-item-section>
                    <q-item-section class="q-pl-md">
                      <p>Скачать в Google Play</p>
                    </q-item-section>
                    <q-item-section side>
                      <q-icon size="24px" name="launch" />
                    </q-item-section>
                  </q-item>
                </a>

                <a
                  href="https://apps.apple.com/us/app/dinonna-pizze/id1041992595?l=ru&ls=1"
                  rel="nofollow"
                >
                  <q-item clickable dark>
                    <q-item-section side>
                      <q-icon size="24px" name="fab fa-apple" color="white" />
                    </q-item-section>
                    <q-item-section class="q-pl-md">
                      <p>Скачать в AppStore</p>
                    </q-item-section>
                    <q-item-section side>
                      <q-icon size="24px" name="launch" />
                    </q-item-section>
                  </q-item>
                </a>
              </q-list>
            </div>

            <div class="col-md-4 col-12">
              <q-list class="q-my-md-xl q-mt-md q-mb-xl q-ml-md-md q-ml-none">
                <q-item-label class="q-mb-lg">Наши приложения</q-item-label>

                <a href="https://vk.com/dinonna_pizzeria" rel="nofollow">
                  <q-item clickable v-ripple dark>
                    <q-item-section side>
                      <q-icon size="24px" color="white" name="fab fa-vk" />
                    </q-item-section>
                    <q-item-section class="q-pl-md">
                      <p>ВКонтакте</p>
                    </q-item-section>
                    <q-item-section side>
                      <q-icon size="24px" name="launch" />
                    </q-item-section>
                  </q-item>
                </a>

                <a href="https://www.facebook.com/DinonnaPizzaSushi/" rel="nofollow">
                  <q-item clickable dark>
                    <q-item-section side>
                      <q-icon size="24px" name="fab fa-facebook-f" color="white" />
                    </q-item-section>
                    <q-item-section class="q-pl-md">
                      <p>Facebook</p>
                    </q-item-section>
                    <q-item-section side>
                      <q-icon size="24px" name="launch" />
                    </q-item-section>
                  </q-item>
                </a>

                <a href="https://www.instagram.com/dinonna.ru/" rel="nofollow">
                  <q-item clickable dark>
                    <q-item-section side>
                      <q-icon size="24px" name="fab fa-instagram" color="white" />
                    </q-item-section>
                    <q-item-section class="q-pl-md">
                      <p>Instagram</p>
                    </q-item-section>
                    <q-item-section side>
                      <q-icon size="24px" name="launch" />
                    </q-item-section>
                  </q-item>
                </a>
              </q-list>
            </div>
          </div>
        </div>
        <div class="footer-bottom--bg-color q-py-lg">
          <div class="container">
            <div class="row justify-between items-center">
              <div class="footer_links row-md column">
                <a
                  href="https://dinonna.ru/privacy-policy/ru"
                  rel="nofollow"
                  class="q-mr-md text-no-wrap"
                >Политика конфиденциальности</a>
                <a
                  href="https://dinonna.ru/offer/ru"
                  rel="nofollow"
                  class="text-no-wrap"
                >Публичная оферта</a>
                <!-- <br /> -->
                <div class="full-width"></div>
                <a href="https://rusatov.ru/" rel="nofollow" class="row q-mt-sm">© FoodSoul, 2019</a>
              </div>
              <div
                class="footer_language row-md column q-mx-md-none q-mx-auto q-mt-md-none q-mt-md"
              >
                <button class="language_btn language_btn--margin">
                  <img src="https://dinonna.ru/assets/2VM0cT7.svg" alt="ua" class="language_img" />
                </button>
                <button class="language_btn language_btn--margin language_btn--active">
                  <img src="https://dinonna.ru/assets/1czl6Nx.svg" alt="ru" class="language_img" />
                </button>
                <button class="language_btn">
                  <img src="https://dinonna.ru/assets/3B_88CC.svg" alt="uk" class="language_img" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[24, 74]"
        class="desktop-only"
      >
        <q-btn fab icon="arrow_upward" color="primary" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      showJapanKitchen: false,
      headerTitle: "Главная",
      products: [],
      openCartModal: false,
      select: {
        district: "В черте города"
      },
      options: {
        district: ["В черте города", "Панковка", "Сырково", "Юрьевское шоссе"]
      },
      menuItems: [
        {
          id: 1,
          name: "Комбо",
          meta: "kombo",
          link: "/category/kombo",
          open: false
        },
        {
          id: 2,
          name: "Пицца",
          meta: "pitstsa",
          link: "/category/pitstsa",
          open: false
        },
        {
          id: 3,
          name: "Японская кухня",
          meta: "iaponskaia-kukhnia",
          link: "/category/iaponskaia-kukhnia",
          open: false,
          subMenu: [
            {
              id: 1,
              name: "Мидии",
              meta: "midii",
              link: "/category/iaponskaia-kukhnia-midii"
            },
            {
              id: 2,
              name: "Сеты",
              meta: "kukhnia-siety",
              link: "/category/iaponskaia-kukhnia-siety"
            },
            {
              id: 3,
              name: "Мидии",
              meta: "kukhnia-sushi",
              link: "/category/iaponskaia-kukhnia-sushi"
            },
            {
              id: 4,
              name: "Роллы",
              meta: "kukhnia-rolly",
              link: "/category/iaponskaia-kukhnia-rolly"
            },
            {
              id: 5,
              name: "Запеченные роллы",
              meta: "zapiechiennyie-rolly",
              link: "/category/iaponskaia-kukhnia-zapiechiennyie-rolly"
            },
            {
              id: 6,
              name: "Острые роллы",
              meta: "ostryie-rolly",
              link: "/category/iaponskaia-kukhnia-ostryie-rolly"
            },
            {
              id: 7,
              name: "Темпурные роллы",
              meta: "tiempurnyie-rolly",
              link: "/category/iaponskaia-kukhnia-tiempurnyie-rolly"
            }
          ]
        },
        {
          id: 4,
          name: "Лапша ВОК",
          meta: "lapsha-vok",
          link: "/category/lapsha-vok",
          open: false
        },
        {
          id: 5,
          name: "Бургеры",
          meta: "burghiery",
          link: "/category/burghiery",
          open: false
        },
        {
          id: 6,
          name: "Супы",
          meta: "supy",
          link: "/category/supy",
          open: false
        },
        {
          id: 7,
          name: "Сладкие роллы и десерты",
          meta: "sladkiie-rolly-i-diesierty",
          link: "/category/sladkiie-rolly-i-diesierty",
          open: false
        },
        {
          id: 8,
          name: "Закуски",
          meta: "zakuski",
          link: "/category/zakuski",
          open: false
        },
        {
          id: 9,
          name: "Напитки",
          meta: "napitki",
          link: "/category/napitki",
          open: false
        },
        {
          id: 10,
          name: "Главная",
          meta: "glavnaya",
          link: `/`,
          icon: "apps",
          open: false
        },
        {
          id: 11,
          name: "Акции",
          meta: "akcii",
          link: "/promo",
          icon: "shopping_basket",
          open: false
        },
        {
          id: 12,
          name: "Отзывы",
          meta: "otzivy",
          link: "/feedback",
          icon: "person",
          open: false
        },
        {
          id: 13,
          name: "О нас",
          meta: "about",
          link: "/about",
          icon: "info",
          open: false
        }
      ]
    };
  },
  created() {
    this.changeHeaderTitle();
  },
  computed: {
    /**
     * Получает из хранилища добавленные в корзину товары
     * @return {array} массив из объектов добавленных товаров
     */
    getProducts() {
      return this.$store.getters["cart/product"];
    },
    /**
     * Рассчитывает полную стоимость заказа
     * @return {number} - цена заказа
     */
    sumPrice() {
      let price = 0;
      this.getProducts.forEach(item => {
        price += item.totalPrice;
      });
      return price;
    }
  },
  methods: {
    /**
     * Функция при открытии корзины.
     * Проверяет массив getProducts на дубликаты и если они есть отфильтровывает его.
     */
    openCart() {
      this.openCartModal = true;
      let seen = new Set();

      // Проверяет, есть ли дубликаты в масиве getProducts. Сравнивает объекты по полям id и btn_val
      let hasDuplicates = this.getProducts.some(function(currentObject) {
        return (
          seen.size === seen.add(currentObject.id).size ||
          seen.size === seen.add(currentObject.btn_val).size
        );
      });

      if (hasDuplicates) {

        // Отфильтровывает массив удаляя дубликаты
        const uniqueArray = this.getProducts.filter((thing, index) => {
          return (
            index ===
            this.getProducts.findIndex(obj => {
              return JSON.stringify(obj) === JSON.stringify(thing);
            })
          );
        });
        //  console.log(JSON.stringify( result, null, 2));

        this.products = uniqueArray;
      } else this.products = this.getProducts;
    },
    /**
     * Изменение заголовка в шапке при смене роута.
     * Получает массив из элементов меню и проверяет на совпадение с имененм роута
     */
    changeHeaderTitle() {
      this.menuItems.forEach(item => {
        if (this.$route.fullPath === item.link) {
          this.headerTitle = item.name;
        } else if (item.subMenu) {
          item.subMenu.forEach(sub => {
            if (this.$route.fullPath === sub.link) {
              this.headerTitle = sub.name;
            }
          });
        }
      });
    },
    /**
     * Открывает выпадающий список в меню
     * @param {object} item - кликнутый список
     */
    toggleDropdownList(item) {
      item.open = !item.open;
      this.changeHeaderTitle(item);
    },
    /**
     * Очищает корзину и закрывает модалку
     */
    clearCart() {
      this.openCartModal = false;
      this.$store.dispatch("cart/clearCart");
    },
    /**
     * Меняет количество выбранного элемента
     * @param {object} item - выбранный элемент
     * @param {string} sign - знак сложения или вычитания
     */
    changeAmount(item, sign) {
      if (sign === "-") {
        if (item.count > 1) {
          item.count--;
        } else {
          let idx = this.products.findIndex(nod => {
            return nod.id === item.id;
          });
          this.products.splice(idx, 1);

          if (this.products.length === 0) {
            this.clearCart();
          }
        }
      } else {
        item.count++;
      }
      item.totalPrice = item.price * item.count;
    }
    // openURL
  }
};
</script>

<style lang="stylus" scoped>
.header {
  display: flex;
  align-items: center;
  height: 64px;
}

.bg-item {
  background-color: #CCCCCC;
}

.layout--bg-color {
  background-color: #f2f2f2;
}

.btn-fixed-width {
  width: 150px;
}

.cart {
  min-width: 50%;
  @media screen and (max-width: 959.98px) {
    min-width: 80%;
  }
  @media screen and (max-width: 574.98px) {
    min-width: 100%;
  }
}

.footer--bg-color {
  background-color: $secondary;
}

.footer--text {
  color: #fff;
  font-size: 16px;
}

.footer-bottom--bg-color {
  background-color: $secondary-dark;
}

.footer_links {
  text-decoration: underline;
  color: #fff;
}

.footer_language {
  .language_btn {
    width: 22px;
    height: 16px;
    opacity: 0.4;

    &:hover {
      opacity: 1;
    }

    &--margin {
      margin-right: 8px;

      @media screen and (max-width: 959.98px) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }

    &--active {
      opacity: 1;
    }
  }

  .language_img {
    max-width: 100%;
  }
}
</style>
