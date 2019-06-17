<template>
  <div class="login">
    <div class="header">
      <router-link class="close" :to="{name:'home'}" tag="div">
        <img src="../../static/img/close.png" alt>
      </router-link>
      <span>登录</span>
    </div>
    <div class="login_form">
      <div :class="[{change:changeColor},'name']">
        <input
          type="text"
          autocomplete="off"
          placeholder="请输入用户名/手机号/邮箱"
          name="user"
          v-model="userName"
          @focus="changeBlack()"
          @blur="changeGray()"
          v-focus
        >
      </div>
      <div :class="[{change:!changeColor},'password']">
        <input
          type="password"
          placeholder="请输入密码"
          name="password"
          v-model="passWord"
          @input="loginColor"
        >
        <div class="showPass" data-attr="password">
          <img src="../../static/img/LG-1.png" alt>
        </div>
      </div>
      <div class="forget_pd">
        <a href="javascript:;" class="forget_pd_to">忘记密码?</a>
      </div>
      <div :class="[{btn_red:login_color},'btn','btn_gry']" @click="login">登录</div>
    </div>
    <div class="link_to">
      <a href="#" class="ins">短信验证码登录</a>
      <router-link
        class="register"
        :to="{name:'register',query:{redirect:this.$route.query.redirect}}"
        tag="a"
      >注册</router-link>
    </div>
    <div class="other_login">
      <div class="title">
        <span class="line"></span>
        <span class="text">使用社交账号登录</span>
        <span class="line"></span>
      </div>
      <div class="icon">
        <a href="javascript:;" class="icon-link">
          <img src="../../static/img/QQ.png" alt>
        </a>
        <a href="javascript:;" class="icon-link">
          <img src="../../static/img/WB.png" alt>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LogIn",
  data() {
    return {
      userName: "",
      passWord: "",
      changeColor: true,
      login_color: false
    };
  },
  methods: {
    ...mapActions("token", ["changeToken"]),

    login() {
      this.$axios
        .post("http://localhost:3000/login", {
          userName: this.userName,
          passWord: this.passWord
        })
        .then(({ data }) => {
          alert(data.info);
          if (data.state) {
            this.changeToken(data.tokenData);
            this.$router.replace(this.$route.query.redirect);
          }
        })
        .catch(err => {
          console.log("服务器连接失败");
          console.log(err);
        });
    },
    changeBlack() {
      this.changeColor = true;
    },
    changeGray() {
      this.changeColor = false;
    },
    loginColor() {
      if (this.passWord != "") {
        this.login_color = true;
      } else {
        this.login_color = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.login {
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

  .login_form {
    width: 100%;
    padding-top: 0.4rem;

    .name input,
    .password input {
      width: 100%;
      display: inline-block;
      padding: 56px 0;
      line-height: 66px;
      font-size: 52px;
      text-indent: 20px;
      box-sizing: border-box;
    }

    .name,
    .password {
      position: relative;
      width: 84%;
      margin: 0 auto;
      border-bottom: 1px solid #eaeaea;
      transition: all 0.5s ease;
    }
    .change {
      border-bottom: 1px solid black;
    }
    .password {
      input {
        padding-right: 132px;
      }

      .showPass {
        position: absolute;
        right: 0;
        top: 0;
        width: 66px;
        height: 66px;
        line-height: 66px;
        padding: 56px 20px;
        font-size: 0;

        img {
          width: 100%;
        }
      }
    }

    .forget_pd {
      width: 84%;
      height: 46px;
      line-height: 46px;
      margin: 0 auto;
      text-align: right;
      padding-top: 26px;

      a {
        font-size: 43px;
        color: #999999;
      }
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
      border-radius: 13px;
      margin-top: 50px;
      font-size: 56px;
      color: #fff;
    }
  }
}

.link_to {
  display: flex;
  justify-content: space-between;
  width: 84%;
  margin: 0 auto;
  padding-top: 66px;

  .ins {
    font-size: 43px;
    color: #666666;
  }

  .register {
    font-size: 43px;
    color: #666666;
  }
}

.other_login {
  width: 100%;
  left: 0;
  bottom: 0;
  overflow: hidden;
  margin-top: 330px;

  .title {
    display: flex;
    width: 84%;
    height: 46px;
    line-height: 46px;
    margin: 0 auto;
    text-align: center;

    .line {
      width: 314px;
      height: 0;
      border-bottom: 1px solid #eaeaea;
      margin-top: 30px;
    }

    .text {
      margin: 0 30px;
      font-size: 43px;
      color: #999999;
    }
  }

  .icon {
    text-align: center;

    a {
      display: inline-block;
      width: 132px;
      height: 132px;
      line-height: 132px;
      font-size: 0;
      margin: 116px 42px;

      img {
        width: 100%;
      }
    }
  }
}
</style>
