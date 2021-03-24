import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';

Vue.use(VueRouter);

export const baseRoutes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index'),
    meta: { title: '首页' },
  },
  {
    path: '/news',
    name: 'News',
    redirect: '/news/list',
    component: () => import('@/views/news/index'),
    meta: { title: '婚姻要闻' },
    children: [
      {
        path: 'list',
        name: 'NewsList',
        component: () => import('@/views/news/list'),
      },
      {
        path: ':id',
        name: 'NewsArticle',
        component: () => import('@/views/news/article'),
        meta: { title: '婚姻要闻内容' },
      },
    ],
  },
  {
    path: '/policy',
    name: 'Policy',
    redirect: '/policy/list',
    component: () => import('@/views/policy/index'),
    meta: { title: '政策法规' },
    children: [
      {
        path: 'list',
        name: 'PolicyList',
        component: () => import('@/views/policy/list'),
      },
      {
        path: ':id',
        name: 'PolicyArticle',
        component: () => import('@/views/policy/article'),
        meta: { title: '政策法规内容' },
      },
    ],
  },
  {
    path: '/notice',
    name: 'Notice',
    redirect: '/notice/list',
    component: () => import('@/views/notice/index'),
    meta: { title: '通知公告' },
    children: [
      {
        path: 'list',
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
    path: '/activity',
    name: 'Activity',
    redirect: '/activity/list',
    component: () => import('@/views/activity/index'),
    meta: { title: '活动沙龙' },
    children: [
      {
        path: 'list',
        name: 'ActivityList',
        component: () => import('@/views/activity/list'),
      },
      {
        path: ':id',
        name: 'ActivityDetail',
        component: () => import('@/views/activity/detail'),
        meta: { title: '活动沙龙详情' },
      },
    ],
  },
  {
    path: '/booking',
    name: 'Booking',
    component: () => import('@/views/booking/index'),
    meta: { title: '预约登记', submenu: true },
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
];

export const asyncRoutes = [
  {
    path: '/registrar/:id',
    name: 'Registrar',
    component: () => import('@/views/registrar/index'),
    meta: { title: '登记员风采' },
  },
  {
    path: '/classroom/:id',
    name: 'Classroom',
    component: () => import('@/views/classroom/index'),
    meta: { title: '在线课堂' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [...baseRoutes, ...asyncRoutes],
    },
  ],
});

export default router;
