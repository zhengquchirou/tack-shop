<template>
  <div class="login">
      <h2>硅谷外卖</h2>
      <div class="login-title">
          <span :class="{active: flag==true}" @click="flag=true">短信登录</span>
          <span :class="{active: flag==false}" @click="flag=false">密码登录</span>
      </div>
      <div class="login-content" v-show="flag">
          <div class="login-message">
            <input type="tel" placeholder="手机号">
            <button>获取验证码</button>
          </div>
          <div class="get_verification">
            <input type="tel" placeholder="验证码">
          </div>
          <p>
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
          </p>
      </div>
      <div class="login-content" v-show="!flag">
          <div class="login-message">
            <input type="tel" placeholder="手机/邮箱/用户名">
          </div>
          <div class="get_verification">
            <input type="password" placeholder="密码">
          </div>
          <div class="login-message">
            <input type="text" maxlength="4" placeholder="验证码">
            <img src="./img/captcha.svg" alt="">
          </div>
      </div>
      <div class="login-footer">
          <button>登录</button>
          <span>关于我们</span>
      </div>
      <i  class="iconfont icon-arrow-left" @click="$router.back()"></i>
  </div>
</template>

<script>
export default {
    data() {
        return {
            flag: true
        }
    },
}
</script>

<style lang='scss' scoped>
.login{
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
    margin-top: 100px;
    h2{
        font-size: 40px;
        font-weight: 600;
        color: #76b297;
    }
    .login-title{
        font-size: 600;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        width: 180px;
        span{
            font-weight: 600;
            height: 30px;
            line-height: 30px;
            color: #999;
        }
        .active{
            color: #76b297;
            border-bottom: 2px solid #76b297;
        }
    }
    .login-content{
        width: 250px;
        .login-message{
            position: relative;
            background-color: #76b297;
            margin-top: 10px;
            input{
                box-sizing: border-box;
                width: 100%;
                padding: 10px;
                border: #EAEAEA 1px solid;
            }
            button{
                position: absolute;
                right: 0;
                top: 10px;
                border: none;
                background: none;
                color: #ccc;
                border: none;
            }
            img{
                position: absolute;
                right: 0;
                top: 0;
                width: 120px;
            }
        }
        .get_verification{
            margin-top: 10px;
            position: relative;
            background-color: #76b297;
        }
        input{
            box-sizing: border-box;
            width: 100%;
            padding: 10px;
            border: #EAEAEA 1px solid;
        }
        p{
            font-size: 12px;
            color: #999;
            width: 260px;
            // text-align: center;
            margin-top: 10px;
            line-height: 20px;
            a{
                color: #76b297;
            }
        }
    }
    .login-footer{
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        align-items: center;
        button{
            width: 250px;
            padding: 10px 0;
            color: #fff;
            background-color: #4CD96F;
            border: none;
        }
        span{
            color: #999;
            font-size: 12px;
            margin-top: 16px;
        }
    }
    .icon-arrow-left{
        position: fixed;
        top: 10px;
        left: 20px;
        font-size: 20px;
        color: #999;
    }
}
</style>