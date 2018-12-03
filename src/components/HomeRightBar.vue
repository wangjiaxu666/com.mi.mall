<template>
    <div class="home-right-bar">
      <div class="bar-l">
          <ul class="bar-top">
            <li class="bar-sort bar-sort-qr">
              <a class="bar-link">
                <i class="fa fa-mobile-alt"></i>
                <span class="bar-text">手机APP</span>
              </a>
            </li>
            <li class="bar-sort">
              <a class="bar-link">
                <i class="fa fa-user"></i>
                <p class="bar-text">个人中心</p>
              </a>
            </li>
            <li class="bar-sort">
              <a class="bar-link">
                <i class="fas fa-comment-dots"></i>
                <p class="bar-text">联系客服</p>
              </a>
            </li>
            <li class="bar-sort bar-l-car">
              <a class="bar-link">
                <i class="fa fa-shopping-cart"></i>
                <p class="bar-text">购物车</p>
              </a>
            </li>
          </ul>
          <BackTop style="border: 1px solid #f5f5f5;border-top: none;border-bottom: none;" :duration="1500" :height="100" :bottom="50" :right="0">
            <div class="back-top">
              <Icon style="display: inline;color: #8a8a8a;" type="ios-arrow-up"/>
              <!--<i class="fa fa-angle-up"></i>-->
              返回顶端
            </div>
          </BackTop>
      </div>
    </div>
</template>

<script>
    export default {
        name: "home-right-bar"
    }
</script>

<style scoped>
  .home-right-bar {
    position: fixed;
    bottom: 140px;
    right: 0;
    z-index: 999999;
  }
  .home-right-bar .bar-top {
    padding: 0;
    margin: 0;
    border-top: 1px solid #f5f5f5;
  }
  .home-right-bar .bar-sort {
    position: relative;
    display: block;
    width: 82px;
    height: 90px;
    list-style: none;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    border-top: none;
  }
  .home-right-bar .bar-link {
    display: block;
    height: 100%;
    text-align: center;
  }
  .home-right-bar .bar-text {
    font-size: 14px;
    text-align: center;
    display: inherit;
  }
  .home-right-bar .bar-sort i {
    font-size: 30px;
    margin-top: 15px;
  }
  .home-right-bar .bar-sort a{
    color: #8a8a8a;
  }
  .home-right-bar .bar-sort a:hover{
    color: #ff6700;
  }
  .home-right-bar .back-top{
    width: 82px;
    padding: 10px;
    background: #ffffff;
    font-size: 14px;
    text-align: center;
  }
  .home-right-bar .back-top i {
    font-size: 30px;
    margin-top: 15px;
  }
  .home-right-bar .back-top:hover {
    color: #ff6700;
  }
</style>
