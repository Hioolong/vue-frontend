import VueRouter from 'vue-router'

// 导入商品组件
import GoodsComponent from '../component/goods/Goods.vue';
import GoodsDetailComponent from '../component/goods/Detail.vue';

// 向外导出一个路由配置对象
export default new VueRouter({
    routes: [
        { path: '/', redirect:'/goods' },
        { path: '/goods', component: GoodsComponent},
        { path: '/goods/detail/:id', component: GoodsDetailComponent}, 
    ]
});