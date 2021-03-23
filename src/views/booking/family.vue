<template>
  <section class="family">
    <div class="family-info">
      <img src="../../assets/images/img_booking_family.png" alt="#" />
      <div class="family-info__intro">
        <h3>婚姻家庭辅导</h3>
        <p>
          婚姻登记处聘请心理咨询师、社工、律师等专业人士为公众免费提供婚前辅导、婚姻家庭关系调适、离婚调解、法律咨询等服务，为婚姻家庭保驾护航。
        </p>
      </div>
    </div>
    <el-tabs class="family-tabs" type="border-card">
      <el-tab-pane label="课程预约" lazy>
        <el-form class="family-booking" ref="bookForm" :model="bookForm" :rules="bookRules">
          <el-form-item label="课程主题" prop="theme" required>
            <el-select v-model="bookForm.theme" placeholder="选择课程主题">
              <el-option v-for="item in 3" :key="item" :label="`辅导课程${item}`" :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="预约人" prop="name" required>
            <el-input
              v-model="bookForm.name"
              :maxlength="20"
              placeholder="预约人姓名"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="idcard" required>
            <el-input
              v-model="bookForm.idcard"
              type="number"
              :maxlength="18"
              placeholder="身份证号码"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="联系方式" prop="contact" required>
            <el-input
              v-model="bookForm.contact"
              type="number"
              :maxlength="11"
              placeholder="预约联系方式"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="预约日期" prop="date" required>
            <el-date-picker v-model="bookForm.date" placeholder="选择预约日期"></el-date-picker>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="信息查询" lazy>
        <el-form class="family-query" ref="queryForm" :model="queryForm">
          <el-form-item label="手机号" prop="contact" required>
            <el-input
              v-model="bookForm.contact"
              type="number"
              :maxlength="11"
              placeholder="预约手机号"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="idcard" required>
            <el-input
              v-model="bookForm.idcard"
              type="number"
              :maxlength="18"
              placeholder="身份证号码"
              clearable
            ></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
export default {
  name: 'MarriageFamily',
  data() {
    return {
      bookForm: {
        name: '',
        date: '',
        theme: '',
        idcard: '',
        contact: '',
      },
      queryForm: {
        mobile: '',
        idcard: '',
      },
      bookRules: {},
    };
  },
};
</script>

<style lang="scss" scoped>
.family {
  display: flex;
  align-items: center;
}
</style>
