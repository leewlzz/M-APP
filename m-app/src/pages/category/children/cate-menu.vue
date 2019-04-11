<template>
    <app-scroll class="menu">
        <div v-for="i in 100" :key="i">{{i}}</div>
    </app-scroll>
</template>

<script>
export default {
    name: 'cate-menu'
}
</script>

<style lang="scss" scoped>

</style>

