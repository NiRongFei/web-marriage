<template>
  <section class="family">
    <div class="family-info">
      <img class="family-info__image" src="../../assets/images/img_booking_family.png" alt="#" />
      <div class="family-info__intro">
        <h3>婚姻家庭辅导</h3>
        <p>
          婚姻登记处聘请心理咨询师、社工、律师等专业人士为公众免费提供婚前辅导、婚姻家庭关系调适、离婚调解、法律咨询等服务，为婚姻家庭保驾护航。
        </p>
      </div>
    </div>
    <el-tabs class="family-tabs" type="border-card">
      <el-tab-pane label="预约课程" lazy>
        <el-form
          class="family-booking"
          ref="bookForm"
          :model="bookForm"
          :rules="bookRules"
          label-width="100px"
        >
          <el-form-item label="预约人" prop="name">
            <el-input
              v-model="bookForm.name"
              :maxlength="20"
              placeholder="输入预约人姓名"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="idcard">
            <el-input
              v-model="bookForm.idcard"
              type="number"
              :maxlength="18"
              placeholder="输入预约人身份证号"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="联系方式" prop="mobile">
            <el-input
              v-model="bookForm.mobile"
              type="number"
              :maxlength="11"
              placeholder="输入预约人联系方式"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="课程主题" prop="theme">
            <el-select v-model="bookForm.theme" placeholder="选择辅导课程主题">
              <el-option v-for="item in 3" :key="item" :label="`辅导课程${item}`" :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="预约日期" prop="date">
            <el-date-picker v-model="bookForm.date" placeholder="选择预约日期"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%">提交预约</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="预约查询" lazy>
        <el-form
          class="family-query"
          ref="queryForm"
          :model="queryForm"
          :rules="queryRules"
          hide-required-asterisk
          inline
        >
          <el-form-item label="手机号" prop="mobile">
            <el-input
              v-model="queryForm.mobile"
              type="number"
              size="medium"
              :maxlength="11"
              placeholder="输入预约人手机号"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="idcard">
            <el-input
              v-model="queryForm.idcard"
              type="number"
              size="medium"
              :maxlength="18"
              placeholder="输入预约人身份证号"
              clearable
            ></el-input>
          </el-form-item>
        </el-form>
        <el-table class="family-table" height="40vh" size="medium" :data="tableData" border stripe>
          <el-table-column label="预约人" prop="name" align="center"></el-table-column>
          <el-table-column label="身份证号" prop="idcard" align="center"></el-table-column>
          <el-table-column label="联系方式" prop="mobile" align="center"></el-table-column>
          <el-table-column label="课程主题" prop="theme" align="center"></el-table-column>
          <el-table-column label="预约日期" prop="date" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <div class="operation">
              <el-popconfirm
                trigger="click"
                placement="right"
                title="是否确定取消预约?"
                cancel-button-type="default"
              >
                <el-button slot="reference" size="mini">取消</el-button>
              </el-popconfirm>
              <el-popover trigger="click" placement="right">
                <el-button slot="reference" size="mini">签入</el-button>
                <img
                  style="diaplay: block;width: 200px;height: 200px"
                  src="../../assets/images/img_qrcode.png"
                  alt="#"
                />
              </el-popover>
            </div>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
export default {
  name: 'MarriageFamily',
  computed: {
    bookRules() {
      return {
        name: [{ required: true, message: '请输入预约人姓名' }],
        date: [{ required: true, message: '请选择预约日期' }],
        theme: [{ required: true, message: '请选择辅导课程主题' }],
        idcard: [{ required: true, message: '请输入预约人身份证' }],
        mobile: [{ required: true, message: '请输入预约联系方式' }],
      };
    },
    queryRules() {
      return {
        mobile: [{ required: true, message: '请输入预约人手机号' }],
        idcard: [{ required: true, message: '请输入预约人身份证' }],
      };
    },
  },
  data() {
    return {
      bookForm: {
        name: '',
        date: '',
        theme: '',
        idcard: '',
        mobile: '',
      },
      queryForm: {
        mobile: '',
        idcard: '',
      },
      tableData: [{ name: '王阳明' }],
    };
  },
};
</script>

<style lang="scss" scoped>
.family {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &-info {
    width: 500px;

    &__image {
      display: block;
      width: 100%;
      height: auto;
    }
    &__intro {
      width: 100%;
      margin-top: 2vh;

      > h3 {
        text-align: center;
      }
      > p {
        margin-top: 1vh;
      }
    }
  }
  &-tabs {
    width: 600px;
    border-radius: 5px;

    ::v-deep .el-tabs {
      &__header,
      &__nav-wrap {
        border-radius: 5px 5px 0 0;
      }
    }
  }
  &-booking {
    height: 50vh;
    padding: 20px 40px;

    .el-select,
    .el-date-editor {
      width: 100%;
    }
  }
  &-query {
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-table {
    height: 40vh;

    .operation {
      display: flex;
      align-items: center;
      flex-direction: column;

      > span + span {
        margin-top: 5px;
      }
    }
  }
}
</style>
