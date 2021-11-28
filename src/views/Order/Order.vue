<template>
  <div class="order">
    <HeaderTop title="订单"></HeaderTop>
    <div class="no_login">
      <img src="./img/person.png" alt="">
      <h3>登录后查看外卖订单</h3>
      <button>立即登录</button>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
  components:{HeaderTop}
}
</script>

<style lang='scss'>
  .order{
    width: 100%;
    height: 100vh;
    .no_login{
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 100%;
        margin-top: 50px;
      }
      button{
        background-color: #02A774;
        border: none;
        padding: 10px;
        color: #fff;
        margin-top: 10px;
      }
    }
  }
</style>