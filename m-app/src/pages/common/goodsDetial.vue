<template>
    <div class="page" id="detial">
        <div class="topoption border-bottom">
            <i class="iconfont icon-back" @click="goPrepage"></i>
            <i class="iconfont icon-like"></i>
        </div>
        <app-scroll>
            <div class="main-shaow">
                <li v-for="i in 90" :key="i">商品详情</li>
            </div>
        </app-scroll>
        <div class="gobuy">
            <div class="nav-tab">
                <div class="left">
                    <div class="gohome"><i class="iconfont icon-homefill"></i><span>首页</span></div>
                    <div class="cart"><i class="iconfont icon-cartfill"></i><span>购物车</span></div>
                </div>
                <div class="addcart">添加到购物车</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    props: {
        goodsId: [Number, String]
    },
    components: {

    },
    methods: {
        // 点击返回按钮返回上一个页面
        goPrepage: function() {
            this.$router.back();
        }
    },
    computed :{
        ...mapState({
            // 返回获取到的数据
            goods : state => state.goods.goodsDetail  && goods.goodsDetail
        })
    },
    created() {
        // 请求商品详情数据
        this.$store.dispatch("goods/getDetialData", { id: this.goodsId });
    }
};
</script>




<style scoped lang='scss'>
#detial {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: #ebebeb;
    z-index: 10;
    .topoption {
        position: absolute;
        z-index: 6;
        top: 0;
        left: 0;
        width: 100%;
        height: 44px;
        line-height: 44px;
        display: flex;
        justify-content: space-between;
        padding: 5px 10px;
        box-sizing: border-box;
        .iconfont {
            width: 30px;
            height: 30px;
            font-size: 16px;
            font-weight: lighter;
            color: #fff;
            line-height: 30px;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.5);
            text-align: center;
        }
    }
    .scroll-wrap{
        width: 100%;
        position: absolute;
        top :0;
        bottom : 0;
        .main-shaow {
        
        }
    }
    .gobuy {
        position: absolute;
        bottom: 0;
        height: 55px;
        width: 100%;
        overflow: hidden;
        .nav-tab{
            background-color: #fff;
            padding: 0 10px;
            height: 50px;
            box-sizing: border-box;
            margin : 0 10px 5px 10px;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            color : #999;
            .left{
                display: flex;
                .gohome{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    margin-right: 20px;
                }
                .cart{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                }
            }
            .addcart{
                line-height: 26px;
                background-color: #ff6700;
                padding: 0 10px;
                height: 26px;
                color : #fff;
                margin-top : 12px;
                font-size: 12px;
                border-radius: 16px;
            }
        }
    }
}
</style>
