import Vue from 'vue';
import App from './App';
import router from './router';
import store from "./vuex/store"
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";
import VCharts from 'v-charts';
import api from "./api/index.js";
import Engine from "./config/Engine"
import GetScreen from "./config/GetScreen"

Vue.use(VCharts);
Vue.use(ElementUI, { size: 'small' });
Vue.prototype.$api = api;
Vue.prototype.$Engine = Engine;
Vue.prototype.$GetScreen = GetScreen;
new Vue({
    router,
    //store,
    render: h => h(App),
    store
}).$mount('#app');
