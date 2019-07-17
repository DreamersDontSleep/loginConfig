<template>
  <div>
    用户
  </div>
</template>

<script>
import permission from '@/directive/permission/index.js' // 权限判断指令
import checkPermission from '@/utils/permission' // 权限判断函数
export default {
  name: 'User',
  directives: { permission },
  methods: {
    checkPermission
  }
}
</script>

<style lang="scss" scoped>

</style>
