<template>
  <q-page>
    <section class="feedback">
      <div class="container">
        <div class="row">
          <div class="col-12 feedback_post q-py-md" v-for="post in feeds" :key="post.id">
            <div class="post_inner">
              <div class="post_header row items-center q-mb-sm">
                <p class="post_name q-mr-md text-subtitle1">{{ post.name ? post.name : 'Аноним' }}</p>
                <time class="post_date q-mr-md">{{ post.date_feed }}</time>
                <div class="post_status">
                  <q-icon
                    v-if="post.status === 'positive'"
                    color="green"
                    name="far fa-smile"
                    size="24px"
                  />
                  <q-icon v-else name="far fa-frown" color="red" size="24px" />
                </div>
              </div>
              <div class="post_body bg-white row q-pa-md shadow-2">
                <div class="post_img self-center">
                  <q-img
                    v-if="post.img"
                    :ratio="1"
                    style="max-width: 150px; height: 100px;"
                    :src="post.img"
                  >
                    <template v-slot:loading>
                      <q-spinner-gears color="primary" />
                    </template>
                  </q-img>
                  <q-img
                    v-else
                    :ratio="16/9"
                    style="max-width: 150px; height: 100px;"
                    contain
                    src="./statics/img/logo.png"
                    spinner-color="primary"
                  >
                    <template v-slot:loading>
                      <q-spinner-gears color="primary" />
                    </template>
                  </q-img>
                </div>
                <p class="post_content q-ml-md">{{ post.text }}</p>
              </div>
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
    titleTemplate: title => `Отзывы | ${title}`,

    // meta tags
    meta: {
      description: { name: "description", content: "Здесь пишут отзывы" },
      keywords: { name: "keywords", content: "Отзывы" },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8"
      }
    }
  },
  data() {
    return {
      feeds: [
        {
          id: 1,
          name: "Аркаша",
          date_feed: "26.07.2019",
          status: "negative",
          img:
            "https://ru.foodsoul.pro/uploads/branches/332/images/feedback/4c008d7cc53fc8099b83fcb7a782cbdc.jpg",
          text:
            "Будем надеятся, что не аккуратность доставки не отразится на вкусе."
        },
        {
          id: 2,
          name: "",
          date_feed: "20.08.2019",
          status: "positive",
          img: "",
          text:
            "Пицца агонь, только жувачку не положили в этот раз！Вот весь в печали"
        },
        {
          id: 3,
          name: "",
          date_feed: "25.08.2019",
          status: "positive",
          img: "",
          text:
            "Все отлично, жаль, что в последнее время перестали класть жвачку."
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.post_body {
  height: 132px;
}

.post_img {
  width: 150px;
  height: 100px;
}
</style>