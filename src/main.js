import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

// import VueCarousel from 'vue-carousel';
// Vue.use(VueCarousel);

axios.defaults.baseURL = 'https://sara-9a2c8.firebaseio.com'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
    console.log('Request Interceptor', config)
    return config
})
const resInterceptor = axios.interceptors.response.use(res => {
    console.log('Response Interceptor', res)
    return res
})

Vue.config.productionTip = false

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})