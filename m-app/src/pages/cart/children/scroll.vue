<template>
    <ly-tab v-model="selectedId" :items="items" :options="options"></ly-tab>
</template>

<script>
import Vue from "vue";
import LyTab from "ly-tab";
Vue.use(LyTab);

export default {
    name : 'scroll',
    data() {
        return {
            selectedId: 0,
            items: [
                { label: "首页" },
                { label: "推荐" },
                { label: "Android" },
                { label: "前端" },
                { label: "后端" },
                { label: "iOS" },
                { label: "产品" },
                { label: "人工智能" },
                { label: "设计" }
            ],
            options: {
                activeColor: "#ff6700"
            }
        };
    }
};
</script>

<style>
</style>
