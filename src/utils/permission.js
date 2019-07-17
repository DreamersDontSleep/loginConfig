import store from '@/store'

/**
 * @param {Array} value
 * @returns {Boolean}
 */
export default function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    const role = store.getters && store.getters.role

    const rolePermissions = store.getters && store.getters.rolePermissions

    const permissions = value

    const hasPermission = rolePermissions.some(permission => {
      return role === 'admin' || permissions.includes(permission)
    })

    if (!hasPermission) {
      return false
    }
    return true
  } else {
    console.error(
      `need permissions! Like v-permission="['config-import','config-export']"`
    )
    return false
  }
}
