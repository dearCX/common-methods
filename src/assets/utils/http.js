import axios from 'axios'
const http = axios.create({
  baseURL: '/', // 请求地址公共头部
  timeout: 50000, // 设定请求超时的毫秒数，超过此时间会话中断
  headers: { // 自定义请求头
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
const reqResolve = (config) => {
  return config
}
const reqReject = (error) => {
  return Promise.reject(error)
}
const resResolve = (response) => {
  // 根据response的实际返回值处理，仅为示例
  if (response && response.code === 0) {
    return response.data
  }
}
const resReject = (error) => {
  // 此处可以引入UI框架提示
  // 例如：Message.error('请求出错')
  return Promise.reject(error)
}

// 拦截器：在请求或响应被 then 或 catch 处理前拦截它们
http.interceptors.request.use(reqResolve, reqReject)
http.interceptors.response.use(resResolve, resReject)

export default { http }
