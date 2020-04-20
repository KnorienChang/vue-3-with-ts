<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
export default defineComponent({
  name: "SubHome",
  props: {
    msg: {
      type: String,
      default: ""
    },
    ipt: {
      type: String,
      required: true
    }
  },
  setup(props) {
    console.log(`sub home props:`, props);
    watch(
      () => props.ipt,
      ipt => {
        console.log(ipt);
      }
    );
  }
});
</script>
