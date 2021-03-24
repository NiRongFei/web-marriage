<template>
  <section class="nj-content">
    <h3 class="nj-content__title">婚姻要闻</h3>
    <ul class="nj-content__list">
      <li class="nj-content__item" v-for="item in 20" :key="item">
        <router-link class="nj-content__item-title" to="/news/1"
          >南京婚姻家庭辅导服务划定统一标准
        </router-link>
        <span class="nj-content__item-date">2020-02-02</span>
      </li>
    </ul>
    <el-pagination
      class="nj-content__pagination"
      prev-text="上一页"
      next-text="下一页"
      layout="prev,pager,next,total"
      :total="100"
      :page-size="20"
      :pager-count="5"
      :current-page="currentPage"
      background
    >
    </el-pagination>
  </section>
</template>

<script>
export default {
  name: 'NewsList',
  data() {
    return {
      currentPage: 1,
    };
  },
};
</script>

<style></style>
