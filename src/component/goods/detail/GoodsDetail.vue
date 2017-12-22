<template>
    <div>
        <app-bread-crumb></app-bread-crumb>
        <!-- 商品详情 -->
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <!--页面左边-->
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <!--商品图片-->
                            <div class="pic-box">
                                <app-left-img :imglist="goodsDetail.imglist" ></app-left-img>
                            </div>
                            <!--/商品图片-->

                            <!-- 商品信息 -->
                            <app-left-info :goodsinfo="goodsDetail.goodsinfo"></app-left-info>
                            <!-- /商品信息 -->
                        </div>

                        <div id="goodsTabs" class="goods-tab bg-wrap">

                            <el-tabs type="border-card">
                                <el-tab-pane label="图文信息">
                                    <!--选项内容-->
                                    <div class="tab-content entry" style="display:block;" v-html="goodsDetail.goodsinfo.content"></div>
                                </el-tab-pane>

                                <el-tab-pane label="商品评论">
                                    <div class="tab-content" style="display: block;">
                                        <!--网友评论-->
                                        <app-comment tablename="goods" :artid="id"></app-comment>
                                        <!--/网友评论-->
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                        </div>

                    </div>
                    <!--/页面左边-->

                    <!--页面右边-->
                    <app-right :hotgoodslist="goodsDetail.hotgoodslist"></app-right>
                    <!--/页面右边-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 导入组件
import breadCrumbComponent from './frame/Breadcrumb.vue';
import leftImgComponent from './frame/LeftImg.vue';
import leftInfoComponent from './frame/LeftInfo.vue';
import rightComponent from './frame/Right.vue';
import commentComponent from '../../common/Comment.vue';
export default {
    data() {
        return {
            id:this.$route.params.id,
            goodsDetail: {
                goodsinfo:{},
                imglist:[],
                hotgoodslist:[]
            }
        }
    },
    methods: {
        getGoodsDetail() {
            this.$http.get(this.$api.goodsDetail + this.id)
                .then(res => {
                    console.log(res.data);
                    this.goodsDetail = res.data.message;
                })
        }
    },
    // 如果同一个路由规则下批量的url发生变化，则不会触发路由跳转，但是$route对象可以记录到新的url参数等信息
    // 可以让页面右边推荐商品栏在被点击时进行页面刷新
    watch:{
        $route(){
            this.id = this.$route.params.id;
            this.getGoodsDetail();
        }
    },
    created(){
        this.getGoodsDetail();
    },
    // 注册组件
    components:{
        appBreadCrumb:breadCrumbComponent,
        appLeftImg:leftImgComponent,
        appLeftInfo:leftInfoComponent,
        appRight:rightComponent,
        appComment:commentComponent
    }
};
</script>

<style scoped>

</style>