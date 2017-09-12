/**
 * Created by maxiangsai on 2017/9/12.
 */

// cart.js为模拟添加到购物车的接口， 真实情况为：详情页接口获取单品详情数据，再将点击购买后的数据添加到此js

import * as types from '../mutations-type'

const state = {
  cart_goods: []
}

const getters = {
  cart_goods: state => state.cart_goods,
  cartLen: state => state.cart_goods.length
}

const mutations = {
  [types.ADD_TO_CART] (state, goods) {
    // 购物车已有该商品，则数量叠加，否则push
    const index = state.cart_goods.findIndex((item, index, arr) => {
      return item.iid === goods.iid
    })
    index > -1 ? state.cart_goods[index].cartNum += goods.cartNum : state.cart_goods.push(goods)
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
