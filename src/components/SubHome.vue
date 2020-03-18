<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'SubHome',
    props: {
      msg: {
        type: String,
        default: ''
      }
    }
  })
</script>
