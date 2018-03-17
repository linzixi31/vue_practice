import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
	page:null,
	total:null
};
export default new Vuex.Store({
	state,
    modules: {
    }
})
