import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入element-ui的文件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import './assets/css/index.css'
import './utils/request'
import vueSwiper from 'vue-awesome-swiper'
import "swiper/dist/css/swiper.css";

Vue.config.productionTip = false
Vue.use(ElementUI,vueSwiper)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
