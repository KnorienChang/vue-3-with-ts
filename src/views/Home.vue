<template>
  <div class="home">
    <img src="../assets/logo.png"  alt="logo"/>
    <h1>Welcome to Vue {{ version }}!</h1>
    <button @click="handleCommitStore">Clicked {{ count }} times.</button>
    <sub-home msg="hello sub home" />
    <pre>
      <input type="text" v-model="inputValue">
      <!-- 没有过滤器啦 -->
      inputValue with capitalize: {{ capitalize(inputValue) }}
    </pre>
    <vue-slot :user="{
        name: 'knorien ----- test slot'
    }">
      <template #slotUser="{ user }">{{ user.name }}</template>
    </vue-slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, version } from "vue";
import { useStore } from "vuex";
import SubHome from '@/components/SubHome.vue';
import VueSlot from '@/components/Slot.vue';
import { capitalize } from "@/utils";

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore();
    return { store };
  },
  data() {
    return {
      version,
      inputValue: 'knorien'
    }
  },
  components: {
    SubHome,
    VueSlot
  },
  computed: {
    count(): number {
      return this.store.state.count;
    }
  },
  watch: {
    count(val, oldVal) {
      console.log(val, oldVal);
    }
  },
  directives: {},
  beforeCreate(): void {
    console.log('home before create');
  },
  created(): void {
    console.log('home has created');
  },
  beforeMount(): void {
    console.log('home beforeMount');
  },
  mounted(): void {
    console.log('home has mounted');
  },
  updated(): void {
    console.log('home has updated');
  },
  beforeUnmount(): void {
    console.log('home before unmount');
  },
  unmounted(): void {
    console.log('home has unmounted');
  },
  methods: {
    handleCommitStore(): void {
      this.store.commit('increment');
    },
    capitalize
  }
});
</script>

<style lang="scss" scoped></style>
