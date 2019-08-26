<template>
  <q-page>
    <!-- Карусель -->
    <section class="main-slider">
      <q-carousel
        v-model="slide"
        swipeable
        animated
        control-color="white"
        navigation
        arrows
        height="100%"
        class="bg-primary text-white"
        infinite
      >
        <q-carousel-slide
          :name="i"
          :img-src="src"
          class="column no-wrap flex-center"
          v-for="(src, i) in slideImage"
          :key="i"
        />
      </q-carousel>
    </section>

    <!-- Условия доставки -->
    <section>
      <div class="container q-mb-xl">
        <div class="terms-delivery row justify-center q-mt-lg shadow-1">
          <div class="items-center justify-center column col-md col-6 q-pa-md">
            <q-icon name="far fa-clock" size="24px" class="q-mb-sm" />
            <p class="terms-delivery_title q-ma-none q-mb-xs">до 60 мин.</p>
            <p class="terms-delivery_subtitle q-ma-none text-center">время доставки</p>
          </div>
          <div class="items-center justify-center column col-md col-6 q-pa-md">
            <q-icon name="account_balance_wallet" size="24px" class="q-mb-sm" />
            <p class="terms-delivery_title q-ma-none q-mb-xs">500₽</p>
            <p class="terms-delivery_subtitle q-ma-none text-center">МИН. СУММА ЗАКАЗА</p>
          </div>
          <div class="items-center justify-center column col-md col-6 q-pa-md">
            <q-icon name="fas fa-truck" size="24px" class="q-mb-sm" />
            <p class="terms-delivery_title q-ma-none q-mb-xs">0₽</p>
            <p class="terms-delivery_subtitle q-ma-none text-center">СТОИМОСТЬ ДОСТАВКИ</p>
          </div>
          <div class="items-center justify-center column col-md col-6 q-pa-md">
            <q-icon name="fas fa-truck" size="24px" class="q-mb-sm" />
            <p class="terms-delivery_title q-ma-none q-mb-xs">от 500₽</p>
            <p class="terms-delivery_subtitle q-ma-none text-center">БЕСПЛАТНАЯ ДОСТАВКА</p>
          </div>
          <div class="items-center justify-center column col-md col-6 q-pa-md">
            <q-icon name="credit_card" size="24px" class="q-mb-sm" />
            <p class="terms-delivery_title q-ma-non q-mb-xs">Оплата картой</p>
            <p class="terms-delivery_subtitle q-ma-none text-center">У НАШИХ КУРЬЕРОВ ЕСТЬ ТЕРМИНАЛЫ</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Мы рекомендуем -->
    <section class="recomended q-mb-xl q-py-xl">
      <div class="container">
        <div class="row justify-center items-center">
          <q-card class="card shadow-transition q-mx-md" square v-for="item in products" :key="item.id">
            <img :src="item.img" />

            <q-card-actions v-if="item.type" class="absolute-top-right">
              <q-chip
              v-for="(chip, i) in item.type"
              :key="i"
                size="10px"
                dense
                class="text-uppercase card_chip card_chip--sale q-px-sm"
              > {{ chip }}</q-chip>
            </q-card-actions>

            <q-card-section>
              <div class="text-h6">{{ item.name }}</div>
            </q-card-section>

            <q-card-section>
              <p>{{ item.description }}</p>
            </q-card-section>

            <q-separator></q-separator>

            <q-card-section >
              <q-btn-toggle
                unelevated
                v-model="pizzaDiametr"
                toggle-color="grey-5"
                no-caps
                class="text-lowercase"
                :options="item.options"
              />
            </q-card-section>

            <q-card-section>
              <div class="row justify-between">
                <span class="card_price text-bold">{{ price }} ₽</span>
                <span>
                  <q-btn flat class="text-bold" color="secondary" label="В корзину"></q-btn>
                </span>
              </div>
            </q-card-section>
          </q-card>

          <!-- <q-card class="card shadow-transition q-mx-md" square>
            <img src="/statics/img/cards/card2.jpg" />

            <q-card-actions class="absolute-top-right">
              <q-chip
                size="10px"
                dense
                class="text-uppercase card_chip card_chip--hit q-px-sm"
              >Акция</q-chip>
            </q-card-actions>

            <q-card-section>
              <div class="text-h6">Сальмоне</div>
            </q-card-section>

            <q-card-section>
              <p>Филе лосося в соусе терияки, томаты, моцарелла, маслины, томатный соус, моцарелла, укроп и петрушка.</p>
            </q-card-section>

            <q-separator></q-separator>

            <q-card-section>
              <q-btn-toggle
                unelevated
                v-model="pizzaDiametr"
                toggle-color="grey-5"
                no-caps
                class="text-lowercase"
                :options="[
                  {label: '25 см.', value: '25'},
                  {label: '30 см.', value: '30'},
                  {label: '40 см.', value: '40'}
                ]"
              />
            </q-card-section>

            <q-card-section>
              <div class="row justify-between">
                <span class="card_price text-bold">{{ price }} ₽</span>
                <span>
                  <q-btn flat class="text-bold" color="secondary" label="В корзину"></q-btn>
                </span>
              </div>
            </q-card-section>
          </q-card>

          <q-card class="card shadow-transition q-mx-md" square>
            <img src="/statics/img/cards/card3.jpg" />

            <q-card-actions class="absolute-top-right">
              <q-chip
                size="10px"
                dense
                class="text-uppercase card_chip card_chip--hit q-px-sm"
              >Акция</q-chip>
            </q-card-actions>

            <q-card-section>
              <div class="text-h6">Сальмоне</div>
            </q-card-section>

            <q-card-section>
              <p>Филе лосося в соусе терияки, томаты, моцарелла, маслины, томатный соус, моцарелла, укроп и петрушка.</p>
            </q-card-section>

            <q-separator></q-separator>

            <q-card-section>
              <q-btn-toggle
                unelevated
                v-model="pizzaDiametr"
                toggle-color="grey-5"
                no-caps
                class="text-lowercase"
                :options="[
                  {label: '25 см.', value: '25'},
                  {label: '30 см.', value: '30'},
                  {label: '40 см.', value: '40'}
                ]"
              />
            </q-card-section>

            <q-card-section>
              <div class="row justify-between">
                <span class="card_price text-bold">{{ price }} ₽</span>
                <span>
                  <q-btn flat class="text-bold" color="secondary" label="В корзину"></q-btn>
                </span>
              </div>
            </q-card-section>
          </q-card>

          <q-card class="card shadow-transition q-mx-md" square>
            <img src="/statics/img/cards/card4.jpg" />

            <q-card-section>
              <div class="text-h6">Сальмоне</div>
            </q-card-section>

            <q-card-section>
              <p>Филе лосося в соусе терияки, томаты, моцарелла, маслины, томатный соус, моцарелла, укроп и петрушка.</p>
            </q-card-section>

            <q-separator></q-separator>

            <q-card-section>
              <q-btn-toggle
                unelevated
                v-model="pizzaDiametr"
                toggle-color="grey-5"
                no-caps
                class="text-lowercase"
                :options="[
                  {label: '25 см.', value: '25'},
                  {label: '30 см.', value: '30'},
                  {label: '40 см.', value: '40'}
                ]"
              />
            </q-card-section>

            <q-card-section>
              <div class="row justify-between">
                <span class="card_price text-bold">{{ price }} ₽</span>
                <span>
                  <q-btn flat class="text-bold" color="secondary" label="В корзину"></q-btn>
                </span>
              </div>
            </q-card-section>
          </q-card> -->
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      slideImage: [
        "./statics/img/slider/slide1.jpg",
        "./statics/img/slider/slide2.jpg",
        "./statics/img/slider/slide3.jpg",
        "./statics/img/slider/slide4.jpg"
      ],
      pizzaDiametr: "25",
      products: [
        {
          id: 1,
          type: ["Акция"],
          img: "/statics/img/cards/card1.jpg",
          category: "pizza",
          name: "Сальмоне",
          description: "Филе лосося в соусе терияки, томаты, моцарелла, маслины, томатный соус, моцарелла, укроп и петрушка.",
          options: [
            { label: "25 см.", value: "25", price: "375" },
            { label: "30 см.", value: "30", price: "400" },
            { label: "40 см.", value: "40", price: "700" }
          ]
          // price: [
          //   { price25: "375", price30: "400", price40: "700" }
          // ]
        },
        {
          id: 2,
          type: ['остро', 'хит'],
          img: "/statics/img/cards/card1.jpg",
          category: "pizza",
          name: "Пицца Барбекю",
          description: "Куриное филе, бекон с/к, колбаса п/к, болгарский перец, шампиньоны, лук красный маринованный, томатный соус, моцарелла, укроп и петрушка.",
          options: [
            { label: "25 см.", value: "25", price: "425" },
            { label: "30 см.", value: "30", price: "565" },
            { label: "40 см.", value: "40", price: "895" }
          ]
          // price: [
          //   { price25: "375", price30: "400", price40: "700" }
          // ]
        },
      ]
      // price: ''
    };
  },
  meta: {
    // sets document title
    title: "Dinonna Pizzeria",
    // optional; sets final title as "Index Page - My Website", useful for multiple level meta
    titleTemplate: title => `Главная | ${title}`,

    // meta tags
    meta: {
      description: { name: "description", content: "Главная страница" },
      keywords: { name: "keywords", content: "главная" },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8"
      }
    }
  },
  computed: {
    price() {
      switch (this.pizzaDiametr) {
        case "25":
          return "375";
          break;
        case "30":
          return "450";
          break;
        case "40":
          return "700";
          break;

        default:
          return "375";
          break;
      }
    }
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
.main-slider {
  height 700px
}
.terms-delivery {
  &_title {
    font-size: 20px;
  }

  &_subtitle {
    font-size: 14px;
    color: $grey-5;
  }
}

.recomended {
  background: url('/statics/img/bg-main.jpg');
  background-size: cover;
}

.card {
  width: 100%;
  max-width: 250px;

  &:hover {
    box-shadow: $shadow-15;
  }

  &_chip {
    font-size: 12.8px;
    color: #FFFFFF;

    &--sale {
      background-color: rgba(126, 87, 194, 0.8);
    }

    &--hit {
      background-color: rgba(56, 142, 60, 0.8);
    }
  }

  &_price {
    font-size: 24px;
  }
}
</style>

