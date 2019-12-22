import axios from "axios"
import {Message} from "element-ui"
import router from "../router"
axios.interceptors.request.use(function(config){
    let token = window.localStorage.getItem('use-token')
    config.headers.Authorization=`Bearer ${token}`
    return config
},function(err){
    return Promise.reject(err)
})

axios.interceptors.response.use(function(res){
    return res.data ? res.data : {}
},function(err){
    let status =err.response.status;
    let message = "未知错误"
    switch (status) {
        case 400:
          message = '请求参数错误'
          break
        case 403:
        //   message = '403 refresh_token未携带或已过期'
        router.push('./login')
          break
        case 507:
          message = '服务器数据库异常'
          break
        case 401:
          message = 'token过期或未出'
          window.localStorage.clear() // 清空缓存
          router.push('/login') // this.$router.push()
          break
        case 404:
          message = '手机号不正确'
          break
        default:
          break
      }
    Message({
        type:'warning',
        message
    })
})

export default axios; 