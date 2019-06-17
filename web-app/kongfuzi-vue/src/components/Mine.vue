<template>
  <div class="mine">
    <div class="header">
      <router-link class="header-back" :to="{name:'home'}" tag="div">
        <span></span>
      </router-link>
      <div class="header-title">个人中心</div>
      <div class="header-btn">
        <span></span>
      </div>
    </div>
    <div class="main">
      <div class="myHeader">
        <div class="user_info">
          <div class="avatar_wrap">
            <div class="avatar">
              <img src="../../static/img/mine/user_photo.png" alt>
            </div>
          </div>
          <div class="personal_wrap">
            <div class="name_wrap">
              <span class="name">小明</span>
              <span class="my_header_v4_name_edit"></span>
              <div class="vip"></div>
            </div>
          </div>
        </div>
        <div class="hor-tips">
          <div class="real_name"></div>
          <div class="notice">买家信誉：100%</div>
          <div class="notice goto_arrow">积分：45678</div>
        </div>
        <div class="account_wrap">
          <div class="account_wrap_content">账号管理</div>
        </div>
      </div>
      <div class="my_cell">
        <div class="rel_container" id="myOrder">
          <div class="my_order_entrance type_unpay">
            <i></i>
            <span>代付款</span>
          </div>
          <div class="my_order_entrance type_unrecieve">
            <i></i>
            <span>待收货</span>
          </div>
          <div class="my_order_entrance type_consult">
            <i></i>
            <span>退货/换货</span>
          </div>
          <div class="my_order_entrance type_orders">
            <i></i>
            <span>全部订单</span>
          </div>
        </div>
      </div>
      <div class="my_cell">
        <div class="rel_container" id="myAsset">
          <div class="assets_item">
            <div class="assets_item_val">
              <span class="assets_val">5</span>
              <span class="assets_unit">张</span>
            </div>
            <div class="assets_item_key">代金券</div>
          </div>
          <div class="assets_item">
            <div class="assets_item_val">
              <span class="assets_val">453</span>
              <span class="assets_unit">元</span>
            </div>
            <div class="assets_item_key">白条额度</div>
          </div>
          <div class="assets_item">
            <div class="assets_item_val">
              <span class="assets_val">31</span>
              <span class="assets_unit">个</span>
            </div>
            <div class="assets_item_key">书豆</div>
          </div>
          <div class="assets_item">
            <div class="assets_item_val">
              <span class="assets_val">67</span>
              <span class="assets_unit">元</span>
            </div>
            <div class="assets_item_key">红包</div>
          </div>
          <div class="assets_item">
            <div class="assets_item_val my_asset"></div>
            <div class="assets_item_key">我的资产</div>
          </div>
        </div>
      </div>
      <div class="bar">
        <span>资金账户</span>
        <span class="balance">余额：￥6748</span>
      </div>
      <div class="my_cell">
        <div class="rel_container" id="myFav">
          <div class="assets_item">
            <div class="assets_item_val">
              <span class="assets_val">1</span>
            </div>
            <span class="assets_item_key">商品收藏</span>
          </div>
          <div class="assets_item">
            <div class="assets_item_val">
              <span class="assets_val">2</span>
            </div>
            <span class="assets_item_key">店铺关注</span>
          </div>
          <div class="assets_item">
            <div class="assets_item_val">
              <span class="assets_val">67</span>
            </div>
            <span class="assets_item_key">喜欢的内容</span>
          </div>
        </div>
      </div>
      <div class="bar">
        <span>邀请有礼</span>
        <span>邀请好友注册得好礼</span>
      </div>
      <div class="activity-wrap">
        <div class="tools_container" id="myActivity">
          <div class="tools_item" v-for="item in iconData">
            <span class="tools_icon iconfont" v-html="item.icon"></span>
            <span class="tools_item_key">{{item.text}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Mine",
    data() {
      return {
        iconData: [
          {
            icon: "&#xe607;",
            text: "购物车"
          },
          {
            icon: "&#xe608;",
            text: "消息"
          },
          {
            icon: "&#xe609;",
            text: "编辑"
          },
          {
            icon: "&#xe70a;",
            text: "足迹"
          },
          {
            icon: "&#xe647;",
            text: "信誉"
          },
          {
            icon: "&#xe681;",
            text: "收藏"
          },
          {
            icon: "&#xe618;",
            text: "地址"
          },
          {
            icon: "&#xe659;",
            text: "客服"
          },
          {
            icon: "&#xe61b;",
            text: "读书"
          }
        ]
      };
    }
  };
