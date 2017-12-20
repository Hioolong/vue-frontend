import Vue from 'vue';
import VueRouter from 'vue-router';
import appComponent from './component/App.vue';
import './css/style.css';
// 启用路由
Vue.use(VueRouter);

// 导入路由配置对象
import router from './route/index.js';

new Vue({
    el:'#app',
    render(creatElement){
        return creatElement(appComponent);//渲染根组件
    },
    router     //es6简写  相当于 router:router 
})