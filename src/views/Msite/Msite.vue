<template>
  <div class="msite">
    <HeaderTop title="昌平区北七家洪福科技园(337省道北)">
      <template slot="left">
        <div>
          <i class="iconfont icon-31sousuo"></i>
        </div>
      </template>
      <template>
        <div slot="right">
          <p>
            <span>登录|</span>
            <span>注册</span>
          </p>
        </div>
      </template>
    </HeaderTop>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#02A774">
      <van-swipe-item>
        <ul>
          <li>
            <img src="./img/nav/1.jpg" alt="">
            <span>甜品饮品</span>
          </li>
          <li>
            <img src="./img/nav/2.jpg" alt="">
            <span>甜品饮品</span>
          </li>
          <li>
            <img src="./img/nav/3.jpg" alt="">
            <span>甜品饮品</span>
          </li>
          <li>
            <img src="./img/nav/4.jpg" alt="">
            <span>甜品饮品</span>
          </li>
          <li>
            <img src="./img/nav/5.jpg" alt="">
            <span>甜品饮品</span>
          </li>
          <li>
            <img src="./img/nav/3.jpg" alt="">
            <span>甜品饮品</span>
          </li>
          <li>
            <img src="./img/nav/4.jpg" alt="">
            <span>甜品饮品</span>
          </li>
          <li>
            <img src="./img/nav/5.jpg" alt="">
            <span>甜品饮品</span>
          </li>
        </ul>
      </van-swipe-item>
      <van-swipe-item>
        <ul>
          <li>
            <img src="./img/nav/1.jpg" alt="">
            <span>甜品饮品</span>
          </li>
          <li>
            <img src="./img/nav/2.jpg" alt="">
            <span>甜品饮品</span>
          </li>
          <li>
            <img src="./img/nav/3.jpg" alt="">
            <span>甜品饮品</span>
          </li>
          <li>
            <img src="./img/nav/4.jpg" alt="">
            <span>甜品饮品</span>
          </li>
          <li>
            <img src="./img/nav/5.jpg" alt="">
            <span>甜品饮品</span>
          </li>
          <li>
            <img src="./img/nav/3.jpg" alt="">
            <span>甜品饮品</span>
          </li>
          <li>
            <img src="./img/nav/4.jpg" alt="">
            <span>甜品饮品</span>
          </li>
          <li>
            <img src="./img/nav/5.jpg" alt="">
            <span>甜品饮品</span>
          </li>
        </ul>
      </van-swipe-item>
    </van-swipe>
    <div class="nearby">
      <p class="top">
        <i class="iconfont icon-xuanxiang"></i>
        <span>附近商家</span>
      </p>
      <ShopList></ShopList>
    </div>
  </div>
  
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {

  components:{HeaderTop,ShopList},
}
</script>

<style lang='scss'>
.msite{
  
  .van-swipe{
    .van-swipe-item{
      ul{
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        padding-bottom: 20px;
        li{
          width: 25%;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          background-color: #fff;
          img{
            width: 50px;
          }
          span{
            font-size: 14px;
            color: #C4C4C4;
          }
        }
      }
    }
  }
  .nearby{
    margin-top: 10px;
    background-color: #fff;
    padding: 10px;
    .top{
      color: #999;
      i{
        margin-right: 10px;
      }
    }
    
  }
}

</style>