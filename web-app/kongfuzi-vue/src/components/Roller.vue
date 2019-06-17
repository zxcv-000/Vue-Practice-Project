<template>
  <div class="recommend">
    <PlateTitle></PlateTitle>
    <div class="re-banner">
      <div class="swiper-container" ref="roll">
        <div class="swiper-wrapper">
          <div class="swiper-slide re-banner-ele" v-for="item in picData" :key="item.id">
            <div class="re-img">
              <img src="../../static/img/R-1.jpg" alt>
            </div>
            <div class="re-text">
              <p>苦练</p>
              <p>[法]玛格丽特•尤瑟纳</p>
              <p>
                <span>￥</span>
                <span>27</span>
                <span>起</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import PlateTitle from "./PlateTitle";

export default {
  name: "Roller",
  components: {
    PlateTitle
  },
  data() {
    return {
      picData: [
        {
          id: "1"
        },
        {
          id: "2"
        },
        {
          id: "3"
        },
        {
          id: "4"
        },
        {
          id: "5"
        },
        {
          id: "6"
        },
        {
          id: "7"
        },
        {
          id: "8"
        }
      ]
    };
  },
  mounted() {
    new Swiper(this.$refs.roll, {
      slidesPerView: "auto"
    });
  }
};
</script>
<style lang="less" scoped>
.recommend {
  height: 990px;
  padding-left: 50px;
  .re-banner {
    .re-banner-ele {
      width: 330px !important;
      margin-right: 46px !important;

      .re-img {
        width: 100%;
        height: 462px;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }

      .re-text {
        p:first-child {
          font-size: 38px;
          font-weight: 900;
          height: 114px;
          line-height: 114px;
          color: #262626;
        }

        p:nth-of-type(2) {
          margin-bottom: 30px;
          font-size: 34px;
          height: 34px;
          color: #999;
        }

        p:last-child {
          font-size: 0;

          span {
            display: inline-block;
          }

          span:first-of-type {
            font-size: 36px;
            color: #90221a;
          }

          span:nth-of-type(2) {
            margin: 0 10px;
            font-size: 46px;
            color: #90221a;
          }

          span:last-of-type {
            font-size: 34px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>



