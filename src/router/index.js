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
        meta: { title: '首页' },
      },
      {
        path: 'news',
        name: 'News',
        component: () => import('@/views/news/index'),
        meta: { title: '婚姻要闻' },
      },
      {
        path: 'policy',
        name: 'Policy',
        component: () => import('@/views/policy/index'),
        meta: { title: '政策法规' },
      },
      {
        path: 'notice',
        name: 'Notice',
        component: () => import('@/views/notice/index'),
        meta: { title: '通知公告' },
        children: [
          {
            path: '',
            name: 'NoticeList',
            component: () => import('@/views/notice/list'),
          },
          {
            path: ':id',
            name: 'NoticeArticle',
            component: () => import('@/views/notice/article'),
            meta: { title: '通知公告内容' },
          },
        ],
      },
      {
        path: 'booking',
        name: 'Booking',
        component: () => import('@/views/booking/index'),
        meta: { title: '预约登记' },
        children: [
          {
            path: 'register',
            name: 'MarriageRegister',
            component: () => import('@/views/booking/register'),
            meta: { title: '婚姻登记预约' },
          },
          {
            path: 'certificate',
            name: 'MarriageCertificate',
            component: () => import('@/views/booking/certificate'),
            meta: { title: '颁证仪式预约' },
          },
          {
            path: 'family',
            name: 'MarriageFamily',
            component: () => import('@/views/booking/family'),
            meta: { title: '家庭辅导预约' },
          },
        ],
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
