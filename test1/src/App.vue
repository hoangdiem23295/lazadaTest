<template>
  <v-app id="app">
    <Header />
    <router-view/>
    <Footer />
  </v-app>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}

</script>
<style lang="scss">
  * {
    box-sizing: border-box;
  }
  html {
    overflow: visible !important;
  }
  body {
    font-family: 'Roboto';
    margin: 0;
    transition: 0.3s;
  }
  .home-page {
    position: absolute;
    top: 87px;
    width: 100%;
    left: 0;
  }
  .wrapper {
    width: 1188px;
    margin: 0 auto;
  }
  .noBorder {
    box-shadow: none !important;
    border-radius: 0 !important;
  }
</style>
