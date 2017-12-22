import VueRouter from 'vue-router'

// 导入商品组件
import GoodsComponent from '../component/goods/GoodsHome.vue';
import GoodsDetailComponent from '../component/goods/detail/GoodsDetail.vue';

// 向外导出一个路由配置对象
export default new VueRouter({
    routes: [
        { path: '/', redirect:'/goods' },
        { name:'g', path: '/goods', component: GoodsComponent},
        { name:'gd', path: '/goods/detail/:id', component: GoodsDetailComponent}, 
    ]
});