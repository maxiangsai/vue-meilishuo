/**
 * Created by maxiangsai on 2017/9/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import goods from './modules/goods'
import cart from './modules/cart'

import * as actions from './actions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  modules: {
    goods,
    cart
  },
  strict: debug
})
