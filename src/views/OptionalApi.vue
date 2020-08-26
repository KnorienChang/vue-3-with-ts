<template>
  <h1>Welcome to Vue {{ version }}!</h1>
  <button @click="handleCommitStore">Clicked {{ count }} times.</button>
</template>

<script lang="ts">
import { version } from "vue";
import { store } from "@/store";
export default {
  name: "Optional Api",
  data() {
    return {
      version,
    };
  },
  computed: {
    count() {
      return store.state?.count || 0;
    },
  },
  watch: {
    count(v: number, ov: number) {
      console.log(ov, v);
    },
  },
  // https://v3.vuejs.org/api/options-lifecycle-hooks.html
  mounted() {
    console.log("optional api mounted");
  },
  methods: {
    handleCommitStore() {
      store.commit("increment");
    },
  },
};
</script>
