import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import {
	navTo,
	showToast
} from './utils/index.js'
Vue.config.productionTip = false

App.mpType = 'app'

// 挂载全局函数
Vue.prototype.$store = store
Vue.prototype.$toast = showToast
Vue.prototype.$navTo = navTo
// 实例化应用
const app = new Vue({
    ...App,
	store
})
app.$mount()
