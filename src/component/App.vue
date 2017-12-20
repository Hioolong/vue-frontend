<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    // 导入页面头部和脚部组件
    import appHeader from '../component/frame/Header.vue';
    import appFooter from '../component/frame/Footer.vue';

    export default {
        components:{
            appHeader:appHeader,
            appFooter:appFooter
        }
    }
</script>

<style scoped>

</style>