<template>
  <div class="home">
    <div class="header">
      <img src="../../static/img/1.png" class="logo">
      <div class="seach-box">
        <img src="../../static/img/2.png" class="seach">
        <div class="text ignore">商品名称 作者 出版社 ISBN</div>
      </div>
    </div>
    <PicMove :data="bannerData"></PicMove>
    <div class="nav">
      <div class="nav-list">
        <i></i>
        <span>线装古籍</span>
      </div>
      <div class="nav-list">
        <i></i>
        <span>线装古籍</span>
      </div>
      <div class="nav-list">
        <i></i>
        <span>线装古籍</span>
      </div>
      <div class="nav-list">
        <i></i>
        <span>线装古籍</span>
      </div>
      <div class="nav-list">
        <i></i>
        <span>线装古籍</span>
      </div>
    </div>
    <div class="guide">
      <ul>
        <li>
          <a href="#">
            <div class="guide-text public-css-text">
              <p>今日上新</p>
              <p>发现新上好书</p>
            </div>
            <img src="../../static/img/G-1.png" alt>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="guide-text public-css-text">
              <p>今日上新</p>
              <p>发现新上好书</p>
            </div>
            <img src="../../static/img/G-1.png" alt>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="guide-text public-css-text">
              <p>今日上新</p>
              <p>发现新上好书</p>
            </div>
            <img src="../../static/img/G-1.png" alt>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="guide-text public-css-text">
              <p>今日上新</p>
              <p>发现新上好书</p>
            </div>
            <img src="../../static/img/G-1.png" alt>
          </a>
        </li>
      </ul>
    </div>
    <div class="auction">
      <div class="title">拍卖</div>
      <ul class="au-b">
        <li class="first-li mar-r">
          <div class="auction-text public-css-text">
            <p>全部拍卖</p>
            <p>日均4万余件拍品</p>
          </div>
          <img src="../../static/img/A-1.png" alt>
        </li>
        <ul class="au-s">
          <li>
            <div class="auction-text public-css-text">
              <p>全部拍卖</p>
              <p>日均4万余件拍品</p>
            </div>
            <img src="../../static/img/A-2.png" alt>
          </li>
          <li>
            <div class="auction-text public-css-text">
              <p>全部拍卖</p>
              <p>日均4万余件拍品</p>
            </div>
            <img src="../../static/img/A-2.png" alt>
          </li>
        </ul>
        <li class="mar-r">
          <div class="auction-text public-css-text">
            <p>全部拍卖</p>
            <p>日均4万余件拍品</p>
          </div>
          <img src="../../static/img/A-2.png" alt>
        </li>
        <li>
          <div class="auction-text public-css-text">
            <p>全部拍卖</p>
            <p>日均4万余件拍品</p>
          </div>
          <img src="../../static/img/A-2.png" alt>
        </li>
        <li class="mar-r mar-t-b">
          <div class="auction-text public-css-text">
            <p>全部拍卖</p>
            <p>日均4万余件拍品</p>
          </div>
          <img src="../../static/img/A-2.png" alt>
        </li>
        <li class="mar-t-b">
          <div class="auction-text public-css-text">
            <p>全部拍卖</p>
            <p>日均4万余件拍品</p>
          </div>
          <img src="../../static/img/A-2.png" alt>
        </li>
      </ul>
    </div>
    <Roller></Roller>
    <BookList></BookList>
    <NewBook></NewBook>
  </div>
</template>
<script>
import PicMove from "./PicMove";
import Roller from "./Roller";
import BookList from "./BookList";
import NewBook from "./NewBook";
export default {
  name: "Home",
  components: {
    PicMove,
    Roller,
    BookList,
    NewBook
  },
  data() {
    return {
      bannerData: [
        { id: "1", img_url: "../../static/img/B-1.jpg" },
        { id: "2", img_url: "../../static/img/B-2.jpg" },
        { id: "3", img_url: "../../static/img/B-3.jpg" },
        { id: "4", img_url: "../../static/img/B-4.jpg" },
        { id: "5", img_url: "../../static/img/B-5.jpg" },
        { id: "6", img_url: "../../static/img/B-6.jpg" },
        { id: "7", img_url: "../../static/img/B-7.jpg" },
        { id: "8", img_url: "../../static/img/B-8.jpg" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.home {
  .public-css-text {
    width: 376px;
    height: 100%;
    text-indent: 32px;
    p:first-child {
      margin: 48px 0 32px 0;
      font-size: 48px;
      height: 48px;
      font-weight: 900;
      color: black;
    }
    p:last-child {
      height: 38px;
      font-size: 38px;
      color: #999;
    }
  }

  .header,
  .nav {
    background: #fff;
  }
  .guide,
  .auction,
  .recommend,
  .book-list,
  .new-book {
    background: #fff;
    margin-bottom: 26px;
  }
  .header {
    display: flex;
    align-items: center;
    height: 190px;
    width: 100%;
    font-size: 48px;
    color: #aaaaaa;

    .logo {
      margin: 0 20px 0 48px;
      width: 120px;
      height: 90px;
    }
    .seach-box {
      display: flex;
      align-items: center;
      width: 1006px;
      height: 112px;
      border-radius: 56px;
      background: #f5f5f5;

      .seach {
        margin: 0 26px 0 48px;
        width: 50px;
        height: 50px;
      }
    }
  }
  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 394px;

    .nav-list {
      text-align: center;
      i,
      span {
        display: block;
      }
      i {
        width: 132px;
        height: 132px;
        background: url("../../static/img/N-1.png") center no-repeat;
        background-size: 132px 132px;
      }
      span {
        margin-top: 20px;
        font-size: 36px;
        height: 36px;
        line-height: 36px;
      }
    }
  }
  .guide {
    ul {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      justify-content: center;
      width: 100%;
      height: 542px;
      li:nth-of-type(1),
      li:nth-of-type(2) {
        margin-bottom: 20px;
      }
      li:nth-of-type(2n-1) {
        margin-right: 10px;
      }
      li {
        width: 566px;
        height: 220px;
        border-radius: 10px;
        background: #fafafa;
        a {
          display: block;
          width: 100%;
          height: 100%;
          display: flex;

          img {
            width: 180px;
            height: 180px;
          }
        }
      }
    }
  }
  .auction {
    width: 100%;
    height: 1222px;
    .title {
      font-size: 62px;
      font-weight: 900;
      line-height: 220px;
      height: 220px;
      text-indent: 50px;
    }
    .au-b {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      justify-content: center;
      width: 100%;
      height: 100%;
      .mar-r {
        margin-right: 10px;
      }
      .mar-t-b {
        margin-top: 10px;
        margin-bottom: 0;
      }
      .first-li {
        overflow: hidden;
        border-radius: 20px;
        flex-wrap: wrap;
        height: 450px;
        .auction-text {
          height: 166px;
        }
        img {
          margin: 0 32px;
          width: 534px;
          height: 230px;
        }
      }

      li {
        overflow: hidden;
        display: flex;
        margin-bottom: 10px;
        width: 566px;
        height: 220px;
        border-radius: 10px;
        background: #fafafa;
        img {
          width: 180px;
          height: 180px;
        }
      }
    }
  }
}
</style>



