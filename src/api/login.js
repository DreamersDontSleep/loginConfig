import request from '@/utils/request'
import { getToken, setToken, removeToken } from '@/utils/auth'

export function login(username, password) {
  return request({
    url: '/auth/signin/local?signName=' + username + '&passwd=' + password,
    method: 'post',
    data: {}
  })
}

export function logout() {
  return request({
    url: '/auth/signout',
    method: 'get',
    data: {}
  })
}

export function getInfo() {
  return request({
    url: '/auth/xyUser/info',
    method: 'post',
    data: {}
  })
}

export function getInfoList(systemId) {
  return request({
    url: '/auth/xyUser/getPrivage?systemId=' + systemId,
    method: 'get',
    data: {},
		headers: {'token': getToken()}
  })
}

export function getRoleList(user) {
  return request({
    url: '/auth/xyUser/setRoles',
    method: 'post',
    data: user,
		headers: {'token': getToken()}
  })
}