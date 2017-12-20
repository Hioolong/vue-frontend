<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>当前位置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>购物商城</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
   
    }
</script>

<style scoped>
    .el-breadcrumb{
            padding: 18px 0; 
    }
</style>