import axios from 'axios'
import qs from 'qs'
import DomMessage from './message'
import {
  // Notification,
  // MessageBox,
  // Message
} from 'element-ui'

// const configUrl = 'http://121.36.40.205/H5S/shyldp/AllFace.ashx'
// const upDataUrl = 'http://121.36.40.205/H5S/shyldp/PostFace.ashx'

// const configUrl = 'http://10.78.4.158/CurveTest/AllFace.ashx'
// const upDataUrl = 'http://10.78.4.158/CurveTest/AllFace.ashx'


const configUrl = 'http://47.104.216.15/CQ/Service/AllFace.ashx'
const upDataUrl = 'http://47.104.216.15/CQ/Service/AllFace.ashx'

var messageOnce = new DomMessage()

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 业务 逻辑
  return config
}, function (error) {
  // 业务 逻辑
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(res => {
    const {
      code,
      msg
    } = res.data
    if (code || msg) {
      // // 成功的判断
      // if (code === '10000') {
      //   messageOnce.success(msg)
      // } else {
      //   // 失败的判断
      //   messageOnce.error(msg)
      // }
    }
    return res
  }, error => {
    return Promise.reject(error)
  }
)

const getData = (par) => {
  // par.currentUserId = localStorage.getItem('userId')
  return axios.get(configUrl, {
    params: {
      ...par
    }
  }).then((res) => res.data)
}

const postData = (params) => {
  return axios.post(
    configUrl, qs.stringify(params)).then((res) => res.data)
}

const upData = (params) => {
  return axios.post(
    upDataUrl, params).then((res) => res.data)
}
export default {
  getData,
  postData,
  upData,
  configUrl
}
