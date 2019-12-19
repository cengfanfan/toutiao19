import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入elemenUI样式
import './styles/index.less'
import ElementUI from 'element-ui'
import axios from 'axios'

Vue.prototype.$axios=axios
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
