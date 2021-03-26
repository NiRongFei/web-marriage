<template>
  <section class="message">
    <div class="message-list__wrapper">
      <h3 class="message-list__header">留言回复列表</h3>
      <ul class="message-list" v-infinite-scroll="getMessageData">
        <li class="message-item" v-for="item in 5" :key="item">
          <div class="message-item__text"><b>主题：</b><span class="title">留言主题</span></div>
          <div class="message-item__text"><b>内容：</b><span class="content">留言内容</span></div>
          <div class="message-item__text"><b>回复：</b><span class="reply">留言回复</span></div>
        </li>
      </ul>
      <el-pagination
        class=" nj-pagination"
        style="height: 8vh"
        prev-text="上一页"
        next-text="下一页"
        layout="prev,pager,next,total"
        :total="100"
        :page-size="5"
        :pager-count="5"
        :current-page="currentPage"
        background
      >
      </el-pagination>
    </div>

    <el-card class="message-post">
      <h3 slot="header">留言发布</h3>
      <el-form
        class="message-post__form"
        ref="messageForm"
        :model="messageForm"
        :rules="messageRules"
        label-width="100px"
      >
        <el-form-item label="留言人" prop="name">
          <el-input
            v-model="messageForm.name"
            :maxlength="20"
            placeholder="输入留言人姓名"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="mobile">
          <el-input
            v-model="messageForm.mobile"
            type="number"
            :maxlength="11"
            placeholder="输入留言人联系方式"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="留言主题" prop="title">
          <el-input
            v-model="messageForm.name"
            :maxlength="50"
            placeholder="输入留言主题"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="留言内容" prop="content">
          <el-input
            v-model="messageForm.content"
            type="textarea"
            :rows="5"
            :maxlength="200"
            placeholder="输入留言内容"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="留言图片" porp="images">
          <el-upload
            class="message-post__upload"
            action="#"
            accept="image/*"
            list-type="picture-card"
            :auto-upload="false"
            :limit="5"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item style="margin-top: 50px">
          <el-button type="primary" style="width: 100%">提交留言</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </section>
</template>

<script>
export default {
  name: 'Message',
  computed: {
    messageRules() {
      return {
        name: [{ required: true, message: '请输入留言人姓名' }],
        mobile: [{ required: true, message: '请输入留言人联系方式' }],
        title: [{ required: true, message: '请输入留言主题' }],
        content: [{ required: true, message: '请输入留言内容' }],
      };
    },
  },
  data() {
    return {
      currentPage: 1,
      messageList: 10,
      messageForm: {
        name: '',
        mobile: '',
        title: '',
        content: '',
        images: [],
      },
    };
  },
  methods: {
    getMessageData() {
      this.messageList += 10;
    },
  },
};
</script>

<style lang="scss" scoped>
.message {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  &-list {
    width: 600px;
    min-height: 60vh;
    padding: 10px;
    overflow-y: auto;
    border-top: 1px solid #db554e;
    border-bottom: 1px solid #db554e;

    &__wrapper {
      border-radius: 5px;
      background-color: #fff;
    }
    &__header {
      width: 100%;
      height: 6vh;
      line-height: 6vh;
      color: #db554e;
      font-size: 20px;
      text-align: center;
    }
  }
  &-item {
    width: 100%;
    padding: 1.5vh 0;

    + .message-item {
      border-top: 1px dashed #eee;
    }
    &__text {
      display: flex;
      align-items: baseline;
      width: 100%;
      line-height: 1.2;

      + .message-item__text {
        margin-top: 0.5vh;
      }

      > b {
        color: #db554e;
        font-size: 16px;
      }
      > span {
        max-width: 90%;
        font-size: 14px;
      }
      .title {
        color: #333;
        font-weight: 600;
        @include text-ellipsis;
      }
      .content {
        min-height: 2vh;
        color: #666;
        font-weight: 500;
      }
      .reply {
        min-height: 5vh;
        color: #999;
        font-weight: normal;
      }
    }
  }
  &-post {
    width: 500px;

    &__form {
      padding: 20px;
      overflow-y: auto;

      .el-date-editor {
        width: 100%;
      }
    }
    &__upload {
      width: 100%;
      overflow-x: auto;

      ::v-deep .el-upload-list {
        display: inline-block;

        &__item {
          width: 150px;
          height: 150px;
        }
      }
    }
  }
}
</style>
