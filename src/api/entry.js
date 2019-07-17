import request from '@/utils/request'
import axios from "axios"

export function getEntryList(state,branchOffice) {
  return request({
    url: '/rpt/index/getReports?state=' + state + '&branchOffice=' + branchOffice,
    method: 'get',
    data: {}
  })
}

export function postReportData(para) {
  return request({
    url: '/rpt/index/saveReport',
    method: 'post',
    data: para
  })
}

export function postReportDatas(params) {
  return request({
    url: '/rpt/index/saveRptOrFile',
    method: 'post',
    data: params,
		headers: {
		  'Content-Type': 'multipart/form-data'
		}
  })
}

export function deleteReport(id,reportType) {
  return request({
    url: '/rpt/index/delete?id='+ id + '&reportType=' + reportType,
    method: 'post',
    data: {}
  })
}

export function getCheckList() {
  return request({
    url: '/rpt/index/getCheckList',
    method: 'get',
    data: {}
  })
}

export function postCheckId(id,state) {
  return request({
    url: '/rpt/index/updateRptState?id='+ id + '&state=' + state,
    method: 'post',
    data: {}
  })
}

export function getReportData(id,reportType) {
  return request({
    url: '/rpt/index/getReportsDetail?id='+ id + '&reportType=' + reportType,
    method: 'get',
    data: {}
  })
}