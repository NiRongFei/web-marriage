import './styles/index.scss';
import 'element-ui/lib/theme-chalk/index.css';

import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import ElementUI from 'element-ui';
Vue.use(ElementUI);

Vue.config.productionTip = false;

import * as filters from './filters';
Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
