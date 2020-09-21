<template>
  <slot name="slotUser" :user="user"></slot>
</template>

<script lang="ts">
import { watch } from "vue";

interface UserProp {
  name: string;
}

export default {
  props: {
    user: {
      type: Object,
      default: (): UserProp => ({
        name: "",
      }),
    },
  },
  setup(
    props: Readonly<{
      user: UserProp | unknown;
    }>
  ): void {
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
};
</script>
