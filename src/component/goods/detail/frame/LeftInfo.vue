<template>
    <!--商品信息-->
    <div class="goods-spec">
        <h1>{{ goodsinfo.title }}</h1>
        <p class="subtitle">{{ goodsinfo.sub_title }}</p>
        <div class="spec-box">
            <dl>
                <dt>货号</dt>
                <dd id="commodityGoodsNo">{{ goodsinfo.goods_no }}</dd>
            </dl>
            <dl>
                <dt>市场价</dt>
                <dd>
                    <s id="commodityMarketPrice">¥{{ goodsinfo.market_price }}</s>
                </dd>
            </dl>
            <dl>
                <dt>销售价</dt>
                <dd>
                    <em class="price" id="commoditySellPrice">¥{{ goodsinfo.sell_price }}</em>
                </dd>
            </dl>
        </div>

        <div class="spec-box">
            <dl>
                <dt>购买数量</dt>
                <dd>
                    <div class="stock-box">
                        <!-- elementUI的计数器 -->
                        <el-input-number v-model="shopCartNum" @change="handleChange" :min="0" :max="goodsinfo.stock_quantity" label="描述文字"></el-input-number>
                    </div>
                    <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">{{ goodsinfo.stock_quantity }}</em>件
                    </span>
                </dd>
            </dl>
            <dl>
                <dd>
                    <div class="btn-buy" id="buyButton">
                        <button class="buy">立即购买</button>
                        <button class="add" @click="shopcartAdd">加入购物车</button>
                    </div>
                </dd>
            </dl>
        </div>

    </div>
    <!--/商品信息-->
</template>

<script>
export default {
    props:['goodsinfo'],
    data() {
        return {
            shopCartNum: 1
        }
    },
    methods: {
        shopcartAdd() {
            console.log(111);
        },
        handleChange(){
            // 数字输入框数字改变触发的函数
        }
    },
};
</script>

<style scoped>

</style>