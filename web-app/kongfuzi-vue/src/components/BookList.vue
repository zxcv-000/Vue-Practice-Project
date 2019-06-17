<template>
  <div class="book-list">
    <PlateTitle></PlateTitle>
    <div class="bl-card swiper-container" ref="card">
      <div class="swiper-wrapper">
        <div class="swiper-slide card-single" v-for="item in cardData" :key="item.id">
          <img :src="item.img_url" alt>
          <div class="bl-text">城市的历史，就是人的历史</div>
        </div>
        <div class="more swiper-slide">
          <span>查看全部84个书单</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlateTitle from "./PlateTitle";
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";

export default {
  name: "BookList",
  components: {
    PlateTitle
  },
  data() {
    return {
      cardData: [
        {
          id: "1",
          img_url: "../../static/img/L-1.jpg"
        },
        {
          id: "2",
          img_url: "../../static/img/L-1.jpg"
        },
        {
          id: "3",
          img_url: "../../static/img/L-1.jpg"
        }
      ]
    };
  },
  mounted() {
    new Swiper(this.$refs.card, {
      slidesPerView: "auto"
    });
  }
};
</script>

<style lang="less" scoped>
.book-list {
  padding: 0 0 66px 50px;
  .bl-card {
    .card-single {
      overflow: hidden;
      border-radius: 12px;
      width: 1108px !important;
      height: 675px;
      margin-right: 32px;
      img {
        width: 100%;
      }
      .bl-text {
        text-indent: 50px;
        width: 100%;
        height: 158px;
        line-height: 161px;
        font-size: 40px;
        color: #999;
        border: 1px solid #f3f3f3;
        border-top: none;
        box-sizing: border-box;
        border-radius: 0 0 12px 12px;
      }
    }
    .more {
      margin-right: 50px;
      height: 675px;
      width: 360px !important;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      border: 1px solid #f3f3f3;
      border-radius: 12px;

      background: #fafafa;
      font-size: 46px;
      color: #262626;
      span {
        display: block;
        width: 192px;
      }
    }
  }
}
</style>
