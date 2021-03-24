<template>
  <section class="activity-list">
    <el-card class="activity-item" v-for="item in 10" :key="item">
      <div class="activity-item__header" slot="header">
        <span>活动沙龙标题</span>
        <router-link :to="`/activity/${item}`">报名预约</router-link>
      </div>
      <img class="activity-item__image" src="../../assets/images/img_activity.png" alt="#" />
      <div class="activity-item__intro">活动沙龙内容简介</div>
    </el-card>
  </section>
</template>

<script>
export default {
  name: 'ActivityList',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.activity {
  &-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &-item {
    width: 32%;
    margin: 10px 0;

    ::v-deep .el-card {
      &__header {
        padding: 10px;
      }
      &__body {
        padding: 10px;
      }
    }
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > span {
        font-weight: 600;
      }
      > a {
        color: #db554e;
      }
    }
    &__image {
      display: block;
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    &__intro {
      width: 100%;
      height: 10vh;
      margin-top: 1vh;
      @include text-ellipsis(5);
    }
  }
}
</style>
