<template>
    <div class="site-info">
      <div class="container">
        <div class="logo ir">小米官网</div>
        <div class="info-text">
          <p class="sites">
            <a>小米商城</a>
            <span class="sep">|</span>
            <a>MIUI</a>
            <span class="sep">|</span>
            <a>米家</a>
            <span class="sep">|</span>
            <a>米聊</a>
            <span class="sep">|</span>
            <a>多看</a>
            <span class="sep">|</span>
            <a>游戏</a>
            <span class="sep">|</span>
            <a>路由器</a>
            <span class="sep">|</span>
            <a>米粉卡</a>
            <span class="sep">|</span>
            <a>政企服务</a>
            <span class="sep">|</span>
            <a>小米天猫店</a>
            <span class="sep">|</span>
            <a>问题反馈</a>
            <span class="sep">|</span>
            <a>Select Region</a>
          </p>
          <p>© mi.com 京ICP证123456号 京ICP备1234567678号 京公网安备242423686868号 京网文[2017]1530-131号
            （京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京) -非经营性-2014-0090 营业执照 医疗器械公告
            违法和不良信息举报电话：<br/>123-6666-8888，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
        </div>
        <div class="info-links">
          <img src="../../static/SiteInfo/truste.png">
          <img src="../../static/SiteInfo/ba10428a4f9495ac310fd0b5e0cf8370.png">
          <img src="../../static/SiteInfo/v-logo-1.png">
          <img src="../../static/SiteInfo/v-logo-2.png">
          <img src="../../static/SiteInfo/v-logo-3.png">
        </div>
      </div>
      <div class="slogan ir">探索黑科技，小米为发烧而生</div>
    </div>
</template>

<script>
    export default {
        name: "site-info"
    }
</script>

<style scoped>
  .site-info {
    padding: 50px 0;
    font-size: 12px;
    background: #fafafa;
  }
  .site-info .logo {
    float: left;
    width: 57px;
    height: 57px;
    margin-right: 10px;
    background: url(../../static/footer/logo-footer.png) no-repeat 50% 50%;
  }
  .ir {
    display: block;
    text-align: left;
    text-indent: -9999em;
    overflow: hidden;
    _zoom: 1;
  }
  .site-info .info-text {
    float: left;
    color: #b0b0b0;
    width: 700px;
  }
  .site-info .info-text p {
    margin: 0;
    line-height: 18px;
  }
  .site-info .info-text .sites a {
    color: #757575;
  }
  .site-info .info-text a {
    color: #b0b0b0;
  }
  .site-info .info-text a:hover {
    color: #ff6700;
  }
  .sep {
    margin: 0 .25em;
    font-family: sans-serif;
  }
  .site-info .info-links {
    float: right;
    _display: inline;
    height: 28px;
    margin: 4px 0 0;
  }
  .site-info .slogan {
    clear: both;
    margin: 30px auto 0;
    position: relative;
    bottom: -20px;
    width: 267px;
    height: 19px;
    background: url(../../static/slogan2016.png) no-repeat center 0;
  }
  .site-info .info-links img {
    width: auto;
    height: 28px;
    margin-left: 0px;
  }
</style>
