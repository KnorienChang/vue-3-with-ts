<template>
  <slot name="slotUser" :user="user"></slot>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

interface PropUser {
  name: string;
  n: number;
}

export default defineComponent({
  props: {
    user: {
      type: Object,
      validator: (user: PropUser) => {
        // 传入的n === 10，所以此处会触发vue的警告，自定义验证prop user失败，仅仅作为类型检测，不影响程序运行
        return user?.n > 10;
      },
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
