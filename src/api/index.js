// index.js

// request.js
// import axios from 'axios'
// export const request = axios.create({
//   baseURL: "https://gitee.com"
// })

import { request } from './request'
export const postLogin = async (username, password) => {
  const params = new URLSearchParams({
    grant_type: 'password',
    username: username,
    password: password,
    client_id: '2ce3d7d1366f0ee5119b396a5fef7d02472395823ca73970fe8166a79e3b66e7',
    client_secret: '19e0fef7378e117e3e44990b9506f2cf0c596ff00e78bea3a95f6e35fb161bdb',
    scope: 'user_info projects pull_requests issues notes keys hook groups gists enterprises'
  })

  try {
    const response = await request.post('/oauth/token', params, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })

    const token = response.data.access_token
    localStorage.setItem('oauth_token', token)
    return token // 返回令牌
  } catch (error) {
    throw new Error(error.response ? error.response.data.error_description : error.message)
  }
}
// 创建代码仓库API参考：https://gitee.com/api/v5/swagger#/postV5UserRepos
// 列举登陆⽤户所有仓库API参考：https://gitee.com/api/v5/swagger#/getV5UserRepos
// 创建一个仓库
export const create = (data) => {
  return request.post('/api/v5/user/repos', data)
}
export const getData = (access_token) => {
  return request.get('/api/v5/user/repos', {
    params: {
      access_token: access_token
    }
  })
}
export const getUser = (access_token) => {
  return request.get('/api/v5/user', {
    params: {
      access_token: access_token
    }
  })
}