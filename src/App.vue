<template>
  <div id="app">
    <div class="home">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <p>{{ key }}</p>
    <button class="btn" @click="show" value="small">modal window {{size[0]}}</button>
    <button class="btn" @click="show" value='medium'>modal window {{size[1]}}</button>
    <button class="btn" @click="show" value='large'>modal window {{size[2]}}</button>
    <transition name="slide">
      <Modal v-if="this.$store.state.isShow" v-bind:s="this.key">
        Возможно, вам будет интересно узнать, что Vue-шаблоны в действительности компилируются в render-функцию. Обычно нет необходимости знать подобные детали реализации, но может быть любопытным посмотреть на то, как компилируются те или иные возможности шаблонов. Ниже приведена небольшая демонстрация использования метода Vue.compile, который в режиме реального времени компилирует строки шаблонов:
        <hr>
      </Modal>
    </transition>
  </div>
</template>
<script>
import Modal from './components/Modal.vue'
import Vuex from 'vuex'
import store from './store.ts'
import Vue from 'vue'
Vue.use(Vuex)


export default {
  components: {
    Modal
  },
  data() {
    return {
      size: ['small', 'medium', 'large'],
      key: '123'
    }
  },
  computed: {
   changeKey: function () {
     return key
   }
  },
  methods: {
    hide () {
      this.$store.commit('hideModal')
    },
    show (event) { 
      this.$store.commit('showModal');
      this.key = event.target.value
    }
    
  }

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slide {
  &-enter-active, &-leave-active {
    transition: all .5s ease;
  }
  &-enter, &-leave-to {
    transform: translateY(-100px);
    opacity: 0;
  }
}
.btn {
  background: #42b983;
  padding: 10px;
  border: none;
  margin: 15px;
  color: #2c3e50;
  font-size: 18px
}

</style>
