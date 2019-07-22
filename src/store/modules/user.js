import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { getPermissionFromUserRole } from '@/utils/index'

const user = {
  state: {
    token: getToken(),
    name: '',
    role: '',
    // avatar: '',
    userInfo: '',
    rolePermissions: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    // SET_AVATAR: (state, avatar) => {
    //   state.avatar = avatar
    // },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_ROLE: (state, role) => {
      state.role = role
    },
    SET_ROLE_PERMISSIONS: (state, rolePermissions) => {
      state.rolePermissions = rolePermissions
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password)
          .then(response => {
						console.log(response)
            const data = response.data
            setToken(data.token)
            commit('SET_TOKEN', data.token)
            resolve()
          }).catch(error => {
            reject(error)
          })
      })
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        const response = {
          'status': 1,
          'msg': '请求成功',
          'data': {
            'create_time': null,
            'modify_time': null,
            'id': 1,
            'nick_name': 'admin',
            'pwd': null,
            'job_number': '9527',
            'user_name': 'admin',
            'position': '董事长',
            'sex': 'man',
            'sex_name': '男',
            'birth_date': '1990-1-1',
            'hire_date': '2008-8-8',
            'connact': '18104042345',
            'emergency_contact': '18962435867',
            'identity_number': '327498199001013452',
            'in_service_state_name': '在职',
            'in_service_state': 1,
            'role_id': 1,
            'role_name': '管理员',
            'role': {
              'create_time': null,
              'modify_time': null,
              'id': 1,
              'code': 'admin',
              'name': '管理员',
              'description': null,
              'state': 0,
              'permissions': [
                {
                  'key': 0,
                  'value': 'user.view',
                  'label': '用户管理',
                  'children': [
                    {
                      'key': 2,
                      'value': 'user.add',
                      'label': '新增用户',
                      'children': []
                    },
                    {
                      'key': 3,
                      'value': 'user.edit',
                      'label': '编辑用户',
                      'children': []
                    },
                    {
                      'key': 4,
                      'value': 'user.delete',
                      'label': '删除用户',
                      'children': []
                    }
                  ]
                },
                {
                  'key': 5,
                  'value': 'role.view',
                  'label': '角色管理',
                  'children': [
                    {
                      'key': 6,
                      'value': 'role.add',
                      'label': '新增角色',
                      'children': []
                    },
                    {
                      'key': 7,
                      'value': 'role.edit',
                      'label': '编辑角色',
                      'children': []
                    },
                    {
                      'key': 8,
                      'value': 'role.delete',
                      'label': '删除角色',
                      'children': []
                    }
                  ]
                }
              ]
            },
            'supplementary_limit': ''
          }
        }

        const data = response.data
        commit('SET_NAME', data.user_name)
        commit('SET_ROLE', data.role.code)
        // commit('SET_AVATAR', data.avatar)
        commit('SET_ROLE_PERMISSIONS', getPermissionFromUserRole(data.role))

        // ! 存储用户信息
        commit('SET_USER_INFO', data)

        resolve(response)

//          getInfo()
//            .then(response => {
//              const data = response.data
//              commit('SET_NAME', data.user_name)
//              commit('SET_ROLE', data.role.code)
//              // commit('SET_AVATAR', data.avatar)
//              commit('SET_ROLE_PERMISSIONS', getPermissionFromUserRole(data.role))
// 
//             // ! 存储用户信息
//              commit('SET_USER_INFO', data)
// 
//              resolve(response)
//            }).catch(error => {
//              reject(error)
//           })
      })
    },

    // 登出
    LogOut({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLE', '')
          commit('SET_SET_USER_INFO', '')
          commit('SET_ROLE_PERMISSIONS', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLE', '')
        commit('SET_SET_USER_INFO', '')
        commit('SET_ROLE_PERMISSIONS', [])
        removeToken()
        resolve()
      })
    }
  }
}

export default user
