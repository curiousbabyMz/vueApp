import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        goodsList: []
    },
    getters: {
        goodsNumber: state => {
            return state.goodsList.length
        }
    },
    mutations: {
        addGoods(state, data) {
            state.goodsList.push(data);
        },
        deleteGoods(state, index) {
            state.goodsList.splice(index, 1);
        },
        updateGoods(state, data) {
            const { index, key, value } = data;
            state.goodsList[index][key] = value;
        }
    }
})