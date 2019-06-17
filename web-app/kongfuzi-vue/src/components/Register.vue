<template>
  <div class="register-box">
    <div class="header">
      <router-link class="close" :to="{name:'login'}" tag="div">
        <img src="../../static/img/back.png" alt>
      </router-link>
      <span>注册</span>
    </div>
    <div class="register_form">
      <div :class="[{change:changeColor},'phone']">
        <div class="areaCode">+86</div>
        <input
          type="tel"
          autocomplete="off"
          placeholder="请输入手机号"
          name="phone"
          v-model="userName"
          @focus="changeBlack()"
          @blur="changeGray()"
          v-focus
        >
      </div>
      <div :class="[{change:!changeColor},'code']">
        <input
          type="password"
          autocomplete="off"
          placeholder="请输入短信验证码"
          name="code"
          v-model="passWord"
          @input="registerColor"
        >
        <div class="send">
          <span class="send_in">获取验证码</span>
        </div>
      </div>
      <div :class="[{btn_red:register_color},'btn','btn_gry']" @click="register">注册</div>
    </div>
    <div class="tip">
      注册即表示您同意
      <span class="red">
        <a href="#" class="red">《孔夫子旧书网服务协议》</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      userName: "",
      passWord: "",
      changeColor: true,
      register_color: false
    };
  },
  methods: {
    register() {
      this.$axios
        .post("http://localhost:3000/register", {
          userName: this.userName,
          passWord: this.passWord
        })
        .then(({ data }) => {
          alert(data.info);
          if (data.state) {
            this.$router.replace({
              name: "login",
              query: { redirect: this.$route.query.redirect }
            });
          }
        })
        .catch(err => console.log(err));
    },
    changeBlack() {
      this.changeColor = true;
    },
    changeGray() {
      this.changeColor = false;
    },
    registerColor() {
      if (this.passWord != "") {
        this.register_color = true;
      } else {
        this.register_color = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.register-box {
  width: 100%;
  height: 100%;
  background: #fff;
  .header {
    position: relative;
    width: 100%;
    text-align: center;
    height: 172px;
    line-height: 172px;
    font-size: 60px;
    color: #262626;

    .close {
      position: absolute;
      left: 0;
      top: 0;
      width: 66px;
      z-index: 10;
      padding: 50px 43px;

      img {
        width: 100%;
      }
    }
  }

  .register_form {
    width: 100%;
    padding-top: 66px;

    .phone,
    .code {
      position: relative;
      width: 84%;
      margin: 0 auto;
      border-bottom: 1px solid #eaeaea;
      transition: all 0.5s ease;
    }
    .change {
      border-bottom: 1px solid black;
    }
    .phone {
      input {
        width: 100%;
        display: inline-block;
        padding: 56px 132px 56px 182px;
        line-height: 66px;
        font-size: 53px;
        box-sizing: border-box;
      }
    }

    .code {
      input {
        width: 100%;
        display: inline-block;
        padding: 57px 0;
        line-height: 67px;
        font-size: 53px;
        text-indent: 10px;
        box-sizing: border-box;
        padding-right: 398px;
      }

      .send {
        position: absolute;
        right: 0;
        top: 0;
        width: 269px;
        height: 97px;
        line-height: 97px;
        text-align: center;
        font-size: 44px;
        color: #c7c7c7;
        padding: 40px 0;

        .send_in {
          display: block;
          width: 269px;
          height: 97px;
          line-height: 97px;
          text-align: center;
          font-size: 44px;
          color: #c7c7c7;
          border-radius: 14px;
          border: 1px solid #c7c7c7;
        }
      }
    }

    .areaCode {
      position: absolute;
      left: 0;
      top: 0;
      font-size: 53px;
      line-height: 66px;
      color: #262626;
      padding: 56px 50px;
    }

    .btn_gry {
      background: #c7c7c7;
    }
    .btn_red {
      background: #cf2e2e;
    }
    .btn {
      width: 84%;
      height: 156px;
      line-height: 156px;
      margin: 0 auto;
      text-align: center;
      border-radius: 14px;
      margin-top: 67px;
      font-size: 57px;
      color: #fff;
    }
  }

  .tip {
    width: 100%;
    text-align: center;
    color: #999999;
    font-size: 44px;
    margin-top: 67px;

    .red,
    .red a,
    a.red {
      color: #d13333 !important;
    }
  }
}
</style>
