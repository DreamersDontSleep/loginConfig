import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // getToken from cookie
import { getPermissionFromUserRole } from '@/utils/index'

NProgress.configure({ showSpinner: false })// NProgress configuration

function hasPermission(rolePermissions, permissionRoles) {
  return true
}

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is home will not trigger	afterEach hook, so manually handle it
    } else {
      if (store.getters.name === '') {
        store
          .dispatch('GetInfo')
          .then(res => {
            // 拉取用户信息
            const role = res.data.role.code // res.data.roles // note: roles must be a array! such as: ['editor','develop']
            const rolePermissions = getPermissionFromUserRole(res.data.role)
            store
              .dispatch('GenerateRoutes', { role, rolePermissions })
              .then(() => {
                // 根据roles权限生成可访问的路由表
                router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
                next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
              })
          })
          .catch((err) => {
            store.dispatch('FedLogOut').then(() => {
              Message.error(err || 'Verification failed, please login again')
              next({ path: '/' })
            })
          })
      } else {
        if (
          hasPermission(store.getters.rolePermissions, to.meta.persmissions)
        ) {
          next()
        } else {
          next({ path: '/401', replace: true, query: { noGoBack: true }})
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
