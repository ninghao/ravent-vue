import Vue from 'vue';
import App from './app/components/app';
import router from './app/app.router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
