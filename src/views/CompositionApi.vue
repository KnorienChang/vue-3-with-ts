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
      }"
    >
      <template #slotUser="{ user }">{{ user.name }}</template>
    </vue-slot>
  </div>
</template>

<script lang="ts">
import {
  version,
  computed,
  watch,
  reactive,
  watchEffect,
  ComputedRef,
} from "vue";
import { store } from "@/store";

import { capitalize } from "@/utils";

import SubHome from "@/components/SubHome.vue";
import VueSlot from "@/components/Slot.vue";

interface ReactiveProp {
  inputValue: string;
  count: ComputedRef<number> | number;
}

interface SetupProp {
  version: string;
  state: ReactiveProp;
  capitalize: (value: string) => string;
  handleCommitStore: () => void;
}

export default {
  name: "Composition Api",
  setup(): SetupProp {
    const state = reactive<ReactiveProp>({
      inputValue: "knorien",
      count: computed(() => store.state.count),
    });

    const handleCommitStore = (): void => {
      store.commit("increment");
    };

    watch(
      () => store.state.count,
      (val, oldVal): void => {
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
