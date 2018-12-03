<template>
    <div class="site-topbar">
      <div class="container">
        <div class="topbar-nav">
          <a>小米商城</a>
          <span class="sep">|</span>
          <a>MIUI</a>
          <span class="sep">|</span>
          <a>IoT</a>
          <span class="sep">|</span>
          <a>云服务</a>
          <span class="sep">|</span>
          <a>金融</a>
          <span class="sep">|</span>
          <a>有品</a>
          <span class="sep">|</span>
          <a>小爱开发平台</a>
          <span class="sep">|</span>
          <a>政企服务</a>
          <span class="sep">|</span>
          <Poptip trigger="hover">
            <a>下载app</a>
            <div slot="content" style="overflow: hidden;">
              <img src="../../static/download.png" alt="小米商城" width="90" height="90" style="display: block;margin: 0 auto;margin-top: 14px;"/>
              <span style="display:block;text-align: center;font-size: 13px;color: #333;line-height: 1;margin-top: 12px;">小米商城 APP</span>
            </div>
          </Poptip>
          <span class="sep">|</span>
          <a>Select Region</a>
        </div>
        <div class="topbar-cart">
          <Dropdown placement="bottom-end">
          <a>
            <i class="fa fa-shopping-cart" style="margin-right: 5px;font-size: 14px;line-height: 20px;"></i><span style="letter-spacing: 1px;">购物车</span>
            <span>(0)</span>
          </a>
            <DropdownMenu slot="list">
              <div style="margin: 30px;width:220px;text-align:center;background-color: #ffffff;"><span>购物车中还没有商品，赶紧选购吧！</span></div>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div class="topbar-info">
          <a>登录</a>
          <span class="sep">|</span>
          <a>注册</a>
          <span class="sep">|</span>
          <a>消息通知</a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "site-topbar"
    }
</script>

<style scoped>
.site-topbar {
  position: relative;
  z-index: 30;
  height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background: #333;
}
.site-topbar .topbar-nav {
  float: left;
  height: 40px;
  line-height: 40px;
}
.site-topbar a {
  color: #b0b0b0;
  line-height: 40px;
  display: inline-block;
  *zoom: 1;
  *display: inline;
}
.site-topbar .topbar-nav a:hover,
.site-topbar .topbar-info a:hover{
  color: #FFFFFF;
}
.site-topbar .sep {
  margin: 0 .4em;
  color: #424242;
}
.site-topbar .topbar-cart {
  position: relative;
  float: right;
  width: 120px;
  height: 40px;
  margin-left: 15px;
}
.site-topbar .topbar-info {
  position: relative;
  float: right;
  height: 40px;
  line-height: 40px;
}
.site-topbar .topbar-cart a{
  padding: 0 10px;
}
.site-topbar .topbar-cart a:hover{
  background-color:#ffffff;
  color: #ff6700;
}
</style>
