<style lang="stylus">
  body
    background-color #fff
</style>

<template>
  <div id="app">
    <toolbar></toolbar>
    {{ msg }}
  </div>
</template>

<script>
import toolbar from './components/toolbar.vue';

export default {
  data () {
    return {
      msg: 'Hello from Vue.js'
    }
  },
  components: {
    toolbar
  }
}
</script>
