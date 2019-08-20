import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './src/App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

// new Vue({
//     el: '#app',
//     render: h => h(App)
// })


new Vue({
    render: h => h(App),
}).$mount('#app')