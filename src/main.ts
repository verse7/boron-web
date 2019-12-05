import Vue from 'vue';
import VueHead from 'vue-head';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueHead);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
