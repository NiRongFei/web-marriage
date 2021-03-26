<template>
  <section class="classroom">
    <div class="classroom-info">
      <el-carousel class="classroom-info__swiper" :interval="5000">
        <el-carousel-item v-for="item in 3" :key="item">
          <img
            class="classroom-info__image"
            :src="require(`@/assets/images/img_classroom${item}.png`)"
            alt="#"
          />
        </el-carousel-item>
      </el-carousel>
      <h3 class="classroom-info__title">在线课堂标题</h3>
      <p class="classroom-info__intro">在线课堂简介</p>
    </div>
    <el-card class="classroom-apply">
      <h3 slot="header">在线课堂预约</h3>
      <el-form
        class="classroom-apply__form"
        ref="classroomForm"
        :model="classroomForm"
        :rules="classroomRules"
        label-width="100px"
      >
        <el-form-item label="预约人" prop="name">
          <el-input
            v-model="classroomForm.name"
            :maxlength="20"
            placeholder="输入预约人姓名"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="idcard">
          <el-input
            v-model="classroomForm.idcard"
            type="number"
            :maxlength="18"
            placeholder="输入预约人身份证号"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="mobile">
          <el-input
            v-model="classroomForm.mobile"
            type="number"
            :maxlength="11"
            placeholder="输入预约人联系方式"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="预约日期" prop="date">
          <el-date-picker
            v-model="classroomForm.date"
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
  name: 'ClassroomDetail',
  computed: {
    classroomRules() {
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
      classroomForm: {
        name: '',
        date: '',
        idcard: '',
        mobile: '',
      },
    };
  },
  beforeRouteEnter(to, from, next) {
    to.meta.title = '在线课堂标题';
    next();
  },
};
</script>

<style lang="scss" scoped>
.classroom {
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
