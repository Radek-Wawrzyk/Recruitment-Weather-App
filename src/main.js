import Vue from 'vue'
import App from './App.vue'
import vSelect from 'vue-select'
import AmCharts from 'amcharts3'
import AmSerial from 'amcharts3/amcharts/serial'

Vue.component('v-select', vSelect);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
