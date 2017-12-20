<template>
    <div class="section">
        <div class="wrapper">
            <div class="wrap-box">
                <!--类别菜单-->
                <div class="left-220" style="margin:0;">
                    <div class="banner-nav">
                        <ul>
                            <!--此处声明下面可重复循环-->

                            <li v-for="item in topData.catelist" :key="item.id">
                                <h3>
                                    <i class="iconfont icon-arrow-right"></i>
                                    <span>{{ item.title }}</span>
                                    <p >
                                        <span v-for="subitem in item.subcates" :key="subitem.id">
                                            {{ subitem.title }}
                                        </span>
                                    </p>
                                </h3>
                                <div class="item-box">
                                    <!--如有三级分类，此处可循环-->
                                    <dl>
                                        <dt>
                                            <router-link :to="{name:'gd',params:{id:item.id}}">{{ item.title }}</router-link>
                                        </dt>
                                        <dd>
                                            <!-- 封装一个展示菜单列表的组件，需要把数据传过去 -->
                                            <app-menu :menu="item.subcates"></app-menu>
                                        </dd>
                                    </dl>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <!--/类别菜单-->

                <!--幻灯片-->
                <div class="left-705">
                    <div class="banner-img">
                        <el-carousel trigger="click" >
                            <el-carousel-item v-for="item in topData.sliderlist" :key="item.id">
                                <img :src="item.img_url" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <!--/幻灯片-->

                <!--推荐商品-->
                <div class="left-220">
                    <ul class="side-img-list">

                        <li v-for="(item,key) in topData.toplist" :key="item.id">
                            <div class="img-box">
                                <label>{{ key+1 }}</label>
                                <img :src="item.img_url">
                            </div>
                            <div class="txt-box">
                                <a href="/goods/show-98.html">{{ item.title }}</a>
                                <span>{{ item.add_time | date}}</span>
                            </div>
                        </li>

                    </ul>
                </div>
                <!--/推荐商品-->
            </div>
        </div>
    </div>
</template>

<script>
// 导入递归菜单组件
import GoodsMenuComponent from './Menu.vue';

export default {
    data() {
        return {
            topData:{
                catelist:[],
                sliderlist:[],
                toplist:[]
            }
        };
    },
    methods: {
        // 获取商品页面顶部数据
        getGoodsTop(){
            this.$http.get(this.$api.goodsTop).then(res => {
                // console.log(res.data);
                this.topData.catelist = res.data.message.catelist;
                this.topData.sliderlist = res.data.message.sliderlist;
                this.topData.toplist = res.data.message.toplist;
            })
        }
    },
    components:{
        appMenu:GoodsMenuComponent
    },
    created() {
        this.getGoodsTop();
        // console.log(this.topData);
    }
};
</script>

<style scoped>

</style>