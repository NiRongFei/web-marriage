import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index'),
      },
      {
        path: 'news',
        name: 'News',
        component: () => import('@/views/news/index'),
      },
      {
        path: 'policy',
        name: 'Policy',
        component: () => import('@/views/policy/index'),
      },
      {
        path: 'notice',
        name: 'Notice',
        component: () => import('@/views/notice/index'),
      },

      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/register/index'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
