import Vue from 'vue'
import App from './App.vue'
import store from './store'

import currencyFilter from './filters/currency.filter'
import messagePlugin from './helpers/toast/message.plugin'

import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

Vue.filter('currency', currencyFilter)
Vue.use(messagePlugin)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
