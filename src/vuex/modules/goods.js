/**
 * Created by maxiangsai on 2017/9/9.
 */
import * as types from '../mutations-type'

const state = {
  goods: {}
}

const getters = {
  goods: state => state.goods
}

const mutations = {
  [types.SET_GOODS] (state, goods) {
    state.goods = goods
    console.log('goods' + goods.shopId)
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
