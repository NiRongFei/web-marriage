<template>
  <el-container id="layout">
    <el-header class="header" height="auto">
      <div class="header-wrap" style="height: 100px">
        <img class="header-logo" src="../assets/images/logo.png" alt="#" />
        <div class="header-title">
          <div class="cn">南京市婚姻公共服务平台</div>
          <div class="en">Nanjing Public Service Platform</div>
        </div>
      </div>
      <el-menu
        class="header-menu"
        mode="horizontal"
        text-color="#fff"
        background-color="#d0524b"
        active-text-color="#d0524b"
        :default-active="activeMenu"
        unique-opened
        router
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/news">婚姻要闻</el-menu-item>
        <el-menu-item index="/notice">通知公告</el-menu-item>
        <el-menu-item index="/policy">政策法规</el-menu-item>
        <el-menu-item index="/register">预约登记</el-menu-item>
      </el-menu>
    </el-header>
    <el-main class="main">
      <router-view />
    </el-main>
    <el-footer class="footer"></el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Layout',
  computed: {
    activeMenu() {
      return this.$route.fullPath;
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#layout {
  width: 100vw;
  height: 100vh;
  background: url('../assets/images/bg_header.png') no-repeat top left/100%,
    linear-gradient(180deg, #ff9b97, #fafafa 50%, #fff);

  .header {
    padding: 0;

    &-wrap {
      display: flex;
      align-items: center;
      padding: 0 240px;
    }
    &-logo {
      width: 80px;
      height: 80px;
      margin-right: 10px;
      border-radius: 50%;
      border: 2px solid #fff;
    }
    &-title {
      color: #d0524b;
      font-weight: bold;
      font-family: 'FangZhengZZH';
      text-shadow: #fff 0 -1px, #fff 1px 0, #fff 0 1px, #fff -1px 0;
      .cn {
        font-size: 32px;
      }
      .en {
        font-size: 20px;
      }
    }
    &-menu {
      padding-left: 240px;
      border-color: #9e3630;

      .el-menu-item {
        padding: 0 30px;
        font-size: 16px;

        &.is-active {
          background-color: rgba($color: #fff, $alpha: 0.6) !important;
        }
      }
    }
  }
}
</style>
