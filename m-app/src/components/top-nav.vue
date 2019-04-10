<template>
    <header class="header">
        <i class="iconfont icon-back" @click='backPage'></i>
        <p class="page-title">购物车</p>
        <i class="iconfont icon-search"></i>
    </header>
</template>

<script>
export default {
    name : 'top-bar' ,
    methods : {
        backPage : function(){
            alert('back_pre_page');
        }
    }
}
</script>

<style scoped lang='scss'>
    .header{
        height: 44px;
        border-bottom: 1px solid #ddd;
        background-color: #fff;
        position: absolute;
        top : 0;
        left : 0;
        width : 100%;
        .iconfont{
            display: block;
            width : 44px;
            height: 44px;
            line-height: 44px;
            text-align : center;
            position: absolute;
            top : 0;
            font-size: 18px;
        }
        .icon-search{
            right : 0
        }
        .page-title{
            font-size: 16px;
            color : #666;
            line-height: 44px;
            text-align: center;
        }
    }
</style>
