// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDSsAjEi8r7QO7q7MEmz9IasOcBxApSCBY',
      authDomain: 'meetups-1635a.firebaseapp.com',
      databaseURL: 'https://meetups-1635a.firebaseio.com',
      projectId: 'meetups-1635a',
      storageBucket: 'meetups-1635a.appspot.com'
    })
  }
})
