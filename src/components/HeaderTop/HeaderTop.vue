<template>
  <div class="header">
      <slot name="left"></slot>
      <span class="title ellipsis">{{title}}</span>
      <slot name="right"></slot>
    </div>
</template>

<script>
export default {
    props:['title']
}
</script>

<style lang='scss' scoped>
.header{
    padding: 10px;
    background-color: #02A774;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    i{
      font-size: 20px;
    }
    .title{
      margin: 0 10px 0 30px;
      text-align: center;
      width: 100%;
      font-size: 20px;
      color: #EDF8F5;
    }
    p{
      font-size: 14px;
      color: #97DAC6;
      width: 60px;
    }
  }
</style>