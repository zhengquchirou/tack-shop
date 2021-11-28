<template>
  <div>
    <div style="height:50px; background:#fff "></div>
    <div class="footer-nav">
      <router-link to="/msite" active-class="active">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/search" active-class="active">
        <i class="iconfont icon-sousuotianchong"></i>
        <span>搜索</span>
      </router-link>
      <router-link to="/order" active-class="active">
        <i class="iconfont icon-dingdan"></i>
        <span>订单</span>
      </router-link>
      <router-link to="/profile" active-class="active">
        <i class="iconfont icon-geren2" style="background: 'none'"></i>
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.footer-nav {
  border-top: 1px solid #ccc;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: center;
    .iconfont {
      font-size: 30px;
    }
    span {
      font-size: 12px;
    }
  }
  .active {
    color: #76b297;
  }
}
</style>