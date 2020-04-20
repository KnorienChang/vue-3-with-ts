<template>
  <div class="home">
    <img src="../assets/logo.png" alt="logo" />
    <h1>Welcome to Vue {{ version }}!</h1>
    <button @click="handleCommitStore">Clicked {{ state.count }} times.</button>
    <SubHome msg="hello sub home" :ipt="state.inputValue" />
    <pre>
      <input type="text" v-model="state.inputValue">
      <!-- 没有过滤器啦 -->
      inputValue with capitalize: {{ capitalize(state.inputValue) }}
    </pre>
    <vue-slot
      :user="{
        name: 'knorien ----- test slot'
      }"
    >
      <template #slotUser="{ user }">{{ user.name }}</template>
    </vue-slot>
  </div>
</template>

<script lang="ts">
import {
  version,
  defineComponent,
  ref,
  computed,
  watch,
  onRenderTracked,
  onRenderTriggered,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onUnmounted,
  onBeforeUnmount,
  reactive,
  watchEffect
} from "vue";
import { useStore } from "vuex";

import { capitalize } from "@/utils";

import SubHome from "@/components/SubHome.vue";
import VueSlot from "@/components/Slot.vue";

export default defineComponent({
  name: "Home",
  setup() {
    console.log("setup", Date.now());

    onBeforeMount((): void => {
      console.log("home beforeMount");
    });

    onMounted((): void => {
      console.log("home has mounted");
    });

    onBeforeUpdate((): void => {
      console.log("home before updated");
    });

    onUpdated((): void => {
      console.log("home has updated");
    });

    onBeforeUnmount((): void => {
      console.log("home before unmount");
    });

    onUnmounted((): void => {
      console.log("home unmounted");
    });

    const state = reactive({
      inputValue: "knorien",
      count: computed((): number => store.state.count)
    });

    const store = useStore();
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
        deep: true
      }
    );

    watchEffect(() => {
      console.log("watchEffect", state.inputValue);
      console.log("watchEffect", store.state.count);
    });

    onRenderTracked(e => {
      console.log("onRenderTracked", e);
    });

    onRenderTriggered(e => {
      console.log("onRenderTriggered", e);
    });

    return {
      version,
      store,
      state,
      capitalize,
      handleCommitStore
    };
  },
  components: {
    SubHome,
    VueSlot
  },
  directives: {},
  beforeCreate(): void {
    console.log("before created", Date.now());
    console.log("home before create");
  },
  created(): void {
    console.log("home has created");
  }
});
</script>

<style lang="scss" scoped></style>
