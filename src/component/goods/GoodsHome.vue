<template>
    <div class="goods">
        <app-breadcrumb></app-breadcrumb>
        <app-top></app-top>
        <app-list></app-list>
    </div>
</template>

<script>
    // 导入子组件
    import GoodsTopComponent from './frame/Top.vue';
    import GoodsListComponent from './frame/List.vue';
    import GoodsBreadcrumbComponent from './frame/breadcrumb.vue';
    export default {
        // 注册商品页面子组件
        components:{
            appTop:GoodsTopComponent,
            appList:GoodsListComponent,
            appBreadcrumb:GoodsBreadcrumbComponent
        }
    }
</script>

<style scoped lang='less'>
    .goods{
        width:1160px;
        margin: 0 auto;
        
    }
</style>