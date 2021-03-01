<template>
  <el-container id="layout">
    <el-header></el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
