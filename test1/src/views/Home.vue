<template>
  <div class="home-page">
    <div class="home-page__banner">
      <div class="home-page__banner-title">[SUPER CHEAP]All U want</div>
      <div class="home-page__banner-subTitle">Biggest sale of the year, buy now!</div>
    </div>
    <div class="home-page__content">
      <Category/>
    </div>
  </div>
</template>

<script>
import Category from '@/components/Category.vue'

export default {
  name: 'Home',
  components: {
    Category
  }
}
</script>
<style lang="scss">
  .home-page {
    background-color: $homePageBackground;
    padding-bottom: 24px;

    &__banner {
      height: 120px;
      background-image: url('../assets/image/banner.png');
      background-size: 100% 100%;
      background-position: center top;

      &-title {
        font-size: 28px;
        font-weight: 700;
        line-height: 40px;
        text-align: center;
        color: $white;
        padding-top: 32px;
      }
      &-subTitle {
        font-size: 16px;
        line-height: 20px;
        text-align: left;
        color: $white;
      }
    }
  }
</style>
