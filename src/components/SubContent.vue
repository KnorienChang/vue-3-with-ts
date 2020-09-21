<template>
  <div>msg: {{ msg }}</div>
  <div>ipt: {{ ipt }}</div>
</template>

<script lang="ts">
import { watch, SetupContext } from "vue";
export default {
  name: "SubContent",
  props: {
    msg: {
      type: String,
      default: "",
    },
    ipt: {
      type: String,
      required: true,
    },
  },
  setup(
    props: Readonly<{
      msg: string;
      ipt: string;
    }>,
    context: SetupContext
  ): void {
    console.log(context);
    console.log(`sub content props:`, props);
    watch(
      () => props.ipt,
      (ipt) => {
        console.log(ipt);
      }
    );
  },
};
</script>
