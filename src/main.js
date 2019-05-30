// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
<<<<<<< HEAD
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
=======
>>>>>>> 069b800fa9695265b03f70f7edd24051774c331d
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'

<<<<<<< HEAD
Vue.use(ElementUI);


//引入清除默认样式
import '@/assets/css/reset.styl'




=======
Vue.use(ElementUI)
>>>>>>> 069b800fa9695265b03f70f7edd24051774c331d
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
