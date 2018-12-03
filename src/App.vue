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
  components:{
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
.container{
  width: 1226px;
  *zoom: 1;
  margin-right: auto;
  margin-left: auto;
}
</style>
