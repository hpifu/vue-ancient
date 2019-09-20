import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueConfig from 'vue-config';
import config from './configs/config';
import store from './store';
import vuetify from './plugins/vuetify';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueConfig, config);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', redirect: '/ancient/' },
    { path: '/ancient/:id' }
  ]
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
