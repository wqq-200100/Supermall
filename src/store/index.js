import Vue from "vue";
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

// 创建Store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      // payload新添加的商品
      // let oldProduct = null;
      // for (let item of state.cartList) {
      //   if (item.iid === payload.iid) {
      //     oldProduct = item;
      //   }
      // }

      // // 判断oldProduct
      // if (oldProduct) {
      //   oldProduct.count += 1
      // } else {
      //   payload.count = 1
      //   state.cartList.push(payload)
      // }
      let oldProduct = state.cartList.find(item => item.iid === payload.iid)

      if (payload) {
        oldProduct.count += 1
      }else {
        payload.count = 1
        state.cartList.push(payload)
      }
    }
  }
})

// 挂载到vue实例上
export default store
