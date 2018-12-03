
//登陆界面
export const index = {
  path: '/',
  name: 'index',
  meta: {
    title: '小米商城'
  },
  component: resolve => {
    require(['@/components/index/Index.vue'], resolve);
  }
};


// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  index
];

