const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  // avatar: state => state.user.avatar,
  name: state => state.user.name,
  role: state => state.user.role,
  userInfo: state => state.user.userInfo,

  // roles: state => state.user.roles
  permission_routers: state => state.permission.routers,
  rolePermissions: state => state.user.rolePermissions,
  addRouters: state => state.permission.addRouters
}
export default getters
