<template>
  <div class="shopList">
    <ul>
      <li>
        <img src="./img/1.jpg" alt="" />
        <div class="info">
          <p>
            <span>品牌</span>
            <span class="ellipsis">嘉禾一品(温都水城)</span>
          </p>
          <p>
            <span>4.7</span>
            <span>月售106单</span>
          </p>
          <p>
            <span>￥20起送 / 配送费约￥5</span>
          </p>
        </div>
        <div class="prove">
          <span>保准票</span>
          <span>硅谷专送</span>
        </div>
      </li>
      <li>
        <img src="./img/2.jpg" alt="" />
        <div class="info">
          <p>
            <span>品牌</span>
            <span>嘉禾一品(温都水城)</span>
          </p>
          <p>
            <span>4.7</span>
            <span>月售106单</span>
          </p>
          <p>
            <span>￥20起送 / 配送费约￥5</span>
          </p>
        </div>
        <div class="prove">
          <span>保准票</span>
          <span>硅谷专送</span>
        </div>
      </li>
      <li>
        <img src="./img/3.jpg" alt="" />
        <div class="info">
          <p>
            <span>品牌</span>
            <span>嘉禾一品(温都水城)</span>
          </p>
          <p>
            <span>4.7</span>
            <span>月售106单</span>
          </p>
          <p>
            <span>￥20起送 / 配送费约￥5</span>
          </p>
        </div>
        <div class="prove">
          <span>保准票</span>
          <span>硅谷专送</span>
        </div>
      </li>
      <li>
        <img src="./img/4.jpg" alt="" />
        <div class="info">
          <p>
            <span>品牌</span>
            <span>嘉禾一品(温都水城)</span>
          </p>
          <p>
            <span>4.7</span>
            <span>月售106单</span>
          </p>
          <p>
            <span>￥20起送 / 配送费约￥5</span>
          </p>
        </div>
        <div class="prove">
          <span>保准票</span>
          <span>硅谷专送</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.shopList{
    ul{
      display: flex;
      flex-direction: column;
      li{
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid #F9F9F9;
        img{
          width: 80px;
          height: 80px;
        }
        .info{
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 10px;
          p:nth-of-type(1){
            display: flex;
            span:first-child{
              font-weight: 600;
              font-size: 12px;
              background-color: #E3C230;
              margin-right: 10px;
              width: 30px;
              height: 20px;
              line-height: 20px;
              text-align: center;
            }
            span:last-child{
              font-weight: 600;
              font-size: 16px;
              color: #595959;
              width: 140px;
            }
          }
          p:nth-of-type(2){
            span:first-child{
              font-size: 14x;
              margin-right: 10px;
              color: #FF7B2D;
            }
            span:nth-of-type(2){
              font-size: 12px;
              color: #595959;
            }
          }
          p:nth-of-type(3){
            span{
              color: #595959;
              font-size: 12px;
            }
          }
        }
        .prove{
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 80px;
          span:first-child{
            color: #999;
            letter-spacing: 5px;
          }
          span:last-child{
            color: #02A774;
            font-size: 12px;
            margin-top: 20px;
            border: 1px solid #02A774;
          }
        }
      }
    }
}
</style>