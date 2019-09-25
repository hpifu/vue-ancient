import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { Scroll } from 'vuetify/lib/directives'
import InfiniteScroll from 'vue-infinite-scroll'

Vue.use(Vuetify, {
  directives: {
    Scroll,
    InfiniteScroll
  }
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
