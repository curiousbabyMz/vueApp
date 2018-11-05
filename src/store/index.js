import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        goodsList: localStorage['goodsList'] ? JSON.parse(localStorage.getItem('goodsList')) : [],
        ordersList: localStorage['ordersList'] ? JSON.parse(localStorage.getItem('ordersList')) : []
    },
    getters: {
        goodsNumber: state => {
            return state.goodsList.length
        }
    },
    mutations: {
        addGoods(state, data) {
            state.goodsList.push(data);
            localStorage.setItem("goodsList", JSON.stringify(state.goodsList));
        },
        deleteGoods(state, index) {
            state.goodsList.splice(index, 1);
            localStorage.setItem("goodsList", JSON.stringify(state.goodsList));
        },
        updateGoods(state, data) {
            const { index, key, value } = data;
            state.goodsList[index][key] = value;
            localStorage.setItem('goodsList', JSON.stringify(state.goodsList));
        },
        addOrder(state, data) {
            data.num = state.ordersList.length;
            state.ordersList.push(data);
            localStorage.setItem("ordersList", JSON.stringify(state.ordersList));
        }
    }
})