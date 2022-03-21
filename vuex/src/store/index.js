import { createStore } from 'vuex'

export default createStore({
  state: {
    message: "Hello from Vuex!!",
    counter: 0,
    cartItems: ["お肉", "お菓子", "お酒"],
  },
  getters: {
    cartItemsCount(state) {
      return state.cartItems.length;
    }
  },
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload ;
    }
  },
  actions: {
    increment(context, payload) {
      setTimeout(() => {
        context.commit('increment', payload);
      }, 1000)
    }
  },
  modules: {
  }
})
