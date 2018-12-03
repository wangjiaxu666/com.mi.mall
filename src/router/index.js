import Vue from 'vue';
import VueRouter from 'vue-router';
import {routers} from './router';
import iView from "iview";

Vue.use(VueRouter);
//配置路由
const RouterConfig = {
  mode: 'history',
  routes: routers
};
export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});
router.afterEach(route => {
  iView.LoadingBar.finish();
});

