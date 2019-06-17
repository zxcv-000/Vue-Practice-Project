<template>
  <div class="fixBar">
    <i v-if="cartInfo" :class="[{focus:cartInfo.checked},'icon_select']" @click="changeAllSelect">全选</i>
    <div class="total" id="totalConfirmDiv">
      <div>
        <p>
          <span>总计：</span>
          <strong id="totalPrice" v-if="cartInfo">&yen;{{cartInfo.totalPrice}}</strong>
        </p>
      </div>
      <a href="javascript:;" class="buy buyJs">
        <span>去结算</span>
      </a>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "FixBar",
  computed: {
    ...mapState("cart", ["cartInfo"])
  },
  methods: {
    ...mapMutations("cart", ["modifyAllSelect", "changeSum"]),
    changeAllSelect() {
      this.modifyAllSelect();
      this.changeSum();
    }
  }
};
</script>

<style lang="less" scoped>
.fixBar {
  position: relative;
  height: 166px;
  background: #fff;
  display: flex;
  justify-content: space-between;

  .icon_select {
    position: relative;
    width: 133px;
    padding-top: 106px;
    font-size: 34px;
    text-align: center;
    height: 50px;
    color: #999;
  }

  .icon_select:after {
    content: "" !important;
    background: url("../../../static/img/cart/no_checked.png") center no-repeat;
    background-size: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 67px;
    height: 67px;
  }

  .focus::after {
    background-image: url("../../../static/img/cart/checked.png");
  }

  .total {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    height: 100%;
    justify-content: flex-end;

    div {
      display: flex;
      align-items: center;
      font-weight: 700;
      text-align: right;
      font-size: 53px;

      p {
        #totalPrice {
          color: #e93b3d;
        }
      }
    }

    a {
      background: #e4393c;
      padding: 50px 70px;
      color: #fff;
      margin-left: 67px;
      font-size: 60px;
      display: flex;
      align-items: center;

      span {
        font-weight: 700;
      }

      em {
        font-style: normal;
        font-size: 47px;
      }
    }
  }
}
</style>
