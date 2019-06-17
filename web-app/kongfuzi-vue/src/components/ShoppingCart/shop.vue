<template>
  <div>
    <div v-if="shops" class="shop" v-for="(item,shop_id) in shops">
      <div class="shop-title-wrap">
        <div
          v-if="item"
          :class="[{focus:item.checked},'icon_select']"
          @click="changeShopSelect(shop_id)"
        ></div>
        <div class="shop-photo"></div>
        <div v-if="item" class="shop-title">{{item.shopName}}</div>
        <div class="notice">
          <i></i>
          <span>以免运费</span>
        </div>
      </div>
      <slot v-if="item" name="product" :data="{data:item.products,shop_id}"></slot>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Shop",
  computed: {
    ...mapState("cart", {
      shops: state => state.cartInfo.shops
    })
  },
  methods: {
    ...mapMutations("cart", [
      "modifyShopSelect",
      "changeAllSelect",
      "changeSum"
    ]),
    changeShopSelect(shop_id) {
      this.modifyShopSelect(shop_id);
      this.changeAllSelect();
      this.changeSum();
    }
  }
};
</script>

<style lang="less" scoped>
.shop {
  margin-bottom: 50px;

  .shop-title-wrap:before {
    content: "" !important;
    position: absolute;
    z-index: 1;
    pointer-events: none;
    background-color: #e5e5e5;
    height: 1px;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .shop-title-wrap {
    display: flex;
    align-items: center;
    height: 133px;
    padding: 17px 34px 17px 140px;
    position: relative;
    background: #fff;

    .icon_select {
      position: absolute;
      top: 0;
      left: 0;
      width: 140px;
      height: 100%;
    }

    .icon_select:after {
      background: url("../../../static/img/cart/no_checked.png") no-repeat
        center;
      background-size: 100%;
      top: 50%;
      transform: translate(0, -50%);
      position: absolute;
      left: 50%;
      content: "";
      display: block;
      width: 67px;
      height: 67px;
      margin-left: -38px;
    }

    .focus::after {
      background-image: url("../../../static/img/cart/checked.png");
    }

    .shop-photo {
      width: 67px;
      height: 67px;
      margin-right: 17px;
      background: url("../../../static/img/cart/cart.png") center no-repeat;
      background-size: 67px 67px;
    }

    .shop-title {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      box-sizing: border-box;
      display: inline-block;
      font-size: 53px;
      font-weight: 700;
      margin-right: 34px;
    }

    .notice {
      font-size: 40px;
      color: #999;
      height: 100%;
      display: flex;
      align-items: center;

      i {
        content: "";
        width: 40px;
        height: 40px;
        display: block;
        margin-right: 17px;
        background: url("../../../static/img/cart/hint.png") no-repeat;
        background-size: 40px auto;
      }
    }
  }
}
</style>
