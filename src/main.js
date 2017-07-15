// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueFire from 'vuefire'
import Firebase from 'firebase'
var firebase = require('firebase');
import config from './firebase.config';

// explicit installation required in module environments
Vue.use(VueFire)
Vue.use(VueMaterial)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.$router.push('/home')
        } else {
            this.$router.push('/login')
        }
    });
  }
})
