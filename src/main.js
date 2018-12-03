// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import {router} from './router';
import  iView from 'iview';
import 'iview/dist/styles/iview.css';
import '../static/Font-Awesomem/css/font-awesome.css';
import '../static/fontawesome5.0.10/web-fonts-with-css/css/fontawesome-all.min.css';

Vue.config.productionTip = false;
Vue.use(iView);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
