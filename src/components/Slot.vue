<template>
  <slot name="slotUser" :user="user"></slot>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

export default defineComponent({
  props: {
    user: {
      type: Object,
    },
  },
  setup(props) {
    watch(
      () => props.user,
      (user) => {
        console.log("user: ---------", user);
      },
      {
        deep: true,
        immediate: true,
      }
    );
  },
});
</script>
