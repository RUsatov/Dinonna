<template>
  <q-page>
    <section class="about">
      <!-- Карта -->
      <div class="about_map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad6b29d2e9dd07a13a08b2bb170b116c909f9062869c6f551af5e9d1cacf25038&amp;source=constructor"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>

      <div class="container">
        <div class="row q-my-xl about_content">
          <div class="col-md-6 col-12 q-pr-md-md q-pa-none about_column">
            <div class="mobile-only">
              <h3 class="text-h6">О КОМПАНИИ</h3>
              <q-separator class="q-mb-md q-mt-sm"></q-separator>
            </div>
            <p class="about_info">Dinonna - это сочетание дружелюбного сервиса и вкусных блюд: пицца, бургеры, суши, роллы, ВОК, с быстрой доставкой на дом или офис.Мы готовим и доставляем для Вас, мы Вас любим и делаем всё, чтобы стать ещё лучше, ещё быстрее и ещё вкуснее! В наших блюдах Вы найдёте высококачественные ингредиенты на любой вкус: от уникальных деликатесов до продуктов на каждый день – исключительно свежих и качественных. Dinonna - это блюда, которые хочется есть ещё и ещё! Вкуснейшая пицца, суши и роллы, в которых мн-о-о-о-о-о-го начинки. Заказывайте доставку: тел. 903-903, сайт http://dinonna.ru/ Скачай приложение Appstore и Googleplay (Dinonna Pizzeria)Сайт принадлежит Серышев Павел Викторович ИНН 532116477960 ОГРНИП 315532100024127 от 10.12.2015 Юридический адрес: 173024, Новгородская область, г. Великий Новгород, ул. Коровникова 10, кв. 30. Фактический (почтовый) адрес: 173021, Новгородская область, г. Великий Новгород, ул. Нехинская, д. 57, оф. 48 Телефон: 8 (8162) 903 903Способы оплаты: Наличный расчёт. Если товар доставляется курьером, то оплата осуществляется наличными курьеру в руки. При получении товара обязательно проверьте комплектацию товара, наличие гарантийного талона и чека.Банковской картой. Для выбора оплаты товара с помощью банковской карты на соответствующей странице необходимо нажать кнопку «Оплата заказа банковской картой». Оплата происходит через ПАО СБЕРБАНК с использованием Банковских карт следующих платежных систем: МИР, VISA International, Mastercard Worldwide, JCBУсловия возврата товара: Претензии по качеству продукции принимаются в день покупки. У вас должно сохраниться не менее 80% продукции. Возврат переведенных средств, производится на Ваш банковский счет в течение 5-30 рабочих дней. Срок зависит от банка, который выдал вашу карту.</p>
          </div>
          <div class="col-md-6 col-12 q-pl-md-md q-pa-none about_column">
            <h3 class="text-h6 desktop-only">Контакты</h3>
            <div class="q-mt-md mobile-only">
              <h3 class="text-h6">КОНТАКТЫ</h3>
              <q-separator class="q-mb-md q-mt-sm"></q-separator>
            </div>
            <div class="contacts bg-white shadow-2 text-main q-my-md">
              <q-list>
                <a href="tel: 903-903">
                  <q-item clickable v-ripple class="q-py-md">
                    <q-item-section side>
                      <q-icon size="24px" name="local_phone" color="text-main" />
                    </q-item-section>
                    <q-item-section class="q-pl-md">
                      <p>903-903</p>
                      <p class="item--text-second">Телефон</p>
                    </q-item-section>
                  </q-item>
                </a>

                <q-item clickable class="q-py-md">
                  <q-item-section side>
                    <q-icon size="24px" name="home" color="text-main" />
                  </q-item-section>
                  <q-item-section class="q-pl-md">
                    <p>Нехинская, 57</p>
                    <p class="item--text-second">Адрес</p>
                  </q-item-section>
                </q-item>

                <q-separator></q-separator>

                <q-item-label class="q-ma-md item--text-second">Наши приложения</q-item-label>

                <a
                  href="https://play.google.com/store/apps/details?id=com.FoodSoul.VNovgorodDinonnaPizze"
                  rel="nofollow"
                >
                  <q-item clickable v-ripple>
                    <q-item-section side>
                      <q-icon size="24px" color="text-main" name="android" />
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
                  <q-item clickable>
                    <q-item-section side>
                      <q-icon size="24px" name="fab fa-apple" color="text-main" />
                    </q-item-section>
                    <q-item-section class="q-pl-md">
                      <p>Скачать в AppStore</p>
                    </q-item-section>
                    <q-item-section side>
                      <q-icon size="24px" name="launch" />
                    </q-item-section>
                  </q-item>
                </a>

                <q-separator></q-separator>

                <q-item-label class="q-ma-md item--text-second">Мы в соцсетях</q-item-label>

                <a href="https://vk.com/dinonna_pizzeria" rel="nofollow">
                  <q-item clickable v-ripple>
                    <q-item-section side>
                      <q-icon size="24px" class="vk-color" name="fab fa-vk" />
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
                  <q-item clickable>
                    <q-item-section side>
                      <q-icon size="24px" name="fab fa-facebook-f" class="fb-color" />
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
                  <q-item clickable>
                    <q-item-section side>
                      <q-icon size="24px" name="fab fa-instagram" class="inst-color" />
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

            <h3 class="text-h6 desktop-only">Режим работы</h3>
            <div class="q-mt-md mobile-only">
              <h3 class="text-h6">РЕЖИМ РАБОТЫ</h3>
              <q-separator class="q-mb-md q-mt-sm"></q-separator>
            </div>
            <div class="working-hours bg-white shadow-2 text-main q-my-md">
              <q-list>
                <!-- Понедельник-Четверг -->
                <q-item>
                  <q-item-section>
                    <q-list>
                      <q-item dense>
                        <q-item-section>Понедельник</q-item-section>
                      </q-item>
                      <q-item dense>
                        <q-item-section>Вторник</q-item-section>
                      </q-item>
                      <q-item dense>
                        <q-item-section class="text-bold">Среда</q-item-section>
                      </q-item>
                      <q-item dense>
                        <q-item-section>Четверг</q-item-section>
                      </q-item>
                    </q-list>
                  </q-item-section>
                  <q-item-section class="text-h5 text-center">11:00 – 22:55</q-item-section>
                </q-item>

                <q-separator></q-separator>

                <!-- Пятница суббота -->
                <q-item>
                  <q-item-section>
                    <q-list>
                      <q-item dense>
                        <q-item-section>Пятница</q-item-section>
                      </q-item>
                      <q-item dense>
                        <q-item-section>Суббота</q-item-section>
                      </q-item>
                    </q-list>
                  </q-item-section>
                  <q-item-section class="text-h5 text-center">11:00 – 23:50</q-item-section>
                </q-item>

                <q-separator></q-separator>

                <!-- Воскресенье -->
                <q-item>
                  <q-item-section>
                    <q-list>
                      <q-item dense>
                        <q-item-section>Воскресенье</q-item-section>
                      </q-item>
                    </q-list>
                  </q-item-section>
                  <q-item-section class="text-subtitle1 text-center">11:00 – 22:55</q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  meta: {
    // sets document title
    title: "Dinonna Pizzeria",
    // optional; sets final title as "Index Page - My Website", useful for multiple level meta
    titleTemplate: title => `О нас | ${title}`,

    // meta tags
    meta: {
      description: { name: "description", content: "Информация о компании" },
      keywords: { name: "keywords", content: "Отзывы" },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8"
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.about_map {
  height 40vh
}
.about_info {
  @media screen and (max-width: 959.98px) {
    background-color #fff
    padding 14px
    box-shadow $shadow-2
  }
}
.about_column {
  &:first-child {
    order: 1
    @media screen and (max-width: 959.98px) {
      order: 2
    }
  }
  &:last-child {
    order: 2
    @media screen and (max-width: 959.98px) {
      order: 1
    }
  }
}
</style>