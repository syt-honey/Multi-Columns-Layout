import Vue from 'vue';
import App from './App.vue';
import Grid from "../packages"; 

Vue.config.productionTip = false;

Vue.use(Grid);

new Vue({
  render: h => h(App),
}).$mount('#app')
