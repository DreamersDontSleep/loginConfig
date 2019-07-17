<template>
  <div>
    角色
  </div>
</template>

<script>
import checkPermission from '@/utils/permission' // 权限判断函数
import permission from '@/directive/permission/index.js' // 权限判断指令
export default {
  name: 'Role',
  directives: { permission },
  methods: {
    checkPermission
  }
}
</script>

<style lang="scss" scoped>

</style>
