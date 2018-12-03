<template>
    <div class="site-header">
      <div class="container">
        <div class="header-logo">
          <a class="logo ir">小米官网</a>
        </div>
        <div class="header-nav">
          <ul class="nav-list">
            <li class="nav-category"><a class="link-category"><span class="text">全部商品分类</span></a></li>
            <li class="nav-item">
              <a class="link">
                <span class="text">小米手机</span>
                <span class="arrow"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="link">
                <span class="text">红米</span>
                <span class="arrow"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="link">
                <span class="text">电视</span>
                <span class="arrow"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="link">
                <span class="text">笔记本</span>
                <span class="arrow"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="link">
                <span class="text">空调</span>
                <span class="arrow"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="link">
                <span class="text">新品</span>
                <span class="arrow"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="link">
                <span class="text">路由器</span>
                <span class="arrow"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="link">
                <span class="text">智能硬件</span>
                <span class="arrow"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="link">
                <span class="text">服务</span>
                <span class="arrow"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="link">
                <span class="text">社区</span>
                <span class="arrow"></span>
              </a>
            </li>
          </ul>
        </div>
        <div class="header-search">
          <form class="search-form clearfix">
            <input id="search" type="search" name="keyword" class="search-text"/>
            <i class="fa fa-search search-btn iconfont"></i>
            <div class="search-hot-words">
              <a>小米8</a>
              <a>小米MIX 3S</a>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "site-header",
      methods:{
      }
    }
</script>

<style scoped>
  .site-header {
    position: relative;
    z-index: 20;
    height: 100px;
  }
  .site-header .header-nav {
    float: left;
    width: 850px;
  }
  .site-header .container {
    position: relative;
  }
  .site-header .header-logo {
    float: left;
    width: 62px;
    margin-top: 22px;
  }
  .site-header .logo {
    position: relative;
    display: block;
    width: 55px;
    height: 55px;
    overflow: hidden;
    _zoom: 1;
    background-color: #ff6700;
    background: url(../../static/logo.png) no-repeat 50% 50%;
  }
  .ir {
    display: block;
    text-align: left;
    text-indent: -9999em;
    overflow: hidden;
    _zoom: 1;
  }
  .site-header .nav-list {
    position: relative;
    z-index: 10;
    float: left;
    width: 820px;
    height: 88px;
    margin: 0;
    padding: 12px 0 0 30px;
    list-style-type: none;
    font-size: 16px;
  }
  .site-header .nav-category {
    position: relative;
    float: left;
    width: 127px;
    padding-right: 15px;
  }
  .site-header .nav-item {
    float: left;
  }
  .site-header .nav-category .link-category {
    display: block;
    padding: 26px 0 38px;
    text-align: right;
    color: #333;
    visibility: hidden;
  }
  .site-header .nav-item .link {
    display: block;
    padding: 26px 10px 38px;
    color: #333;
  }
  .site-header .search-text {
    position: absolute;
    top: 30px;
    right: 51px;
    z-index: 1;
    width: 223px;
    height: 48px;
    padding: 0 10px;
    border: 1px solid #e0e0e0;
    font-size: 14px;
    line-height: 48px;
    outline: 0;
    -webkit-transition: all .2s;
    transition: all .2s;
  }
  .site-header .search-btn {
    position: absolute;
    right: 0;
    top: 30px;
    z-index: 2;
    width: 52px;
    height: 48px;
    text-align: center;
    line-height: 50px;
    border: 1px solid #e0e0e0;
    font-size: 20px;
    background: #fff;
    color: #616161;
    outline: 0;
    -webkit-transition: all .2s;
    transition: all .2s;
  }
  .site-header .search-btn:hover{
    background-color: #ff6700;
    color: #FFFFFF;
  }
  .site-header .header-nav .nav-item a:hover{
    color: #ff6700;
  }
  .site-header .search-hot-words {
    position: absolute;
    top: 46px;
    right: 62px;
    z-index: 2;
    text-align: right;
  }
  .site-header .search-hot-words a {
    display: inline-block;
    zoom: 1;
    margin-left: 5px;
    padding: 0 5px;
    font-size: 12px;
    background: #eee;
    color: #757575;
    -webkit-transition: all .2s;
    transition: all .2s;
  }
</style>
