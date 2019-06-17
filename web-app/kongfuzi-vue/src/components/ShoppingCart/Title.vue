<template>
  <div class="header">
    <router-link :to="{name:'home'}" tag="div" class="header-back">
      <span></span>
    </router-link>
    <div class="header-title">购物车</div>
    <div class="header-btn">
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title"
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 180px;
  background: #fff;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  padding: 0px;
  .header-title {
    font-size: 53px;
  }
  .header-back,
  .header-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
  }
  .header-back span {
    display: inline-block;
    width: 67px;
    height: 67px;
    background: url("../../../static/img/item/back.png") no-repeat center;
    background-size: 100%;
  }

  .header-btn span {
    display: inline-block;
    width: 67px;
    height: 67px;
    background: url("../../../static/img/item/menu.png") no-repeat center;
    background-size: 100%;
  }
}
.header:after {
  content: "";
  position: absolute;
  z-index: 1;
  pointer-events: none;
  background-color: #f6f6f6;
  height: 20px;
  left: 0;
  right: 0;
  bottom: 0;
  transform: scaleY(0.5);
}
</style>
