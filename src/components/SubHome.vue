<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import { SetupContext, watch } from "vue";
export default {
  name: "SubHome",
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
    console.log(`sub home props:`, props);
    watch(
      () => props.ipt,
      (ipt) => {
        console.log(ipt);
      }
    );
  },
};
</script>
