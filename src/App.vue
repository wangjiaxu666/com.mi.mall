<template>
  <div id="app">
    <site-topbar/>
    <site-header/>
    <router-view/>
    <site-footer/>
    <site-info/>
    <home-right-bar/>
  </div>
</template>

<script>
  import SiteTopbar from './components/SiteTopbar';
  import SiteHeader from './components/SiteHeader';
  import SiteFooter from './components/SiteFooter';
  import SiteInfo from './components/SiteInfo';
  import HomeRightBar from './components/HomeRightBar';

  export default {
    name: 'App',
    components: {
      SiteTopbar,
      SiteHeader,
      SiteFooter,
      SiteInfo,
      HomeRightBar
    }
  }
</script>

<style>
  #app {
    display: grid;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .container {
    width: 1226px;
    *zoom: 1;
    margin-right: auto;
    margin-left: auto;
  }

  /* 滚动条整体部分，其中的属性有width,height,background,border（和块级元素一样）等 */
  body::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /* 滚动条两端的按钮，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。 */
  body::-webkit-scrollbar-button {
    display: none;
  }

  /*  外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。	 */
  body::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  /* 内层轨道，滚动条中间部分（除去） */
  body::-webkit-scrollbar-track-piece {
    /*background-color: ;*/
  }

  /*  滚动条里面可以拖动的部分 */
  body::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
  }

  /*  边角 */
  body::-webkit-scrollbar-corner {
    background-color: #fff;
  }

  /* 定义右下角拖动块的样式 */
  body::-webkit-scrollbar-resizer {
    background: #fff;
  }
  .span1, .span2, .span3, .span4, .span5, .span6, .span7, .span8, .span9, .span10, .span11, .span12, .span13, .span14, .span15, .span16, .span17, .span18, .span19, .span20{
    float: left;
    margin-left: 14px;
    min-height: 1px;
  }
  .brick-item-active{
    -webkit-box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    -webkit-transform: translate3d(0,-2px,0);
    transform: translate3d(0,-2px,0);
    -webkit-transition: transform 0.4s;
    -o-transition: transform 0.4s;
    transition: transform 0.4s;
  }
</style>
