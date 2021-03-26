<template>
  <section class="certific">
    <div class="certific-info">
      <img class="certific-info__image" src="../../assets/images/img_booking_family.png" alt="#" />
      <h3 class="certific-info__title">颁证仪式预约</h3>
      <p class="certific-info__intro">
        婚姻登记处聘请心理咨询师、社工、律师等专业人士为公众免费提供婚前辅导、婚姻家庭关系调适、离婚调解、法律咨询等服务，为婚姻家庭保驾护航。
      </p>
    </div>
    <el-tabs class="certific-tabs" type="border-card">
      <el-tab-pane label="预约颁证" lazy>
        <el-form
          class="certific-booking"
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
          <el-form-item label="颁证机构" prop="theme">
            <el-select v-model="bookForm.theme" placeholder="选择颁证仪式机构">
              <el-option v-for="item in 5" :key="item" :label="`婚姻登记处${item}`" :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="仪式风格" prop="theme">
            <el-select v-model="bookForm.theme" placeholder="选择颁证仪式风格">
              <el-option label="中式风格" :value="1"></el-option>
              <el-option label="西式风格" :value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="预约日期" prop="date">
            <el-date-picker v-model="bookForm.date" placeholder="选择预约报名日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="其它需求" prop="remark">
            <el-input
              v-model="bookForm.remark"
              type="textarea"
              :rows="5"
              :maxlength="100"
              placeholder="其它需求备注内容"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item style="margin-top: 50px">
            <el-button type="primary" style="width: 100%">报名预约</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="预约查询" lazy>
        <el-form
          class="certific-query"
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
              size="small"
              :maxlength="11"
              placeholder="输入预约手机号"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="idcard">
            <el-input
              v-model="queryForm.idcard"
              type="number"
              size="small"
              :maxlength="18"
              placeholder="输入预约身份证号"
              clearable
            ></el-input>
          </el-form-item>
        </el-form>
        <el-table class="certific-table" :data="tableData" size="medium" border stripe>
          <el-table-column label="预约人" prop="name" align="center" width="150"></el-table-column>
          <el-table-column
            label="身份证号"
            prop="idcard"
            align="center"
            width="200"
          ></el-table-column>
          <el-table-column
            label="联系方式"
            prop="mobile"
            align="center"
            width="150"
          ></el-table-column>
          <el-table-column
            label="颁证机构"
            prop="organ"
            align="center"
            width="150"
          ></el-table-column>
          <el-table-column
            label="仪式风格"
            prop="style"
            align="center"
            width="150"
          ></el-table-column>
          <el-table-column
            label="预约日期"
            prop="date"
            align="center"
            width="200"
          ></el-table-column>
          <el-table-column label="操作" align="center" width="100" fixed="right">
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
  name: 'Marriagecertific',
  computed: {
    bookRules() {
      return {
        name: [{ required: true, message: '请输入预约人姓名' }],
        date: [{ required: true, message: '请选择预约报名日期' }],
        theme: [{ required: true, message: '请选择颁证仪式主题' }],
        idcard: [{ required: true, message: '请输入预约人身份证' }],
        mobile: [{ required: true, message: '请输入预约人联系方式' }],
        organ: [{ required: true, message: '请选择颁证仪式机构' }],
        style: [{ required: true, message: '请选择颁证仪式风格' }],
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
        organ: '',
        style: '',
        remark: '',
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
.certific {
  display: flex;
  // align-items: center;
  justify-content: space-between;

  &-info {
    width: 550px;

    &__image {
      display: block;
      width: 100%;
      height: auto;
    }
    &__title {
      width: 100%;
      margin-top: 2vh;
      text-align: center;
    }
    &__intro {
      margin-top: 1vh;
    }
  }
  &-tabs {
    width: 550px;
    border-radius: 5px;

    ::v-deep .el-tabs {
      &__header,
      &__nav-wrap {
        border-radius: 5px 5px 0 0;
      }
    }
  }
  &-booking {
    // max-height: 50vh;
    padding: 20px;
    overflow-y: auto;

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
