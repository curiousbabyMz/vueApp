import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        goodsList: []
    },
    mutations: {
        addGoods: (state, data) => {
            state.goodsList.push(data);
        }
    }
})