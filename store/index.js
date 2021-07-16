import Vue from 'vue'
import app from './app.js'
import user from './user.js'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
	  app,
	  user
	},
	state: {},
	mutations: {},
	action: {}
})

export default store
