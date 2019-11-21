import axios from 'axios'
import qs from 'qs'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
// import { getToken, setToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: 'http://zc.12zan.com', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

service.defaults.transformRequest = [
  function(data) {
    // 数据序列化
    return qs.stringify(data)
  }
]
// async function doRequest(error) {
//   setToken(error.response.data.token)
//   const config = error.response.config

//   config.headers.Authorization = getToken()

//   const res = await axios.request(config)

//   return res
// }

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      // config.headers['Authorization'] = getToken()
    }
    // config.headers.post['X-Requested-With'] = 'XMLHttpRequest';
    // config.headers.get['X-Requested-With'] = 'XMLHttpRequest';
    // config.responseType = 'json';
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response
    // store.dispatch('user/setPlatformid', res.headers.platformid)
    // if the custom code is not 20000, it is judged as an error.
    if (res.status !== 200 && res.status) {
      Message({
        message: res.message || res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm(
          'You have been logged out, you can cancel to stay on this page, or log in again',
          'Confirm logout',
          {
            confirmButtonText: 'Re-Login',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }
        ).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || res.msg || 'Error'))
    } else {
      if (res.data.code && res.data.code !== 200) {
        Message({
          message: res.data.message || res.data.msg || 'Error',
          type: 'error',
          duration: 5 * 1000
        })
      } else {
        return res.data
      }
    }
  },
  error => {
    if (error.response.status === 402) {
      // return doRequest(error)
      return Promise.reject(error)
      // reloadMessage(error)
    } else if (error.response.status === 401) {
      store.dispatch('user/resetToken').then(() => {
        location.reload()
      })
    } else {
      Message({
        message: error.response.data.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  }
)

export default service
