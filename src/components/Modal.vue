<template>
  <div class="mod_wrapper">
    <div class="mod" v-bind:class="s">
      <div class="mod_header">
        <h1>Modal Title {{s}}</h1>
        <button class="mod_close" @click="this.hideMod">x</button>
      </div>
      <slot></slot>
      <p>THE END</p>
    </div>
  </div>
</template>
<script>
import Vuex from 'vuex'
import store from '../store.ts'
import Vue from 'vue'
Vue.use(Vuex)

export default {
  name: 'Modal',
  props: {
    s: String
  },
  methods: {
    hideMod: function() {
      this.$store.state.isShow = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .mod {
    font-weight: bold;
    background: white;
    color: #2c3e50;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &_wrapper {
      background: rgba(0, 0, 0, 0.5);
      height: 100%;
      position: absolute;
      top: 0;
      width: 100%
    }

    &_header {
      display: flex;
      justify-content: space-between;
      padding: 0 30px;
      background: #42b983;
      margin-bottom: 40px
    }

    &_close {
      height: 30px;
      width: 30px;
      margin-top: 25px;
      cursor: pointer;
      border: none
    }
  }
.small {
  width: 400px;
}
.medium {
  width: 600px
}
.large {
  width: 800px;
}
</style>

