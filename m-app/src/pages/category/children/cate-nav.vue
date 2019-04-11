<template>
    <app-scroll class="nav">
        <div v-for="i in 50" :key="i">{{i}}</div>
    </app-scroll>
</template>

<script>
export default {
    name: 'cate-nav',
    props: {
        navData: Array
    }
}
</script>

<style lang="scss" scoped>

</style>
