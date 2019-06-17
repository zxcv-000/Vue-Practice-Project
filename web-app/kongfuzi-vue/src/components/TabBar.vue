<template>
  <div class="tab-bar">
    <router-link
      :to="{name:item.name}"
      tag="div"
      class="tab-list"
      v-for="(item,index) in pageData"
      :key="item.id"
      @click.native="changeColor(index)"
    >
      <i :style="{background:'url('+item.i_url+')  center no-repeat'}"></i>
      <span :class="{active:currentIndex===index}">{{item.text}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      currentIndex: 0,
      pageData: [
        {
          name: "home",
          id: "1",
          i_url_one: "../../static/img/T-1.png",
          i_url_two: "../../static/img/T-2.png",
          i_url: "../../static/img/T-1.png",
          text: "首页"
        },
        {
          name: "detail",
          id: "2",
          i_url_one: "../../static/img/T-1.png",
          i_url_two: "../../static/img/T-2.png",
          i_url: "../../static/img/T-2.png",
          text: "详情"
        },
        {
          name: "home",
          id: "3",
          i_url_one: "../../static/img/T-1.png",
          i_url_two: "../../static/img/T-2.png",
          i_url: "../../static/img/T-2.png",
          text: "首页"
        },
        {
          name: "card",
          id: "4",
          i_url: "../../static/img/card.png",
          text: "购物车"
        },
        {
          name: "mine",
          id: "5",
          i_url: "../../static/img/mine.png",
          text: "我的"
        }
      ]
    };
  },

  methods: {
    changeColor(index) {
      if (index < 3) {
        this.currentIndex = index;
      }

      for (let i = 0; i < 3; i++) {
        this.pageData[i].i_url = this.pageData[i].i_url_two;
      }
      if (this.pageData[index].i_url_one) {
        this.pageData[index].i_url = this.pageData[index].i_url_one;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 180px;
  background: #fff;

  .tab-list {
    text-align: center;
    i,
    span {
      display: block;
    }
    i {
      width: 80px;
      height: 80px;
      background-size: 80px 80px !important;
    }
    .active {
      color: #90221a;
    }
    span {
      margin-top: 16px;
      font-size: 36px;
      height: 36px;
      line-height: 36px;
    }
  }
}
</style>

