<template>
  <div>msg: {{ msg }}</div>
  <div>ipt: {{ ipt }}</div>
</template>

<script lang="ts">
import { watch, SetupContext } from "vue";
interface PropTypes {
  msg: string;
  ipt: string;
}
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
  setup(props: PropTypes, context: SetupContext): void {
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
