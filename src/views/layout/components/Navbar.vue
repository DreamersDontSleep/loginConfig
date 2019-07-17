<template>
  <el-menu class="navbar" mode="horizontal">
    <router-link to="/">
      <img class="company-logo" src="https://picsum.photos/50/50" alt="logo">
      <h2 class="company-title">江苏天圣房屋审核系统</h2>
    </router-link>
    <el-tooltip :open-delay="150" class="msg-container" content="此处显示通知消息" placement="bottom" effect="light">
      <el-button type="text" style="color: #000"><svg-icon icon-class="msg"/></el-button>
    </el-tooltip>
    <el-dropdown class="avatar-container" trigger="click">
      <!-- <div class="avatar-wrapper">
        <img src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg.jpg" class="user-avatar">
        <i class="el-icon-caret-bottom"/>
      </div> -->
      <el-button type="text">
        {{ name }} <i class="el-icon-arrow-down el-icon--right" />
      </el-button>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item> 首页 </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span style="display:block;" @click="logout">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['name'])
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  z-index: 2000;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  // background: linear-gradient(
  //   to bottom,
  //   rgb(255, 255, 255) 0%,
  //   rgb(245, 245, 245) 50%,
  //   rgb(220, 220, 220) 100%
  // );
  .company-title {
    display: inline-block;
    font-size: 18px;
    letter-spacing: 2px;
    margin: 0;
    line-height: 50px;
    color: rgb(88, 68, 68);
  }
  .company-logo {
    height: 30px;
    border-radius: 10px;
    vertical-align: middle;
    margin: 0 10px 0 10px;
  }
  // .screenfull {
  //   position: absolute;
  //   right: 90px;
  //   top: 16px;
  //   color: red;
  // }
  .msg-container {
    position: absolute;
    right: 95px;
    margin-top: 5px;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 20px;
    // .avatar-wrapper {
    //   cursor: pointer;
    //   margin-top: 5px;
    //   position: relative;
    //   line-height: initial;
    //   .user-avatar {
    //     width: 40px;
    //     height: 40px;
    //     border-radius: 10px;
    //   }
    //   .el-icon-caret-bottom {
    //     position: absolute;
    //     right: -20px;
    //     top: 25px;
    //     font-size: 12px;
    //   }
    // }
  }
}
</style>

