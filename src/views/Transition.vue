<template>
  <button v-on:click="show = !show">Toggle</button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</template>

<script lang="ts">
interface TransProp {
  show: boolean;
}

export default {
  name: "Transition",
  data(): TransProp {
    return {
      show: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
