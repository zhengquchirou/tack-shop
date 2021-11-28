<template>
  <div class="profile">
      <HeaderTop title="我的"></HeaderTop>
      <div class="user">
        <i class="iconfont icon-geren"></i>
        <div class="user-info">
          <p>
            <router-link :to="{name:'login'}">
              <span>登录/</span>
              <span>注册</span>
            </router-link>
          </p>
          <p>
            <i class="iconfont icon-shouji"></i>
            <span>暂无绑定手机号</span>
          </p>
        </div>
        <i class="iconfont icon-arrow-right"></i>
      </div>
      <div class="count">
        <ul>  
          <li>
            <p><span>0.00</span>元</p>
            <p>我的余额</p>
          </li>
          <li>
            <p><span>0</span>个</p>
            <p>我的优惠</p>
          </li>
          <li>
            <p><span>0</span>分</p>
            <p>我的积分</p>
          </li>
        </ul>
      </div>
      <div class="options">
        <div>
          <i class="iconfont icon-dingdandanjuwenjian-2"></i>
          <p>我的订单</p>
          <i class="iconfont icon-arrow-right"></i>
        </div>
        <div>
          <i class="iconfont icon-dingdandanjuwenjian-2"></i>
          <p>我的订单</p>
          <i class="iconfont icon-arrow-right"></i>
        </div>
      </div>
      <div class="serve">
          <i class="iconfont icon-fuwutai"></i>
          <p>我的订单</p>
          <i class="iconfont icon-arrow-right"></i>
      </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
  components:{HeaderTop}
}
</script>

<style lang='scss' scoped>
.profile{
  overflow: hidden;
  background-color: #F5F5F5;
  .user{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background-color: #02A774;
    padding: 10px;
    color: #fff;
    margin-top: 1px;
    .icon-geren{
      font-size: 60px;
      width: 60px;
      height: 60px;
      overflow: hidden;
      border-radius: 50%;
      color: #7E8C8D;
      background-color: #E4E4E4;
    }
    .user-info{
      flex: 1;
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 20px;
      p:first-child{
        a{
          span{
            font-weight: 600;
            color: #fff;
          }
        }
      }
      p:last-child{
        i{
          vertical-align: middle;
          padding-right: 2px;
        }
        span{
          font-size: 14px;
        }
      }
    }
  }
  .count{
    ul{
      display: flex;
      background-color: #fff;
      li{
        flex: 1;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p:first-child{
          span{
            font-size: 30px;
            font-weight: 600;
          }
        }
        p:last-child{
          margin-top: 8px;
          font-size: 14px;
          color: #999;
        }
      }
      li:nth-of-type(1){
        span{
            color: #FF9900;
        }
      }
      li:nth-of-type(2){
        border-left: 1px solid #F5F5F5;
        border-right: 1px solid #F5F5F5;
        span{
            color: #FF5F3E;
        }
      }
      li:nth-of-type(3){
        span{
            color: #6CC30F;
        }
      }
    }
  }
  .options{
    padding: 10px;
    background-color: #fff;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      border-bottom: 1px solid #F5F5F5;
      .icon-dingdandanjuwenjian-2{
        color: #5CC6A5;
        margin-right: 10px;
      }
      p{
        flex: 1;
      }
    }
  }
  .serve{
    margin-top: 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #F5F5F5;
    height: 30px;
    .icon-fuwutai{
      color: #5CC6A5;
      margin-right: 10px;
    }
    p{
      flex: 1;
    }
  }
}
</style>