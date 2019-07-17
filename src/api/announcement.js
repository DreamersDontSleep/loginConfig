import request from '@/utils/request'

export function getAnnouncementList() {
  return request({
    url: 'announcement/list',
    method: 'post',
    data: {}
  })
}
