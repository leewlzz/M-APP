<template>
    <div>
        <div class="page" id="cart">
            <top-bar></top-bar>
            <app-scroll>
                <div class="islogin border-top border-bottom">
                    <span class="prompt">登录后享受更多优惠</span>
                    <span class="login-enter">
                        去登录
                        <i class="iconfont icon-right"></i>
                    </span>
                </div>

                <div class="shop-guide">购物车还是空的 去逛逛</div>

                <div class="guessLike">
                    <p class="tab-title">猜你喜欢</p>
                    <p class="tab-sub">实时推荐你的心心念念</p>
                    <recom-list :list="recomListData"></recom-list>
                </div>
            </app-scroll>
        </div>
        
        <router-view></router-view>
    </div>
</template>

<script>
// 引入数据
import recomList from "../../data/recom_list.json";
console.log("请求的数据 : ", recomList.data);

import Topbar from "../../components/top-nav";
import GoodsList from "./children/goodsList.vue";
import Appscroll from "../../components/Scroll.vue";

export default {
    components: {
        [Topbar.name]: Topbar,
        [GoodsList.name]: GoodsList,
        [Appscroll.name]: Appscroll
    },
    data: function() {
        return {
            recomListData: recomList.data
        };
    },
    methods: {},
    mounted() {}
};
</script>

<style scoped lang='scss'>
#cart {
    background-color: #ebebeb;
    .scroll-wrap {
        position: absolute;
        top: 64px;
        left: 0;
        bottom: 49px;
        width: 100%;
        overflow: hidden;
        .islogin {
            height: 49px;
            background-color: #fff;
            margin-bottom: 10px;
            padding: 0 10px;
            box-sizing: border-box;
            line-height: 49px;
            display: flex;
            justify-content: space-between;
            .prompt {
                font-size: 14px;
            }
            .login-enter {
                color: #999;
                .icon-right {
                    position: relative;
                    top: 1px;
                }
            }
        }
        .shop-guide {
            margin: 20px 0;
            text-align: center;
        }
        .guessLike {
            text-align: center;
            background-color: #fff;
            .tab-title {
                padding-top: 10px;
                font-size: 14px;
                color: #ff6700;
            }
            .tab-sub {
                padding: 3px 0 10px 0;
                color: #999;
            }
        }
    }
}
</style>
