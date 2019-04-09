<template>
<nav class="tabs border-top">
    <li class="tab">
        <router-link to='/home'>
            <i></i>
            <span>首页</span>
        </router-link>
    </li>
    <li class="tab">
        <router-link to='/category'>
            <i></i>
            <span>分类</span>
        </router-link>
    </li>
    <li class="tab">
        <router-link to='/cart'>
            <i></i>
            <span>购物车</span>
        </router-link>
    </li>
    <li class="tab">
        <router-link to='/mine'>
            <i></i>
            <span>我的</span>
        </router-link>
    </li>
</nav>
</template>

<script>
export default {
    name:'app-tabs'
}
</script>

<style lang="scss" scoped>
.tabs{
    width: 100%;
    position: absolute;
    left: 0;
    height: 49px;
    background: #fff;
    bottom: 0;
    display: flex;
    .tab{
        flex:25%;
    }
    a{
        display: block;
        text-align: center;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        width: 100%;
        i{
            display: block;
            width: 23px;
            height: 23px;
            background:url(/images/home.png) center no-repeat;
            background-size: 100%;
            margin: 5px auto;
        }
        span{
            display: block;
            color:#999;
        }
        &.router-link-active span{
            color: #ff6700;
        }
    }
    .tab:nth-of-type(1){
        a i{
            background:url(/images/home.png) center no-repeat;
            background-size: 100%;
        }
        a.router-link-active i{
            background:url(/images/home.n.png) center no-repeat;
            background-size: 100%;
        }
    }
    .tab:nth-of-type(2){
        a i{
            background:url(/images/category.png) center no-repeat;
            background-size: 100%;
        }
        a.router-link-active i{
            background:url(/images/category.n.png) center no-repeat;
            background-size: 100%;
        }
    }
    .tab:nth-of-type(3){
        a i{
            background:url(/images/cart.png) center no-repeat;
            background-size: 100%;
        }
        a.router-link-active i{
            background:url(/images/cart.n.png) center no-repeat;
            background-size: 100%;
        }
    }
    .tab:nth-of-type(4){
        a i{
            background:url(/images/mine.png) center no-repeat;
            background-size: 100%;
        }
        a.router-link-active i{
            background:url(/images/mine.n.png) center no-repeat;
            background-size: 100%;
        }
    }
}
</style>