</script>

<style lang="less" scoped>
  * {
    box-sizing: border-box;
  }

  .mine {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .header {
      width: 100%;
      height: 150px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0;

      .header-title {
        font-size: 53px;
      }

      .header-back,
      .header-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        width: 100px;
      }

      .header-back {
        span {
          display: inline-block;
          width: 67px;
          height: 67px;
          background: url("../../static/img/item/back.png") no-repeat center;
          background-size: 100%;
        }
      }

      .header-btn {
        span {
          display: inline-block;
          width: 67px;
          height: 67px;
          background: url("../../static/img/item/menu.png") no-repeat center;
          background-size: 100%;
        }
      }
    }

    .main {
      flex: 1;
      background: #f7f7f7;
      display: flex;
      overflow-x: hidden;
      overflow-y: auto;
      flex-direction: column;

      .myHeader {
        position: relative;
        overflow: hidden;
        background: linear-gradient(90deg, #eb3c3c, #ff7459);
        min-height: 431px;

        .user_info {
          padding: 83px 50px 34px;
          display: flex;
          position: relative;

          .avatar_wrap {
            position: relative;

            .avatar {
              width: 199px;
              height: 199px;
              overflow: hidden;
              border: 1px solid hsla(0, 0%, 100%, 0.4);
              border-radius: 50%;
            }

            .avatar img {
              width: 100%;
              height: 100%;
            }
          }

          .personal_wrap {
            flex: 1;
            margin-left: 50px;
            margin-top: 40px;

            .name_wrap {
              margin-left: 50px;
              max-width: 729px;
              font-size: 47px;
              color: #fff;
              display: flex;
              align-items: center;

              .name {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 47px;
              }

              .my_header_v4_name_edit {
                -webkit-flex-shrink: 0;
                flex-shrink: 0;
                margin: 0 0 0 14px;
                width: 40px;
                height: 40px;
                vertical-align: middle;
                background: url("../../static/img/mine/edit.png") center no-repeat;
                background-size: 40px;
              }

              .vip {
                position: relative;
                margin: 17px 44px;
              }

              .vip:before {
                content: "";
                position: absolute;
                width: 67px;
                height: 67px;
                left: -33px;
                top: 48%;
                margin-top: -33px;
                background: url("../../static/img/mine/icon_vip.png") 0 0 no-repeat;
                background-size: 335px 67px;
              }
            }
          }
        }

        .hor-tips {
          display: flex;
          position: absolute;
          top: 246px;
          padding-left: 305px;

          .notice {
            display: inline-block;
            font-size: 34px;
            color: #fff;
            background: #c8483f;
            border-radius: 34px;
            text-align: center;
            height: 50px;
            margin-right: 27px;
            line-height: 53px;
            padding: 0 27px;
            max-width: 497px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .goto_arrow {
            position: relative;
            padding-right: 47px !important;

            :after {
              display: block;
              content: "";
              width: 14px;
              height: 14px;
              border-top: 1px solid hsla(0, 0%, 100%, 0.7);
              border-left: 1px solid hsla(0, 0%, 100%, 0.7);
              -webkit-transform-origin: 50%;
              transform-origin: 50%;
              -webkit-transform: rotate(135deg);
              transform: rotate(135deg);
              position: absolute;
              right: 20px;
              top: 17px;
            }
          }
        }

        .account_wrap {
          position: absolute;
          right: 50px;
          top: 0;
          height: 133px;
          line-height: 133px;
          overflow: hidden;
          font-size: 47px;
          color: rgba(76, 0, 0, 0.7);
          padding-left: 50px;

          :after {
            content: "";
            display: inline-block;
            width: 40px;
            height: 40px;
            position: absolute;
            top: 50%;
            left: 7px;
            transform: translateY(-50%);
            background: url("../../static/img/mine/setting.png") 0 0 no-repeat;
            background-size: 100% 100%;
          }
        }
      }

      .my_cell,
      .activity-wrap {
        margin: 34px 0;
      }

      .my_cell {
        .rel_container {
          height: 239px;
          background: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .assets_item {
            flex: 1;
            position: relative;
            text-align: center;
            padding-top: 57px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .assets_item_val {
              display: flex;
              color: #e93b3d;
              height: 60px;
              line-height: 47px;
              white-space: nowrap;
              font-size: 40px;
            }

            .assets_item_key {
              font-size: 40px;
              color: #666;
              line-height: 113px;
              display: block;
            }

            .my_asset {
              width: 100%;
              font-size: 34px;
              height: 60px;
              color: #e93b3d;
              line-height: 53px;
              background: url("../../static/img/mine/my_asset.png") 50% / auto
              100% no-repeat;
            }
          }
        }

        #myFav .assets_item_val {
          font-weight: 700;
        }

        #myOrder {
          display: flex;
          justify-content: space-around;

          div {
            width: 25%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;

            span {
              color: #666;
              font-size: 40px;
              line-height: 116px;
              top: 100px;
              text-align: center;
            }

            i {
              flex: 1;
              text-align: center;
            }
          }

          .type_unpay i {
            background: url("../../static/img/mine/type_unpay.png") 50% / auto
            67px no-repeat;
          }

          .type_unrecieve i {
            background: url("../../static/img/mine/type_unrecieve.png") 50% / auto
            67px no-repeat;
          }

          .type_consult i {
            background: url("../../static/img/mine/type_consult.png") 50% / auto
            67px no-repeat;
          }

          .type_orders i {
            background: url("../../static/img/mine/type_orders.png") 50% / auto
            67px no-repeat;
          }
        }

        .type_orders:after,
        #myAsset .assets_item:last-of-type::after {
          position: absolute;
          z-index: 1;
          top: 0;
          left: -5px;
          width: 10px;
          height: 239px;
          background: url("../../static/img/mine/triangle.png") 0 0;
          content: "";
        }
      }

      .activity-wrap {
        display: flex;
        flex-wrap: wrap;

        .tools_container {
          width: 100%;
          background: #fff;

          .tools_item {
            padding: 34px 027px;
            text-align: center;
            height: 216px;
            display: flex;
            flex-direction: column;
            float: left;
            width: 25%;
            box-sizing: border-box;
            position: relative;

            .tools_item_key {
              font-size: 40px;
              color: #666;
              line-height: 67px;
            }

            .tools_icon {
              font-size: 67px;
              display: block;
              margin: 0 auto 24px;
              width: 67px;
              height: 67px;
            }
          }
        }
      }

      .bar {
        display: flex;
        position: relative;
        margin: 34px 0;
        height: 150px;
        background: #fff;
        padding: 0 67px;

        span {
          display: block;
          height: 150px;
          line-height: 150px;
          font-size: 40px;
        }

        .balance {
          margin-left: 150px;
          color: #e93b3d;
        }

        span:first-of-type {
          color: #e93b3d;
          margin-right: 464px;
        }

        :after {
          content: "";
          display: inline-block;
          vertical-align: middle;
          width: 20px;
          height: 34px;
          background-image: url("../../static/img/mine/cccR.svg");
          background-repeat: no-repeat;
          background-size: 100%;
          position: absolute;
          right: 67px;
          top: 50%;
          margin-top: -14px;
        }
      }
    }
  }
</style>
