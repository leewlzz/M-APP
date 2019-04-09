<template>
  <div id="app">
    <router-view></router-view>
    <app-tabs></app-tabs>
  </div>
</template>

<script>
import Tab from './components/Tabs';
export default {
  components:{
    [Tab.name]:Tab
  }
}
</script>

<style>
#app{
  overflow: hidden;
  height: 100%;
  width: 100%;
}
</style>
