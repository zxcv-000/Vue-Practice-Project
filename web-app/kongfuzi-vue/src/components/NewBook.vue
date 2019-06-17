<template>
  <div class="new-book">
    <PlateTitle></PlateTitle>
    <ul>
      <li>
        <div class="n-b-left">
          <img src="../../static/img/N-1.jpg">
          <div class="price">
            <span>￥</span>
            <span>178</span>
          </div>
        </div>
        <div class="n-b-right">
          <p>傅佩荣签名《儒家哲學新論》（台版）</p>
          <p>傅佩荣以孟子人性论为中心，上观孔学，下察荀学，揭示先秦儒学的特色及其对中华文化的影响。</p>
          <div class="sign_box">
            <span>
              签名
              <div class="label">
                <div class="label-inner"></div>
              </div>
            </span>
            <span>
              钤印
              <div class="label">
                <div class="label-inner"></div>
              </div>
            </span>
            <span>
              毛边本
              <div class="label">
                <div class="label-inner"></div>
              </div>
            </span>
          </div>
        </div>
      </li>
      <li>
        <div class="n-b-left">
          <img src="../../static/img/N-1.jpg">
          <div class="price">
            <span>￥</span>
            <span>178</span>
          </div>
        </div>
        <div class="n-b-right">
          <p>傅佩荣签名《儒家哲學新論》（台版）</p>
          <p>傅佩荣以孟子人性论为中心，上观孔学，下察荀学，揭示先秦儒学的特色及其对中华文化的影响。</p>
          <div class="sign_box">
            <span>
              签名
              <div class="label">
                <div class="label-inner"></div>
              </div>
            </span>
            <span>
              钤印
              <div class="label">
                <div class="label-inner"></div>
              </div>
            </span>
            <span>
              毛边本
              <div class="label">
                <div class="label-inner"></div>
              </div>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import PlateTitle from "./PlateTitle";

  export default {
    name: "NewBook",
    components: {
      PlateTitle
    }
  };
</script>

<style lang="less" scoped>
  .new-book {
    padding: 0 50px 64px 50px;

    ul {
      li {
        display: flex;
        height: 497px;

        .n-b-left {
          position: relative;
          display: flex;
          width: 380px;
          height: 100%;

          img {
            align-self: center;
            max-width: 330px;
            max-height: 446px;
          }

          .price {
            font-size: 0;
            position: absolute;
            left: 0;
            bottom: 140px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 186px;
            height: 100px;
            border-radius: 0 50px 50px 0;
            background: #8b2e26;

            span {
              display: block;
              margin-right: 10px;
              font-size: 40px;
              color: white;
            }
          }
        }

        .n-b-right {
          flex: 1;
          width: 0;
          border-bottom: 1px solid #f3f3f3;

          p:first-child {
            overflow: hidden;
            margin: 42px 0 46px;
            font-size: 48px;
            font-weight: 900;
            height: 48px;
            line-height: 48px;
            color: #262626;
          }

          p:nth-of-type(2) {
            overflow: hidden;
            margin-bottom: 70px;
            font-size: 40px;
            height: 116px;
            line-height: 58px;
            color: #9e9e9e;
          }

          .sign_box {
            font-size: 0;
            height: 73px;

            span {
              position: relative;
              display: inline-block;
              width: auto;
              height: 73px;
              text-align: center;
              line-height: 73px;
              padding: 0 28px;
              font-size: 36px;
              color: #997f55;
              background-size: 100% 100%;
              margin-right: 24px;
              border: 1px solid rgba(153, 127, 85, 0.6);
              border-radius: 16px;

              .label {
                width: 0;
                height: 0;
                border-bottom: 32px solid rgba(153, 127, 85, 0.6);
                border-left: 32px solid transparent;
                position: absolute;
                right: -1px;
                bottom: -1px;

                .label-inner {
                  width: 0;
                  height: 0;
                  border-bottom: 28px solid #fff;
                  border-left: 28px solid transparent;
                  position: absolute;
                  right: 0;
                  bottom: -32px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>



