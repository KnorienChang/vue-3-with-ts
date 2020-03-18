<template>
  <slot name="slotUser" :user="user"></slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface User {
  name: string | undefined
}

export default defineComponent({
  props: {
    user: {
      type: Object as User
    }
  }
})
</script>
