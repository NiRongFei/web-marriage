<template>
  <el-container id="layout">
    <el-header class="header" height="auto">
      <div class="header-wrap" style="height: 100px">
        <img class="header-logo" src="../assets/images/logo.png" alt="#" />
        <div class="header-title">
          <!-- <div class="cn">南京市婚姻公共服务平台</div>
          <div class="en">Nanjing Public Service Platform</div> -->
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
        <template v-for="menu in navMenu">
          <el-submenu
            v-if="menu.meta.submenu"
            :key="menu.name"
            :index="menu.path"
            popper-class="nj-popper"
            popper-append-to-body
          >
            <template slot="title">{{ menu.meta.title }}</template>
            <el-menu-item
              v-for="submenu in menu.children"
              :key="submenu.name"
              :index="menu.path + '/' + submenu.path"
              >{{ submenu.meta.title }}
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :key="menu.name" :index="menu.path">{{
            menu.meta.title
          }}</el-menu-item>
        </template>
      </el-menu>
    </el-header>
    <el-main class="main">
      <div class="main-breadcrumb" v-show="$route.path !== '/home'">
        <i class="el-icon-s-home"></i>
        <el-breadcrumb separator=">">
          <el-breadcrumb-item to="/home" replace>首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="route in breadcrumbs" :key="route.name" :to="route.path">
            {{ route.meta.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <router-view />
    </el-main>
    <el-footer class="footer" style="height: 100px">
      <div class="footer-wrap">
        <span>主办单位：南京市民政局</span>
        <span>承办单位：南京市信息服务中心</span>
      </div>
      <div class="footer-wrap">
        <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备05004952号-7</a>
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32010502010232"
          target="_blank"
        >
          <img
            src="http://mzj.nanjing.gov.cn/images/mzj_gabah_bn.png"
            style="float:left; margin-right:5px"
          />苏公网安备 32010502010232号
        </a>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import { baseRoutes } from '@/router';

export default {
  name: 'Layout',
  computed: {
    navMenu() {
      return baseRoutes;
    },
    activeMenu() {
      console.log(this.$route);
      return this.$route.matched ? this.$route.matched[1].path : this.$route.path;
    },
    breadcrumbs() {
      return this.$route.matched.filter((item) => item.meta && item.meta.title);
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#layout {
  min-height: 100vh;
  background: url('../assets/images/bg_header.png') no-repeat top left/100%,
    linear-gradient(180deg, #ff9b97, #fafafa 50%, #eee);

  .main {
    overflow: visible;
    padding: 20px 240px 80px;

    &-breadcrumb {
      display: flex;
      align-items: center;
      width: 100%;
      height: 5vh;
      margin-bottom: 2vh;
      border-bottom: 1px solid #ccc;

      .el-icon-s-home {
        margin-right: 10px;
        color: #d0524b;
        font-size: 18px;
      }
    }
  }
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
      ::v-deep .el-submenu {
        &__title,
        &__icon-arrow {
          color: #fff !important;
        }
      }
    }
  }
  .footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;
    line-height: 1.5;
    background-color: #fff;

    &-wrap {
      display: flex;
      align-items: center;
      margin-top: 5px;

      a {
        color: #333;

        + a {
          margin-left: 10px;
        }
        &:hover {
          color: $--color-primary;
        }
      }
      span + span {
        margin-left: 10px;
      }
    }
  }
}
</style>
