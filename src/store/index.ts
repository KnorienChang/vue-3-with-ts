import { createStore } from 'vuex';

// Temporary type until Vuex 4 Alpha has Typescript support
interface State { count: number; }

const state: State = { count: 0 };

const mutations = {
  // tslint:disable-next-line:no-shadowed-variable
  increment(state: State) {
    state.count++;
  },
};

export const store = createStore({ state, mutations });
