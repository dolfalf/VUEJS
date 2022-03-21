<template>
  <div class="home">
    {{ $store.state.message }}
    {{ $store.state.counter }}
    {{ cartItemsCount }}
  <div>
    <button @click="clickIncrement">Increment!</button>
  </div>
  <h1>Vuexヘルパー</h1>
  <div>
    <p>{{ message }}</p>
    <p>{{ counter }}</p>
    <p>{{ cartItems }}</p>
    <p>{{ cartItemsCount }}</p>
    <p><button @click="increment(20)">mutation increment!</button></p>
    <p><button @click="asyncIncrement(30)">asyncincrement!</button></p>
  </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      message: 'message',
      counter: 'counter',
      cartItems: 'cartItems',
    }),
    ...mapGetters([
      'cartItemsCount',
    ]),
    // cartItemsCount() {
    //   return this.$store.getters.cartItemsCount;
    // }
  },
  methods: {
    ...mapMutations([
      'increment'
      ]),
    ...mapActions({
      asyncIncrement: 'increment'
    }),
    clickIncrement() {
      // // this.$store.commit('increment', 100);
      // this.$store.dispatch('increment', 10);
    }
  }
}
</script>
