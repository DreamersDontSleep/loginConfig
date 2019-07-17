import store from '@/store'

export default {
  inserted(el, binding, vnode) {
    const { value } = binding
    const role = store.getters && store.getters.role
    const rolePermissions = store.getters && store.getters.rolePermissions

    if (value && value instanceof Array && value.length > 0) {
      const permissions = value

      const hasPermission = rolePermissions.some(permission => {
        return role === 'admin' || permissions.includes(permission)
      })

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(
        `need permissions! Like v-permission="['config-import','config-export']"`
      )
    }
  }
}
