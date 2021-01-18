<template>
  <div class="header">
    <div class="header-top" id="header-top">
      <div class="header-top__wrapper wrapper">
        <div class="header-top__link active">
          SAVE MORE ON APP
        </div>
        <div class="header-top__link active">
          SELL ON LAZADA
        </div>
        <div class="header-top__link">
          CUSTOMER CARE
        </div>
        <div class="header-top__link">
          TRACK MY ORDER
        </div>
        <div class="header-top__link">
          LOGIN
        </div>
        <div class="header-top__link">
          SIGNUP
        </div>
        <div class="header-top__link">
          CHANGE LANGUAGE
        </div>
      </div>
    </div>
    <div class="header-main">
      <div class="header-main__wrapper wrapper">
        <div class="header-main__logo">
          <img :src="logo" alt="logo">
        </div>
        <div class="header-main__search">
          <v-text-field
            v-model="search"
            solo
            label="Search in Lazada"
            hide-details
            class="header-main__input"
            placeholder="Search in Lazada"
          ></v-text-field>
          <v-btn class="header-main__input-icon noBorder"><span class="fa fa-search"></span></v-btn>
        </div>
        <v-btn class="header-main__cart noBorder"><span class="fa fa-shopping-cart"></span></v-btn>
        <div class="header-main__extra">
          <img :src="headerImage1"/>
        </div>
      </div>
    </div>
    <div class="header-link">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  components: {
  },
  data() {
    return {
      logo: require('../assets/image/logo.png'),
      headerImage1: require('../assets/image/header1.png'),
      search: ''
    }
  },
  mounted () {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
        if (currentScrollPos < 300) {
          console.log('show===>', currentScrollPos)
          document.getElementById("header-top").style.top = "0";
          document.getElementById("header-top").style.height = "25px";
        } else {
          console.log('hide===>', currentScrollPos)
          document.getElementById("header-top").style.top = "-50px";
          document.getElementById("header-top").style.height = "0"
        }
      prevScrollpos = currentScrollPos;
    }
    console.log(prevScrollpos)
  }
}
</script>
<style lang="scss">
.header {
  position: fixed;
  background-color: $white;
  width: 100%;
  z-index: 1;

  &-top {
    position: relative;
    display: flex;
    height: 25px;
    background-color: rgba(0,0,0,.03);
    transition: all 0.3s ease;

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    &__link {
      font-size: 12px;
      color: $textColor1;
      padding: 0 17px;
      transition: color 0.3s ease;

      &.active {
        color: $mainColor;
      }
      &:hover {
        color: $secondColor;
      }
      &:last-child {
        padding-right: 0;
      }
    }
  }
  &-main {
    padding: 10px 0;
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    &__logo {
      width: 200px;
      height: 39px;

      img {
        max-width: 127px;
      }
    }
    &__search {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__input {
      width: 688px;
      .v-input__slot {
        box-shadow: none !important;
        background-color: $grey1 !important;
        border-radius: 0 !important;
      }

      &-icon {
        min-height: 100% !important;
        height: 48px !important;
        background-color: $secondColor !important;

        .fa {
          font-size: 20px;
          color: $white;
        }
      }
    }
    &__cart {
      height: 48px !important;
      margin-left: 20px;
      background-color: transparent !important;

      .fa {
        font-size: 30px;
      }
    }
    &__extra {
      img {
        max-width: 188px;
      }
    }
  }
}
</style>