import request from '@/utils/request'

export function userList(listQuery) {
  return request({
    url: '/user/list',
    method: 'post',
    data: listQuery
  })
}

export function userAdd(listQuery) {
  return request({
    url: '/user/add',
    method: 'post',
    data: listQuery
  })
}

export function userModify(listQuery) {
  return request({
    url: '/user/modify',
    method: 'post',
    data: listQuery
  })
}

export function userDelete(listId) {
  return request({
    url: '/user/delete',
    method: 'post',
    data: listId
  })
}

export function userModifyPwd(oldPassword, newPassword) {
  return request({
    url: '/user/modifyPwd',
    method: 'post',
    data: {
      oldPassword,
      newPassword
    }
  })
}
