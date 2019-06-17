<template>
  <div>
    <div class="product-item" v-for="(item,index) in data.data">
      <div class="goods">
        <div :class="[{focus:item.checked},'icon_select']" @click="changeSelect(index)"></div>
        <img :src="item.pic">
        <div class="content">
          <div class="name">
            <span class="proNameJs">{{item.title}}</span>
          </div>
          <div class="goods_line">
            <p class="price">
              <span class="priceJs">
                <i>&yen;</i>
                <em class="int">{{item.price}}</em>
              </span>
            </p>
            <div class="num_and_more">
              <div class="num_wrap">
                <span class="minus disabled" @click="cut(item,index)">-</span>
                <div class="input_wrap">
                  <input class="num" type="tel" v-model="item.num" max="200" disabled>
                </div>
                <span class="plus" @click="add(item,index)">+</span>
              </div>
            </div>
          </div>
          <div class="goods_sub_line">
            <span class="m_action_item">移入关注</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  name: "Product",
  props: ["data"],
  // computed: {
  //   ...mapState("cart", ['cartInfo'])
  // },
  created() {
    this.changeSum();
  },
  methods: {
    ...mapMutations("cart", [
      "cutNum",
      "addNum",
      "changeSum",
      "modifySelect",
      "changeShopSelect",
      "changeAllSelect"
    ]),

    cut(item, product_id) {
      if (item.num > 1) {
        this.cutNum({ shop_id: this.data.shop_id, product_id });
        if (item.checked) {
          this.changeSum();
        }
      } else {
        alert("商品数量不能小于1");
      }
    },
    add(item, product_id) {
      if (item.num < 10) {
        this.addNum({ shop_id: this.data.shop_id, product_id });
        if (item.checked) {
          this.changeSum();
        }
      } else {
        alert("商品数量不能大于10");
      }
    },
    // cut(item,index) {
    //   item.num--;
    //  console.log(this.$store.state.cart.cartInfo.shops[0].products[0].num)
    // }
    changeSelect(product_id) {
      this.modifySelect({ shop_id: this.data.shop_id, product_id });
      this.changeShopSelect(this.data.shop_id);
      this.changeAllSelect();
      this.changeSum();
    }
  }
};
</script>

<style lang="less" scoped>
.product-item:before {
  display: block;
  height: 1px;
  content: "";
  position: absolute;
  z-index: 1;
  pointer-events: none;
  background-color: #f6f6f6;
  right: 0;
  top: 0;
  left: 10px;
}

.product-item:first-of-type:before {
  height: 0;
}

.product-item {
  position: relative;

  .goods {
    position: relative;
    min-height: 249px;
    padding: 17px 0 50px 424px;
    background: #fff;

    .icon_select {
      position: absolute;
      left: 0;
      width: 209px;
      height: 100%;
    }

    .icon_select:after {
      content: "" !important;
      background: url("../../../static/img/cart/no_checked.png") center
        no-repeat;
      background-size: 100%;
      position: absolute;
      top: 12%;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      width: 67px;
      height: 67px;
      margin-left: -33px;
    }

    .focus:after {
      background-image: url("../../../static/img/cart/checked.png");
    }

    img {
      position: absolute;
      left: 143px;
      top: 17px;
      display: block;
      width: 249px;
      height: 249px;
    }

    .content {
      margin-left: 20px;

      .name {
        font-size: 44px;
        line-height: 60px;
        padding-right: 34px;
        margin-bottom: 17px;
        word-break: break-all;
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .goods_line {
        margin: 30px 50px 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .price {
          .priceJs {
            flex: 1;
            height: 40px;
            color: #e93b3d;
            font-size: 40px;
            display: flex;

            i {
              font-style: normal;
              line-height: 53px;
            }

            .int {
              line-height: 47px;
              font-size: 53px;
              font-style: normal;
            }
          }
        }

        .num_and_more {
          .num_wrap {
            display: flex;

            .minus,
            .plus {
              display: inline-block;
              width: 100px;
              height: 100px;
              background: #f7f7f7;
              line-height: 100px;
              text-align: center;
              font-size: 67px;
            }

            .input_wrap {
              display: flex;

              .num {
                color: #e93b3d;
                border: none;
                text-align: center;
                background: #f7f7f7;
                border-left: 1px solid #fff;
                border-right: 1px solid #fff;
                font-size: 40px;
                width: 150px;
                height: 100px;
                outline: none;
              }
            }
          }
        }
      }

      .goods_sub_line {
        position: relative;
        margin: 40px 80px 0 0;
        height: 40px;
        display: flex;
        font-size: 38px;
        color: #999;
        justify-content: flex-end;

        span:first-of-type {
          margin-right: 50px;
        }
      }
    }
  }
}
</style>
