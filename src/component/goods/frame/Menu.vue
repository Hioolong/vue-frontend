<template>
    <p>
        <router-link v-for="item in menu" :key="item.id" :to="{name:'gd',params:{id:item.id}}">
            {{ item.title }}
             <app-menu v-if="item.subcates && item.subcates.length!=0" :menu='item.subcates'></app-menu>
        </router-link>
    </p>
</template>

<script>
    export default {
        // name属性可以让组件在自己组件使用，实现递归
        name:'app-menu',
        // 接收父组件传过来的数据
        props:['menu']
    }
</script>

<style scoped>

</style>