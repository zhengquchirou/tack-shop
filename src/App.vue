<template>
  <div id="app">
    <router-view></router-view>
    <FooterNav v-show="$route.meta.showFooter"></FooterNav>
  </div>
</template>
<script>
import FooterNav from './components/FooterNav/FooterNav.vue'

export default {
  components:{FooterNav}
}
</script>
<style lang="scss">
#app{
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>
