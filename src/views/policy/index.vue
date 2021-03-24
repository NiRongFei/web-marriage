<template>
  <section class="nj-wrapper policy">
    <aside class="nj-aside">
      <header class="nj-aside__title">政策法规</header>
      <el-menu class="nj-aside__menu" active-text-color="#d0524b" unique-opened router>
        <el-menu-item v-for="item in 3" :key="item" index="/policy"
          >政策法规{{ item }}
        </el-menu-item>
      </el-menu>
    </aside>

    <main class="nj-main">
      <router-view />
    </main>
  </section>
</template>

<script>
export default {
  name: 'Policy',
  data() {
    return {};
  },
};
</script>

<style></style>
