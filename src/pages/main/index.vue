<template>
  <q-page>
    <!-- Карусель -->
    <section class="main-slider">
      <q-carousel
        v-model="slide"
        swipeable
        animated
        autoplay
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
        <div class="terms-delivery bg-white row justify-center q-mt-lg shadow-1">
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
    <h3 class="container text-h6 q-mb-md">Мы рекомендуем</h3>
    <section class="recomended q-mb-xl q-py-lg">
      <div class="container">
        <div class="row justify-between items-stretch">
          <div class="q-mb-lg q-px-md col-lg-3 col-lg-4" v-for="item in products" :key="item.id">
            <q-card
              class="card shadow-transition"
              square
            >
              <img :src="item.img" />
  
              <q-card-actions v-if="item.type" class="absolute-top-right">
                <q-chip
                  v-for="(chip, i) in item.type"
                  :key="i"
                  size="10px"
                  dense
                  class="text-uppercase card_chip q-px-sm"
                  :class="{
                    'card_chip--sale': chip === 'акция',
                    'card_chip--hit': chip === 'хит',
                    'card_chip--spicy': chip === 'остро',
                  }"
                >{{ chip }}</q-chip>
              </q-card-actions>
  
              <q-card-section>
                <div class="text-h6">{{ item.name }}</div>
              </q-card-section>
  
              <q-card-section class="card-section--margin">
                <p v-html="item.description"></p>
              </q-card-section>
  
              <div>
                <q-separator></q-separator>
              </div>
  
              <q-card-section v-if="item.options.length > 0" class="row justify-center">
                <q-btn-toggle
                  unelevated
                  v-model="item.btn_val"
                  @click="calcPrice(item.options, item.btn_val)"
                  toggle-color="grey-5"
                  no-caps
                  class="text-lowercase"
                  :options="item.options"
                />
              </q-card-section>
  
              <q-card-section>
                <div class="row justify-between">
                  <span class="card_price text-bold">{{ item.options.length > 0 ? calcPrice(item.options, item.btn_val) : item.price }} ₽</span>
                  <span>
                    <q-btn flat class="text-bold" color="secondary" label="В корзину"></q-btn>
                  </span>
                </div>
              </q-card-section>
            </q-card>
          </div>

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
          type: ["акция"],
          img: "/statics/img/cards/card1.jpg",
          category: "pizza",
          name: "Сальмоне",
          description:
            "Филе лосося в соусе терияки, томаты, моцарелла, маслины, томатный соус, моцарелла, укроп и петрушка.",
          options: [
            { label: "25 см.", value: "25", price: "375" },
            { label: "30 см.", value: "30", price: "400" },
            { label: "40 см.", value: "40", price: "700" }
          ],
          btn_val: "25"
        },
        {
          id: 2,
          type: ["остро", "хит"],
          img: "/statics/img/cards/card2.jpg",
          category: "pizza",
          name: "Пицца Барбекю",
          description:
            "Куриное филе, бекон с/к, колбаса п/к, болгарский перец, шампиньоны, лук красный маринованный, томатный соус, моцарелла, укроп и петрушка.",
          options: [
            { label: "25 см.", value: "25", price: "425" },
            { label: "30 см.", value: "30", price: "565" },
            { label: "40 см.", value: "40", price: "895" }
          ],
          btn_val: "25"
        },
        {
          id: 3,
          type: ["хит"],
          img: "/statics/img/cards/card3.jpg",
          category: "iaponskaia-kukhnia",
          name: "Мимоза",
          description:
            "Лосось терияки, перец болгарский, лук зеленый, огурец такуан, снежный краб, кунжут белый, кунжут чёрный, рис, нори. <br/> <b>8 шт.</b>",
          options: [],
          btn_val: "",
          price: '250'
        },
        {
          id: 4,
          type: [],
          img: "/statics/img/cards/card4.jpg",
          category: "iaponskaia-kukhnia",
          name: "Три пиццы 999 р.",
          description:
            "Три пиццы 30 см. Позитано, Пепперони, Маргарита. <br/> <br/>*Сет является акционным, прочие скидки и бонусы не распространяются <br/> <b>1 шт.</b>",
          options: [],
          btn_val: "",
          price: '250'
        },
      ],
      price: ""
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
    // price() {
    //   switch (this.pizzaDiametr) {
    //     case "25":
    //       return "375";
    //       break;
    //     case "30":
    //       return "450";
    //       break;
    //     case "40":
    //       return "700";
    //       break;
    //     default:
    //       return "375";
    //       break;
    //   }
    // },
  },
  methods: {
    calcPrice(items, val) {
      let currentItem = items.find(item => item.value === val);
      return currentItem.price;
    }
  }
};
</script>

<style lang="stylus" scoped>
.main-slider {
  height: 60vh;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 276px;

  .card-section--margin {
    margin-bottom: auto;
  }

  &:hover {
    box-shadow: $shadow-10;
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

    &--spicy {
      background-color: rgba(229, 57, 53, 0.8);
    }
  }

  &_price {
    font-size: 24px;
  }
}
</style>

