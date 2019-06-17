<template>
  <div class="banner">
    <div class="swiper-container" ref="slider">
      <div class="swiper-wrapper">
        <div class="imgBox swiper-slide" v-for="slide in slides" :key="slide.id">
          <img :src="slide.img_url">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
export default {
  name: "PicMove",
  data() {
    return {
      slides: []
    };
  },
  props: ["data"],
  created() {
    this.slides = this.data;
  },
  mounted() {
    new Swiper(this.$refs.slider, {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 530px;
  .swiper-container {
    width: 100%;
    height: 100%;
    .imgBox {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .swiper-wrapper,
    .swiper-slide,
    img {
      max-width: 100%;
      max-height: 100%;
    }
    /deep/ .swiper-pagination-bullet {
      margin: 6px;
      width: 14px;
      height: 14px;
      border-radius: 7px;
      background:hotpink;
    }
    /deep/ .swiper-pagination-bullet-active {
      width: 46px;
      transition: width 0.2s ease-in-out;
      background: crimson;
    }
  }
}
</style>


