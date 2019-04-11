<template>
    <div id="category" class="page">
        <!-- 头部 -->
        <app-header :title="title"></app-header>
        <div class="content">
            <!-- 左边栏 -->
            <cate-nav :navData="navData"></cate-nav>
            <!-- 右边栏 -->
            <cate-menu></cate-menu>
        </div>
        <!-- <p v-for="item in navData" :key="item.category_id">{{item.category_name}}</p> -->
    </div>
</template>

<script>
import {mapState} from 'vuex'
import CateNav from './children/cate-nav'
import CateMenu from './children/cate-menu'
export default {
    components: {
        [CateNav.name]: CateNav,
        [CateMenu.name]: CateMenu
    },
    data() {
        return {
            title: '分类' 
        }
    },
    computed: {
        ...mapState({
            // 左边栏数据                                                                                                 
            navData: state => state.category.navData,
            // 右边栏数据
            menuData: state => state.category.menuData,
        })
    },
    created() {
        // 请求分类页面数据
        this.$store.dispatch('category/getCateDataAction')
    },
    mounted() {
        
    }
}
</script>

<style lang="scss" scoped>
#category {
    background: khaki;
    .content {
        position: absolute;
        top: 44px;
        bottom: 0;
        left: 0;
        display: flex;
        .nav {
            width: 80px;
        }
        .menu {
            flex: 1;
        }
    }
}
</style>
