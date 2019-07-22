import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'Home',
    // hidden: true,
    children: [{
      path: 'home',
      component: () => import('@/views/home/index'),
      meta: { title: '业务系统', icon: '', permissions: [] }
    }]
  }
]

export default new Router({
  // mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
	{
	  path: '/business',
	  component: Layout,
	  noredirect: true,
	  redirect: '/business/index',
	  name: 'System',
		hidden: true,
	  meta: { title: '业务系统', permissions: [] },
	  children: [{
	    path: 'business/index',
	    name: 'business',
	    component: () => import('@/views/business/index'),
	    meta: { title: '业务系统', permissions: [] }
	  }]
	},
  {
    path: '/system',
    component: Layout,
    noredirect: true,
    redirect: '/system/user/index',
    name: 'System',
		hidden: true,
    meta: { title: '系统管理', permissions: ['role.view', 'user.view'] },
    children: [{
      path: 'user/index',
      name: 'User',
      component: () => import('@/views/user/index'),
      meta: { title: '用户管理', permissions: ['user.view'] }
    },
    {
      path: 'role/index',
      name: 'Role',
      component: () => import('@/views/role/index'),
      meta: { title: '角色管理', permissions: ['role.view'] }
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]
