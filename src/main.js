// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import filters from './filters'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import AsyncComputed from 'vue-async-computed'

var firebase = require('firebase')

// explicit installation required in module environments
Vue.use(VueFire)
Vue.use(VueMaterial)
Vue.config.productionTip = false

Vue.use(AsyncComputed)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  filters: {
    test: function (a, b) {
        console.log('test');
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.$router.push('/')
        } else {
            this.$router.push('/login')
        }
    });
  }
})
