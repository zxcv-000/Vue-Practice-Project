<template>
  <div id="cart">
    <Title></Title>
    <div id="main">
      <Shop>
        <template v-slot:product="products">
          <Product :data="products.data"></Product>
        </template>
      </Shop>
    </div>
    <FixBar></FixBar>
  </div>
</template>

<script>
import Title from "./Title";
import Shop from "./Shop";
import Product from "./Product";
import FixBar from "./FixBar";

import { mapActions } from "vuex";

export default {
  name: "Cart",
  components: {
    Title,
    Shop,
    Product,
    FixBar
  },
  created() {
    this.getData("http://localhost:3000/cartInfo");
  },
  methods: {
    ...mapActions("cart", {
      getData: "getInfo"
    })
  }
};
</script>

<style lang="less" scoped>
#cart {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: #f7f7f7;

  #main {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>

