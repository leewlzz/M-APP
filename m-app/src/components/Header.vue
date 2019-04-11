<template>
    <header class="app-header">
        <span class="back" v-if="hasBackBtn">
            <van-icon name="arrow-left" @click="backAction"></van-icon>
        </span>
        <p class="title">{{title}}</p>
        <span class="search">
            {{search}}
            <van-icon class="search-icon" name="search" v-if="hasSearchIcon"></van-icon>
        </span>
    </header>
</template>

<script>
export default {
    name: 'app-header',
    props: {
        title: {
            type: String,
            default: '小米'
        },
        search: {
            type: String,
            default: ''
        },
        hasBackBtn: {
            type: Boolean,
            default: true
        },
        hasSearchIcon: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        backAction() {
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" scoped>
.app-header {
    width: 100%;
    height: 44px;
    position: absolute;
    left: 0;
    top: 0;
    background: #f2f2f2;
    color: #666;
    .title {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 44px;
        font-size: 16px;
    }
    .back {
        width: 44px;
        height: 44px;
        text-align: center;
        line-height: 44px;
        position: absolute;
        left: 0;
        top: 0;
        font-size: 20px;
    }
    .search {
        line-height: 44px;
        position: absolute;
        right: 5px;
        top: 0;
        font-size: 14px;
        color: #ff6700;
        .search-icon {
            width: 44px;
            height: 44px;
            text-align: center;
            line-height: 44px;
            font-size: 20px;
            color: #666;
        }
    }
}
</style>

