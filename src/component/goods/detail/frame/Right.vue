<template>
    <!--页面右边-->
    <div class="left-220">
        <div class="bg-wrap nobg">
            <div class="sidebar-box">
                <h4>推荐商品</h4>
                <ul class="side-img-list">

                    <li v-for="(item,i) in hotgoodslist" :key="item.id">
                        <div class="img-box">
                            <router-link :to="{name:'gd',params:{id:item.id}}">
                                <label>{{ i + 1 }}</label>
                                <img :src="item.img_url">
                            </router-link>
                        </div>
                        <div class="txt-box">
                            <router-link :to="{name:'gd',params:{id:item.id}}">{{ item.title }}</router-link>
                            <span>{{ item.add_time | date }}</span>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </div>
    <!--/页面右边-->
</template>

<script>
export default {
  props: ["hotgoodslist"]
};
</script>

<style scoped>

</style>