<template>
  <section class="activity">
    <div class="activity-info">
      <el-carousel class="activity-info__swiper" :interval="5000">
        <el-carousel-item v-for="item in 3" :key="item">
          <img
            class="activity-info__image"
            :src="require(`@/assets/images/img_activity${item}.png`)"
            alt="#"
          />
        </el-carousel-item>
      </el-carousel>
      <h3 class="activity-info__title">活动沙龙标题</h3>
      <p class="activity-info__intro">活动沙龙简介</p>
    </div>
    <el-card class="activity-apply">
      <h3 slot="header">活动沙龙预约</h3>
      <el-form
        class="activity-apply__form"
        ref="activityForm"
        :model="activityForm"
        :rules="activityRules"
        label-width="100px"
      >
        <el-form-item label="预约人" prop="name">
          <el-input
            v-model="activityForm.name"
            :maxlength="20"
            placeholder="输入预约人姓名"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="idcard">
          <el-input
            v-model="activityForm.idcard"
            type="number"
            :maxlength="18"
            placeholder="输入预约人身份证号"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="mobile">
          <el-input
            v-model="activityForm.mobile"
            type="number"
            :maxlength="11"
            placeholder="输入预约人联系方式"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="预约日期" prop="date">
          <el-date-picker
            v-model="activityForm.date"
            placeholder="选择预约报名日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item style="margin-top: 50px">
          <el-button type="primary" style="width: 100%">报名预约</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </section>
</template>

<script>
export default {
  name: 'ActivityDetail',
  computed: {
    activityRules() {
      return {
        name: [{ required: true, message: '请输入预约人姓名' }],
        date: [{ required: true, message: '请选择预约报名日期' }],
        idcard: [{ required: true, message: '请输入预约人身份证' }],
        mobile: [{ required: true, message: '请输入预约人联系方式' }],
      };
    },
  },
  data() {
    return {
      activityForm: {
        name: '',
        date: '',
        idcard: '',
        mobile: '',
      },
    };
  },
  beforeRouteEnter(to, from, next) {
    to.meta.title = '活动沙龙标题';
    next();
  },
};
</script>

<style lang="scss" scoped>
.activity {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  &-info {
    width: 550px;

    &__swiper {
      width: 100%;
      height: 300px;

      ::v-deep .el-carousel {
        &__container {
          width: 100%;
          height: 100%;
        }
      }
    }
    &__image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__title {
      margin-top: 2vh;
      text-align: center;
    }
    &__intro {
      margin-top: 1vh;
    }
  }
  &-apply {
    width: 550px;

    &__form {
      // max-height: 50vh;
      padding: 20px;

      .el-date-editor {
        width: 100%;
      }
    }
  }
}
</style>
