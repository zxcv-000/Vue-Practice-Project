<template>
  <div class="public-title">
    <p>好书推荐</p>
    <p>更多 ></p>
  </div>
</template>

<script>
  export default {
    name: "PlateTitle"
  };
</script>

<style lang="less" scoped>
  .public-title {
    display: flex;
    font-size: 62px;
    font-weight: 900;
    line-height: 220px;
    height: 220px;

    p:last-child {
      margin-left: 700px;
      font-size: 40px;
      font-weight: 700;
      vertical-align: middle;
      color: #3e5794;
    }
  }
</style>
