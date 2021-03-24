<template>
  <section class="activity">
    <el-carousel class="activity-swiper" :interval="5000">
      <el-carousel-item v-for="item in 3" :key="item">
        <img src="../../assets/images/img_banner.png" alt="#" />
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
export default {
  name: 'ActivityDetail',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.activity {
}
</style>
