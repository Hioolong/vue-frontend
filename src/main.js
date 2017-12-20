import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import appComponent from './component/App.vue';
import './css/style.css';
// 导入自定义过滤器插件
import filter from './filter/index.js';
// 启用Vue插件
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(filter);
// 导入路由配置对象
import router from './route/index.js';

// 导入axios 和 api_config,往Vue原型里注入axios和api_config
import api_config from './js/api_config.js';
import axios from './js/axios_config.js';
Vue.prototype.$api = api_config;
Vue.prototype.$http = axios;

new Vue({
    el:'#app',
    render(creatElement){
        return creatElement(appComponent);//渲染根组件
    },
    router     //es6简写  相当于 router:router 
})