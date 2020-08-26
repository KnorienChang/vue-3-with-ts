<template>
  <h1>Welcome to Vue {{ version }}!</h1>
  <button @click="handleCommitStore">Clicked {{ count }} times.</button>
</template>

<script lang="ts">
import { version } from "vue";
import { store } from "@/store";
interface dataOptions {
  version: string;
}
export default {
  name: "Optional Api",
  data(): dataOptions {
    return {
      version,
    };
  },
  computed: {
    count(): number {
      return store.state?.count || 0;
    },
  },
  watch: {
    count(v: number, ov: number): void {
      console.log(ov, v);
    },
  },
  // https://v3.vuejs.org/api/options-lifecycle-hooks.html
  mounted(): void {
    console.log("optional api mounted");
  },
  methods: {
    handleCommitStore(): void {
      store.commit("increment");
    },
  },
};
</script>
