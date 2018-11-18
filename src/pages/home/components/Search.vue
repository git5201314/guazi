<template>
    <div class="header-search" id="open-search">
        <router-link to="/city" class="local-city">上海
          <span class="iconfont">&#xe62d;</span>
        </router-link>
        <div class="search-ipt">
          <!-- <span class="head-icon-search iconfont">&#xe61a;</span>
          搜索您要的车 -->
          <input type="text" placeholder="输入城市名称或拼音" />
        </div>
        <a href="javascript:void(0);" class="head-icon-im iconfont">&#xe641;</a>
        <a href="javascript:void(0);" class="head-icon-user iconfont">&#xe607;</a>
    </div>
</template>

<script>
export default {
  name: "HomeSearch"
};
</script>

<style lang="scss" scoped>
.header-search {
  position: absolute;
  top: 0.12rem;
  left: 0;
  z-index: 88;
  display: flex;
  width: 100%;
  line-height: 0.6rem;

  .local-city {
    padding-left: 0.3072rem;
    padding-right: 0.288rem;
    font-weight: 300;
    color: #fff;
    line-height: 0.614rem;
    font-size: 0.28rem;

    span {
      display: inline-block;
      width: 0.2rem;
      height: 0.2rem;
      font-size: 0.2rem;
      margin-left: 0.08rem;
      vertical-align: top;
    }
  }

  .search-ipt {
    flex: 1;
    line-height: 0.614rem;
    color: #bec5cf;
    background: #fff;
    text-align: center;
    border-radius: 0.4rem;
    font-size: 0.27rem;

    input {
      width: 90%;
      padding: 0 0.1rem;
      color: #666;
      border: none;
    }

    .head-icon-search {
      font-size: 0.27rem;
    }
  }

  .head-icon-im,
  .head-icon-user {
    color: #fff;
    font-size: 0.3rem;
  }

  .head-icon-user {
    font-size: 0.32rem;
  }

  .head-icon-im {
    padding: 0 0 0 0.2688rem;
  }

  .head-icon-user {
    padding: 0 0.3rem 0 0.26rem;
  }
}
</style>
