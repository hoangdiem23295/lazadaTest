<template>
  <div class="footer">
    <div class="wrapper">
      <div class="footer-first">
        <div class="footer-first__col link">
          <div class="footer-first__first-title">CONTACT US</div>
          <div class="footer-first__first linkList">
            <div class="linkList__item">
              <a>Hotline & Online chat (24/7)</a>
            </div>
            <div class="linkList__item">
              <a>Help Center</a>
            </div>
            <div class="linkList__item">
              <a>How to Buy</a>
            </div>
            <div class="linkList__item">
              <a>Shipping & Delivery</a>
            </div>
            <div class="linkList__item">
              <a>International Product Policy</a>
            </div>
            <div class="linkList__item">
              <a>How to Return</a>
            </div>
          </div>
        </div>
        <div class="footer-first__col link">
          <div class="footer-first__first-title">LAZADA VIETNAM</div>
          <div class="footer-first__first linkList">
            <div class="linkList__item">
              <a>About Lazada</a>
            </div>
            <div class="linkList__item">
              <a>Sell on Lazada</a>
            </div>
            <div class="linkList__item">
              <a>Afﬁliate Program</a>
            </div>
            <div class="linkList__item">
              <a>Careers</a>
            </div>
            <div class="linkList__item">
              <a>Terms & Conditions</a>
            </div>
            <div class="linkList__item">
              <a>Privacy Policy</a>
            </div>
            <div class="linkList__item">
              <a>Press & Media</a>
            </div>
            <div class="linkList__item">
              <a>Operating Regulation</a>
            </div>
            <div class="linkList__item">
              <a>Procedure of claim and dispute handling</a>
            </div>
          </div>
        </div>
        <div class="footer-first__col about">
          <div class="footer-first__about">
            <img src="../assets/image/footer_logo.png" alt="footer-logo"/>
          </div>
          <div class="footer-first__about">
            <div class="footer-first__about-title">Go where your heart beats</div>
            <div class="footer-first__about-subTitle">Download the App</div>
          </div>
        </div>
        <div class="footer-first__col app">
          <div class="footer-first__appItem"></div>
          <div class="footer-first__appItem"></div>
        </div>
      </div>
      <div class="footer-second">

      </div>
      <div class="footer-thrid">

      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Footer',
  components: {
  }
}
</script>

<style lang="scss">
.footer {
  background-color: $homePageBackground;
  &-first {
    display: flex;
    width: 100%;
    padding: 20px 0 25px;
    &__col {
      width: 25%;

      &.link {
        color: $mainColor;
      }
      &.app,
      &.about {
        display: flex;
        margin-top: 30px;
      }
    }
    .linkList {
      margin-top: 5px;
      &__item {
        font-size: 12px;
        line-height: 17px;

        a {
          color: $mainColor;
          transition: all 0.3s ease;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    &__title {
      font-size: 16px;
    }
    &__about {
      margin-right: 15px;

      &-title {
        font-size: 16px;
        color: $secondColor;
      }
      &-subTitle {
        font-size: 12px;
      }
    }
    &__appItem {
      width: 126px;
      height: 42px;
      margin-right: 10px;
      background-image: url(https://laz-img-cdn.alicdn.com/tfs/TB1dFECEMTqK1RjSZPhXXXfOFXa-986-931.png);

      &:first-child {
        background-position: -190px -124px;
      }
      &:last-child {
        background-position: -568px -374px;
      }
    }
  }
}
</style>
