<template>
    <div class="section">
        <div v-for="item in goodsgroup" :key="item.id">
            <!--子类-->
            <div class="main-tit">
                <h2>{{ item.catetitle }}</h2>
                <p>
                    <a href="/goods/43.html" v-for="childitem in item.datas" :key="childitem.id">{{ childitem.cateTitle }}</a>
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <!--/子类-->
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">

                        <li v-for="childitem in item.datas" :key="childitem.id">
                            <a href="/goods/show-91.html">
                                <div class="img-box">
                                    <img :src="childitem.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{childitem.artTitle}}</h3>
                                    <p class="price">
                                        <b>¥{{childitem.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{childitem.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{childitem.markit_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            goodsgroup:[]
        }
    },
    methods: {
       getgoodsgroup(){
           this.$http.get(this.$api.goodsContent).then(res => {
               console.log(res.data);
               this.goodsgroup = res.data.message;
           })
                
       }
    },
    created(){
        this.getgoodsgroup();
    }
};
</script>

<style scoped>

</style>