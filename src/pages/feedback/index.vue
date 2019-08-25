<template>
  <div>
    Отзывы
  </div>
</template>

<script>
    export default {
    meta: {
    // sets document title
    title: 'Dinonna Pizzeria',
    // optional; sets final title as "Index Page - My Website", useful for multiple level meta
    titleTemplate: title => `Отзывы | ${title}`,

    // meta tags
    meta: {
      description: { name: 'description', content: 'Page 1' },
      keywords: { name: 'keywords', content: 'Quasar website' },
      equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
    },
  }
  }
</script>

<style lang="scss" scoped>

</style>