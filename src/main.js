import Vue from 'vue'
import App from './App.vue'
import Home from './session3/Home.vue'
import Vuelidate from 'vuelidate'
import Login from './session3/Login.vue'



Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  render: h => h(Login),
}).$mount('#app')
