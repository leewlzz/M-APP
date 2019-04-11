<template>
    <div class="scroll-wrap" ref="scroll">
        <div class="scroll">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    name: "app-scroll",
    mounted() {
        let scroll = new IScroll(this.$refs.scroll, {
            click: true,
            probeType: 3
        });
        // 刷新滚动视图
        scroll.on("scrollStart", () => {
            scroll.refresh();
        });
    }
};
</script>

<style>
.scroll-wrap {
    overflow: hidden;
}
</style>
