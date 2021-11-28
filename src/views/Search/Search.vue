<template>
  <div class="search">
    <HeaderTop title="搜索"></HeaderTop>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
Vue.use(Search);
export default {
  data() {
    return {
      value: "",
    };
  },
  components:{HeaderTop},
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
  },
};
</script>

<style lang='scss'>
.search{
  .van-search__action {
    div {
      background-color: #02A774;
      width: 50px;
      color: #fff;
      font-weight: 600;
      text-align: center;
    }
  }
}
</style>