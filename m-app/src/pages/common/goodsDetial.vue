<template>
    <div class="page" id="detial">
        <div class="topoption">
            <i class="iconfont icon-back" @click="goPrepage"></i>
            <i class="iconfont icon-like"></i>
        </div>
        <app-scroll>
            <div class="main-shaow">
                <van-swipe :autoplay="5000" indicator-color="white" class="banner">
                    <van-swipe-item class="item" v-for="(item,index) in goods.banner.galleryView" :key="index"><img :src="item" alt=""></van-swipe-item>
                </van-swipe>

                <div class="goodsInfo">
                    <p class="name">{{goods.name}}</p>
                    <p class="seo"><span>{{goods.seo.description}}</span> 
                        <span>{{goods.seo.keywords}}</span> 
                        <span>{{goods.seo.title}}</span> 
                    </p>
                </div>
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
            goods : state => state.goods.goodsDetail  && state.goods.goodsDetail
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
            .banner{
                width : 100%;
                .item{
                    img{
                        width: 100%;
                        display: block;
                        border: 0;
                    }
                }
            }
        }
        .goodsInfo{
            padding: 10px;
            box-sizing: border-box;
            background-color: #fff;
            .name{
                font-size: 16px;
                font-weight: bold;
                padding: 10px 0;
            }
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
