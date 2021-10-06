import Vue from 'vue'
import Vuex from 'vuex'
import {createLogger} from 'vuex'
import IndexElectricState from "./modules/IndexElectricState";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    indexElectric: IndexElectricState
  },
  plugins: [createLogger()]
})
