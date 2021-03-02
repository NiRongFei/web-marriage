<template>
  <el-container id="app">
    <el-header class="header" height="100px">
      <img class="header-logo" src="./assets/images/logo.png" alt="#" />
      <div class="header-title">
        <div class="cn">南京市婚姻公共服务平台</div>
        <div class="en">Nanjing Public Service Platform</div>
      </div>
    </el-header>
    <el-main class="main">
      <router-view />
    </el-main>
    <el-footer class="footer"></el-footer>
  </el-container>
</template>

<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #ff9b97, #fafafa 50%, #fff);

  .header {
    display: flex;
    align-items: center;
    padding: 0 240px;

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
  }
}
</style>
