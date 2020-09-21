<template>
  <div class="home">
    <img src="../assets/logo.png" alt="logo" />
    <h1>Welcome to Vue {{ version }}!</h1>
    <button @click="handleCommitStore">Clicked {{ state.count }} times.</button>
    <SubHome msg="hello sub home" :ipt="state.inputValue" />
    <pre>
      <input type="text" v-model="state.inputValue" />
      <!-- 没有过滤器啦 -->
      inputValue with capitalize: {{ capitalize(state.inputValue) }}
    </pre>
    <vue-slot
      :user="{
        name: 'knorien ----- test slot',
        n: 10,
      }"
    >
      <template #slotUser="{ user }"
        >{{ user.name }} ------ {{ user.n }}</template
      >
    </vue-slot>
  </div>
</template>

<script lang="ts">
import { version, computed, watch, reactive, watchEffect } from "vue";
import { store } from "@/store";

import { capitalize } from "@/utils";

import SubHome from "@/components/SubHome.vue";
import VueSlot from "@/components/Slot.vue";

export default {
  name: "Composition Api",
  setup(): unknown {
    const state = reactive({
      inputValue: "knorien",
      count: computed((): number => store.state.count),
    });

    const handleCommitStore = (): void => {
      store.commit("increment");
    };

    watch(
      () => store.state.count,
      (val, oldVal) => {
        console.log(val, oldVal);
      },
      {
        immediate: true,
        deep: true,
      }
    );

    watchEffect(() => {
      console.log("watchEffect", state.inputValue);
      console.log("watchEffect", store.state.count);
    });

    return {
      version,
      store,
      state,
      capitalize,
      handleCommitStore,
    };
  },
  components: {
    SubHome,
    VueSlot,
  },
};
</script>
