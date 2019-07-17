import request from '@/utils/request'

// url写法
export function getProjectList(params) {
  return request({
    url: '/ts/project/list',
    method: 'get',
    params
  })
}

export function addNewProject(para) {
  return request({
    url: '/ts/project/add',
    method: 'post',
    data: para
  })
}

export function searchProjectData(para) {
  return request({
    url: '/ts/project/list/$' + para,
    method: 'get',
    data: {}
  })
}

export function deleteProject(para) {
  return request({
    url: '/ts/project/delete/$' + para,
    method: 'get',
    data: {}
  })
}

export function updateProject(para) {
  return request({
    url: '/ts/project/update',
    method: 'post',
    data: para
  })
}

export function removeUser(para) {
  return request({
    url: 'project/list/' + para,
    method: 'post',
    data: {}
  })
}

export function register(paraId,para) {
  return request({
    url: 'households/add/$' + paraId,
    method: 'post',
    data: para
  })
}

export function getTrialList() {
  return request({
    url: '/ts/project/trial',
    method: 'post',
    data: {}
  })
}

export function getTrialInfoList(param) {
  return request({
    url: '/ts/project/trialInfo',
    method: 'post',
    data: param
  })
}

export function getFinalList() {
  return request({
    url: '/ts/project/final',
    method: 'post',
    data: {}
  })
}

export function getFinalInfoList(param) {
  return request({
    url: '/ts/project/finalInfo',
    method: 'post',
    data: param
  })
}