import Vue from 'vue'
import App from './App.vue'
import router from '@/router' // api: https://github.com/vuejs/vue-router
import store from '@/store' // api: https://github.com/vuejs/vuex
import httpRequest from '@/utils/httpRequest' // api: https://github.com/axios/axios
import './plugins' //http://element-cn.eleme.io/#/zh-CN/
import '@/assets/styles/reset.css' //样式重置表
Vue.config.productionTip = false
Vue.prototype.$http = httpRequest // ajax请求方法

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
