<template>
  <div class="home">
    <img src="../assets/logo.png" alt="logo" />
    <h1>Welcome to Vue {{ version }}!</h1>
    <button @click="handleCommitStore">Clicked {{ count }} times.</button>
    <SubHome msg="hello sub home" :ipt="inputValue" />
    <pre>
      <input type="text" v-model="inputValue">
      <!-- 没有过滤器啦 -->
      inputValue with capitalize: {{ capitalize(inputValue) }}
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
  onBeforeMount,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeUnmount
} from "vue";
import { useStore } from "vuex";

import { capitalize } from "@/utils";

import SubHome from "@/components/SubHome.vue";
import VueSlot from "@/components/Slot.vue";

export default defineComponent({
  name: "Home",
  setup() {
    onBeforeMount((): void => {
      console.log("home beforeMount");
    });

    onMounted((): void => {
      console.log("home has mounted");
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

    const inputValue = ref();
    inputValue.value = "knorien";

    const store = useStore();
    const count = computed((): number => store.state.count);
    const handleCommitStore = (): void => {
      store.commit("increment");
    };

    watch(
      () => store.state.count,
      (val, oldVal) => {
        console.log(val, oldVal);
      }
    );

    return {
      version,
      store,
      inputValue,
      count,
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
    console.log("home before create");
  },
  created(): void {
    console.log("home has created");
  }
});
</script>

<style lang="scss" scoped></style>
