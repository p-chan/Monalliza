<style lang="stylus" scoped>
  .controller
    position absolute
    display flex
    top 9px
    left 7px

  .btn
    -webkit-app-region no-drag
    width 12px
    height 12px
    margin 4px
    background-color transparent
    background-size 12px 48px
    background-position 0 0
    border none
    &--close
      background-image url(../assets/images/close.png)
    &--minimize
      background-image url(../assets/images/minimize.png)
    &--maximize
      background-image url(../assets/images/maximize.png)
    &--blur
      background-position 0 12px!important
    &:active
      background-position 0 24px!important
    &--hover
      background-position 0 36px
    &:focus
      outline 0
</style>

<template>
  <div @mouseover="onController" @mouseout="outController"  class="controller">
    <button @click="clickClose" :class="{ 'btn--hover': isOnController }" class="btn btn--close"></button>
    <button @click="clickMinimize" :class="{ 'btn--hover': isOnController }" class="btn btn--minimize"></button>
    <button @click="clickMaximize" :class="{ 'btn--hover': isOnController }" class="btn btn--maximize"></button>
  </div>
</template>

<script>
const ipc = window.require("electron").ipcRenderer

export default {
  data () {
    return {
      isOnController: false
    }
  },
  methods: {
    onController: function() {
      this.isOnController = true;
    },
    outController: function() {
      this.isOnController = false;
    },
    clickClose: function() {
      ipc.send('close');
    },
    clickMinimize: function() {
      ipc.send('minimize');
    },
    clickMaximize: function() {
      ipc.send('maximize');
    }
  }
}
</script>
