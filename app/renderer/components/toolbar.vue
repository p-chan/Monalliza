<style lang="stylus" scoped>
  .toolbar
    -webkit-user-select none
    -webkit-app-region drag
    position relative
    height 37px
    border-bottom 1px solid #bbbbbb
    background-image -webkit-linear-gradient(#ececec 0%, #ececec 1.9%, #e9e9e9 2%, #d2d2d2 100%)
</style>

<template>
  <div class="toolbar">
    <window-controller></window-controller>
  </div>
</template>

<script>
import windowController from './window-controller.vue';

export default {
  data () {
    return {
      isControllerBtnMouseover: false
    }
  },
  methods: {
    onWindowController: function()
      this.isControllerBtnMouseover = true;
    },
    outWindowController: function() {
      this.isControllerBtnMouseover = false;
    }
  },
  components: {
    windowController
  }
}
</script>
