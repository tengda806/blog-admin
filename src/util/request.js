import axios from 'axios'
import { stringify } from 'qs'
const request = axios.create({
  baseURL: 'http://localhost:8808/admin/',
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  },
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    let token = localStorage.getItem('token')
    config.headers.token = token
      // 让每个请求携带token
      if (config.method === 'get' ) {
        config.params = {  ...config.params }
  
      } else {
        config.data = { ...config.data }
        
      }

    config.data = stringify(config.data, { arrayFormat: 'brackets' })
    return config
  },
  error => {
    if(error.request.readyState === 4 && error.request.status === 0){
      // 请求超时 ？
    }
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    const ret = response.data
    if (ret.code || ret.code === 0) {
      switch (ret.code) {
        case 1:
          return ret ;
        case 2:
          localStorage.removeItem('token')
          
          return ret 
        default:
          return ret
      }
    } else {
      return Promise.reject('未返回code')
    }
  },
  error => {
    
    return Promise.reject(error)
  },
)




export default request
