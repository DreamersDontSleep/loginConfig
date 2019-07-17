const Mock = require('mockjs')
const util = require('./util')

module.exports = app => {
  const MockRequest = (url, data, metod) => {
    return app[metod](url, (req, res) => {
      const json = util.getJsonFile(data)
      res.json(Mock.mock(json))
    })
  }

  // TODO: 类似 router 配置表
  MockRequest('/user/login', './data/login.json', 'post') // 登录
  MockRequest('/user/logout', './data/logout.json', 'post') // 登出
  MockRequest('/user/info', './data/adminInfo.json', 'post') // admin 用户 './data/devInfo.json' dev 用户，调测角色权限功能
  MockRequest('/user/list', './data/userList.json', 'post') // 用户 - 列表
  MockRequest('/user/add', './data/userAdd.json', 'post') // 用户 - 添加
  MockRequest('/user/delete', './data/userDelete.json', 'post') // 用户 - 删除
  MockRequest('/user/modify', './data/userModify.json', 'post') // 用户 - 修改
  MockRequest('/user/modifyPwd', './data/userModifyPwd.json', 'post') // 用户 - 密码 - 修改
  MockRequest('/role/list', './data/roleList.json', 'post') // 角色 - 列表
  MockRequest('/role/add', './data/roleAdd.json', 'post') // 角色 - 添加
  MockRequest('/role/delete', './data/roleDelete.json', 'post') // 角色 - 删除
  MockRequest('/role/modify', './data/roleModify.json', 'post') // 角色 - 修改
  MockRequest('/permission/list', './data/permissionList.json', 'post') // 权限 - 列表
  MockRequest('/announcement/list', './data/announcementList.json', 'post') // 公告 - 列表
	MockRequest('/project/list', './data/projectList.json', 'post') // 项目管理 - 列表
  MockRequest('/project/list', './data/projectList.json', 'post') // 公告 - 列表
	MockRequest('/project/search', './data/lookData1.json', 'post') // 公告 - 列表
	MockRequest('/project/trial', './data/trialList.json', 'post') // 项目管理 - 初审列表
	MockRequest('/project/trialInfo', './data/trialInfoList.json', 'post') // 项目管理 - 初审列表
	MockRequest('/project/final', './data/finalList.json', 'post') // 项目管理 - 终审列表
	MockRequest('/project/finalInfo', './data/finalInfoList.json', 'post') // 项目管理 - 终审列表
}
