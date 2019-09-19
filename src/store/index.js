import Vue from 'vue'
import Vuex from 'vuex'
import ancient from './ancient'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ancient,
    },
    strict: process.env.NODE_ENV !== 'production',
})