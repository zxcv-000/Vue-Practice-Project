import axios from 'axios'
import qs from "qs"
import router from '../router/index'
import store from './../store/index'

console.log(store)

//axios配置
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    config.data = qs.stringify(config.data);
  }

  //在请求非登录注册页面时在请求头加入token
  if (config.url === 'http://localhost:3000/login' || config.url === 'http://localhost:3000/register') {} else {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization')
    }
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});


//异步请求后，判断token是否过期,添加响应拦截器

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error)
    if (error.response) {
      if (error.response.status == 401) {
        alert("登录信息失效，请重新登陆！")
        // store.token.commit('deleteToken');
        router.replace({
          path: "/login",
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
      } else {
        alert("数据响应出错！")
        router.replace({
          path: "/home"
        })
        return Promise.reject(error.response.data)
      }
    } else {
      alert('服务器出错，请稍后再试！')
      router.replace({
        path: "/home"
      })
    }
  }
)



export default axios
