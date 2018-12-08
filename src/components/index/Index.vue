<template>
  <div>
    <div class="index-content">
      <div class="container">
        <div class="home-hero-container container">
          <!--首页分类-->
          <category/>
          <!--首页走马灯-->
          <carousel/>
          <!--通道 宣传片-->
          <channel-promo/>
        </div>
        <!--开始闪购-->
        <flash-sales-start/>
        <!--结束闪购-->
        <flash-sales-end/>
      </div>
    </div>
    <div class="main-content">
      <div class="container">
        <home-main/>
      </div>
    </div>
  </div>
</template>

<script>
  import Category from './components/Category';
  import Carousel from './components/Carousel';
  import ChannelPromo from './components/ChannelPromo';
  import FlashSalesStart from './components/FlashSalesStart';
  import FlashSalesEnd from './components/FlashSalesEnd';
  import HomeMain from './main/Main';

  export default {
    components: {
      Category,
      Carousel,
      ChannelPromo,
      FlashSalesStart,
      FlashSalesEnd,
      HomeMain
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .home-hero-container {
    position: relative;
    z-index: 10;
    margin-bottom: 26px;
  }
  .main-content{
    background: #f5f5f5;
  }
</style>
