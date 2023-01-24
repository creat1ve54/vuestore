import axios from "axios"
import VueX from "vuex"


const store = new VueX.Store({
    state: {
        product: [],
        newProduct: [],
    },
    mutations: {
        SET_PRODUCT_TO_STATE: (state, product) => {
            state.product = product
        },
        SET_NEW_PRODUCT: (state, product) => {
            for (let i = 0; i < product.length; i++) {
                if (i < 8) {
                    state.newProduct?.push(product[i])
                }
            }
        }
    },
    actions: {
        GET_PRODUCT_FROM_API({ commit }) {
            return axios('http://localhost:3000/product', {
                method: "GET"
            })
                .then((product) => {
                    commit("SET_PRODUCT_TO_STATE", product.data);
                    commit('SET_NEW_PRODUCT', product.data);
                    return product;
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        },

    },
    getters: {
        PRODUCT(state) {
            return state.product
        },
        NEW_PRODUCT(state) {
            return state.newProduct
        },
    }
})

export default store;