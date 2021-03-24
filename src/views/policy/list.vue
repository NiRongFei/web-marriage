<template>
  <section class="nj-content">
    <h3 class="nj-content__title">政策法规</h3>
    <ul class="nj-content__list">
      <li class="nj-content__item" v-for="item in 20" :key="item">
        <router-link class="nj-content__item-title" to="/policy/1"
          >关于规范我省婚姻登记和婚姻服务工作的意见
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
  name: 'PolicyList',
  data() {
    return {
      currentPage: 1,
    };
  },
};
</script>

<style></style>
