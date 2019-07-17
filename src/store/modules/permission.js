import { asyncRouterMap, constantRouterMap } from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(rolePermissions, route) {
  if (route.meta && route.meta.permissions) {
    return rolePermissions.some(
      permission => route.meta.permissions.indexOf(permission) >= 0
    )
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, rolePermissions) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(rolePermissions, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, rolePermissions)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { role, rolePermissions } = data
        let accessedRouters
        if (role === 'admin') {
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, rolePermissions)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
