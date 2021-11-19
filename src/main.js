import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
new Vue({
    store,
    render: h => h(App),
}).$mount('#app')