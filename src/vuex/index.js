/**
 * Created by maxiangsai on 2017/9/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'


import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {}
})
