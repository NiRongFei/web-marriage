<template>
  <div id="home">
    <div v-show="showFloater" class="floater">
      <i class="floater-close el-icon-circle-close" @click="showFloater = false" />
      <img class="floater-image" src="../../assets/images/img_activity.png" alt="#" />
    </div>
    <ul class="toolbar">
      <li><i class="el-icon-arrow-up" /></li>
      <li><i class="el-icon-phone-outline" /></li>
      <li><i class="el-icon-edit-outline" /></li>
      <li><i class="el-icon-message" /></li>
      <li><i class="el-icon-map-location" /></li>
      <li><i class="el-icon-arrow-down" /></li>
    </ul>

    <section class="main">
      <el-carousel class="main-swiper" :interval="5000">
        <el-carousel-item v-for="item in 3" :key="item">
          <img class="main-swiper__image" src="../../assets/images/img_banner.png" alt="#" />
          <div class="main-swiper__title">南京市婚姻登记系统正式上线</div>
        </el-carousel-item>
      </el-carousel>
      <div class="main-service">
        <h3 class="main-service__title">快捷服务</h3>
        <ul class="main-service__list">
          <router-link class="main-service__item" tag="li" to="/booking/register">
            <img src="../../assets/images/icon_registration.png" alt="#" />
            <span>婚姻登记<br />预约服务</span>
          </router-link>
          <router-link class="main-service__item" tag="li" to="/booking/certificate">
            <img src="../../assets/images/icon_certificate.png" alt="#" />
            <span>颁证仪式<br />预约服务</span>
          </router-link>
          <router-link class="main-service__item" tag="li" to="/booking/family">
            <img src="../../assets/images/icon_premarital.png" alt="#" />
            <span>婚姻家庭<br />辅导预约</span>
          </router-link>
          <router-link class="main-service__item" tag="li" to="/activity/list">
            <img src="../../assets/images/icon_devorce.png" alt="#" />
            <span>活动沙龙<br />报名预约</span>
          </router-link>
        </ul>

        <img class="main-service__image" src="../../assets/images/img_service.png" alt="#" />
      </div>
    </section>

    <section class="section section-shadow registrar">
      <header class="section-header style-1">登记员风采</header>
      <ul class="registrar-list">
        <router-link
          class="registrar-item"
          v-for="(item, index) in registrarList"
          :key="index"
          :to="`/registrar/${index}`"
          tag="li"
        >
          <img class="registrar-item__image" :src="item.image" :alt="item.title" />
          <div class="registrar-item__title">{{ item.title }}</div>
        </router-link>
      </ul>
    </section>

    <section class="section section-row">
      <section class="section-col section-shadow policy">
        <header class="section-header style-2">政策法规</header>
        <router-link class="section-col__link" to="/policy">
          <img class="section-col__image" src="../../assets/images/img_policy.png" alt="#" />
        </router-link>
        <ul class="section-col__list">
          <li class="section-col__item" v-for="item in 5" :key="item">
            <router-link :to="`/policy/${item}`"
              >关于规范我省婚姻登记和婚姻服务工作的意见
            </router-link>
            <span>2020-02-02</span>
          </li>
        </ul>
      </section>
      <section class="section-col section-shadow news">
        <header class="section-header style-2">婚姻要闻</header>
        <router-link class="section-col__link" to="/news">
          <img class="section-col__image" src="../../assets/images/img_news.png" alt="#" />
        </router-link>
        <ul class="section-col__list">
          <li class="section-col__item" v-for="item in 5" :key="item">
            <router-link :to="`/news/${item}`">南京婚姻家庭辅导服务划定统一标准</router-link>
            <span>2020-02-02</span>
          </li>
        </ul>
      </section>
    </section>

    <section class="section section-shadow module">
      <header class="section-header style-1">
        <span>活动沙龙</span>
        <router-link class="section-header__link" to="/activity/list"
          >更多活动<i class="el-icon-d-arrow-right" />
        </router-link>
      </header>
      <ul class="module-list">
        <router-link
          class="module-item"
          v-for="(item, index) in activityList"
          :key="index"
          :to="`/activity/${index}`"
          tag="li"
        >
          <img class="module-item__image" :src="item.image" :alt="item.title" />
          <div class="module-item__title">{{ item.title }}</div>
        </router-link>
      </ul>
    </section>

    <section class="section section-shadow module">
      <header class="section-header style-1">在线课堂</header>
      <ul class="module-list">
        <router-link
          class="module-item"
          v-for="(item, index) in classroomList"
          :key="index"
          :to="`/classroom/${index}`"
          tag="li"
        >
          <img class="module-item__image" :src="item.image" :alt="item.title" />
          <div class="module-item__title">{{ item.title }}</div>
        </router-link>
      </ul>
    </section>

    <section class="section section-row">
      <section class="section-col section-shadow message">
        <header class="section-header style-3">
          <span>留言回复</span>
          <router-link class="section-header__link" to="/message"
            >前往留言<i class="el-icon-d-arrow-right" />
          </router-link>
        </header>
        <ul class="message-list">
          <li class="message-item" v-for="(item, index) in messageList" :key="index">
            <div class="message-item__text">
              <b>主题：</b><span class="title">{{ item.title }}</span>
            </div>
            <div class="message-item__text">
              <b>内容：</b><span class="content">{{ item.content }}</span>
            </div>
            <div class="message-item__text">
              <b>回复：</b><span class="reply">{{ item.reply }}</span>
            </div>
          </li>
        </ul>
      </section>
      <section class="section-col section-shadow question">
        <header class="section-header style-3">
          <span>常见问题</span>
          <router-link class="section-header__link" to="/question"
            >更多问题<i class="el-icon-d-arrow-right" />
          </router-link>
        </header>
        <ul class="question-list">
          <li class="question-item" v-for="(item, index) in questionList" :key="index">
            <div class="question-item__text">
              <b>问：</b><span class="question">{{ item.question }}</span>
            </div>
            <div class="question-item__text">
              <b>答：</b><span class="solution">{{ item.solution }}</span>
            </div>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      showFloater: true,
      registrarList: [
        {
          title: '宋微微-南京市婚姻登记处服务模范',
          image: require('@/assets/images/img_registrar1.png'),
        },
        {
          title: '王飞翔-南京市婚姻登记处服务模范',
          image: require('@/assets/images/img_registrar2.png'),
        },
        {
          title: '李鑫-南京市鼓楼区婚姻登记处服务之星',
          image: require('@/assets/images/img_registrar3.png'),
        },
      ],
      activityList: [
        {
          title:
            '【健康活动】女性营养健康沙龙第二期即将于2020 年11月11日在南京市婚姻登记处举办，欢迎报名参加',
          image: require('@/assets/images/img_activity1.png'),
        },
        {
          title:
            '【生活乐趣】让花艺点亮我们的生活主题活动即将于2020年10月19日在南京市婚姻登记处举办，欢迎报名参加',
          image: require('@/assets/images/img_activity2.png'),
        },
        {
          title:
            '【一起秀爱】南京市某某婚姻庆典公司联合婚姻登记处于2020年10月18日举办爱情甜蜜告白活动，为羞涩的你进行一场爱的宣言',
          image: require('@/assets/images/img_activity3.png'),
        },
      ],
      classroomList: [
        {
          title: '【婚姻家庭小课堂】 婚姻是一个双方经营的过程',
          image: require('@/assets/images/img_classroom1.png'),
        },
        {
          title: '【脱单计划】 让单身的你拥有更多的机会去了解他和她',
          image: require('@/assets/images/img_classroom2.png'),
        },
        {
          title: '【夫妻课堂】 夫妻大讲堂，讲诉夫妻间相处之道',
          image: require('@/assets/images/img_classroom3.png'),
        },
      ],
      messageList: [
        { title: '留言主题', content: '留言内容', reply: '留言回复内容' },
        { title: '留言主题', content: '留言内容', reply: '留言回复内容' },
        { title: '留言主题', content: '留言内容', reply: '留言回复内容' },
      ],
      questionList: [
        {
          question: '现在国内居民办理结婚登记要带哪些证件和资料？',
          solution:
            '男女双方的户口本、身份证（原件及复印件）和3张大2寸的合照（黑白、彩色都可以）。属于集体户口的，可凭集体户口簿内本人的户口卡片（需加盖户口专用章）；未加盖户口专用章的，需提供首页原件，或首页复印件（需要加盖单位公章）。',
        },
        {
          question: '我的结婚证丢失了，可以补领结婚证吗？',
          solution:
            '结婚证、离婚证遗失或者损毁的，可以持户口簿、身份证向原办理婚姻登记的机关或者一方常住户口所在地的婚姻登记机关申请补领。申请补领时的婚姻状况因离婚、丧偶或者复婚发生改变的，不予补发婚姻登记证，可由婚姻登记机关出具婚姻登记记录证明。原婚姻登记不是在申请补领婚姻登记证的婚姻登记机关办理的，应当由申请人提供婚姻登记档案证明材料。',
        },
        {
          question: '现在国内居民办理协议离婚要带哪些证件和资料？',
          solution:
            '男女双方的户口本、身份证、结婚证和离婚协议书（一式三份，免签名），2寸单人照片各2张（黑白、彩色都可以）。协议书应当载明双方当事人自愿离婚的意思表示以及对子女抚养、财产及债务处理等事项协商一致的意见。①应写明双方现有房产及其他不动产的名称和详细地址，离婚后所有权归谁所有；动产部分如何分割、债权债务如何处理，如何帮助生活困难的一方等;②有子女的，应写明子女姓名、性别、年龄以及离婚后子女由何方实际抚养，未实际抚养的一方应付抚养费的数额、支付时间、方式及如何探视子女等。',
        },
        {
          question: '现在国内居民办理协议离婚时，可不可以委托他人来办理？',
          solution:
            '不可以。在民政局婚姻登记处办理协议离婚必须双方到场。如果双方达不成协议的，应该去法院办理离婚手续。',
        },
        {
          question: '办理结婚或离婚手续时间要多少？',
          solution: '约半个小时。',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#home {
  .floater {
    position: fixed;
    top: 50vh;
    left: 0;
    width: 240px;
    height: 240px;
    margin-top: -120px;
    box-shadow: 0 0 5px #ddd;

    &:hover {
      box-shadow: 0 0 10px #bbb;
    }

    &-close {
      position: absolute;
      top: 5px;
      right: 5px;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
    }
    &-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
  .toolbar {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 50vh;
    right: 8px;
    width: 50px;
    height: 250px;
    margin-top: -125px;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
    background-color: rgba($color: #ccc, $alpha: 0.8);

    i {
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        color: #eee;
      }
    }
  }
  .main {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-swiper {
      width: 850px;
      height: 450px;
      border-radius: 5px;

      ::v-deep .el-carousel {
        &__container {
          width: 100%;
          height: 100%;
        }
        &__indicators {
          bottom: 50px;
        }
        &__button {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        &__arrow {
          font-size: 24px;
        }
      }
      &__image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &__title {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding-left: 20px;
        color: #fff;
        font-size: 16px;
        background-color: rgba($color: #eee, $alpha: 0.2);
      }
    }
    &-service {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 320px;
      height: 450px;
      padding: 20px;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 0 5px #bbb;

      &__title {
        width: 100%;
        height: 40px;
        line-height: 40px;
        color: #db554e;
        font-size: 20px;
        border-bottom: 1px solid #ddd;
      }
      &__list {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-between;
      }
      &__item {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 130px;
        height: 65px;
        margin: 10px 0;
        color: #fff;
        font-size: 16px;
        border-radius: 5px;
        border: 2px groove #eee;
        background-color: #ff9d9b;
        white-space: pre-wrap;
        cursor: pointer;

        &:hover {
          border-color: #db554e;
          box-shadow: 0 0 5px #bbb;
        }
        > img {
          width: 30px;
          height: auto;
          margin-right: 10px;
        }
      }
      &__image {
        widows: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 5px;
      }
    }
  }
  .section {
    margin-top: 30px;
    border-radius: 5px;

    &-header {
      position: relative;
      width: 100%;
      height: 60px;
      line-height: 60px;
      color: #db554e;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      background-color: #fff;
      border-bottom: 1px solid #bbb;

      &.style-1 {
        background: url('../../assets/images/bg_header_lg.png') no-repeat 46.5% center/370px;
      }
      &.style-2 {
        background: url('../../assets/images/bg_header_sm.png') no-repeat 72% center/130px;
      }
      &.style-3 {
        text-align: left;
        background: url('../../assets/images/bg_header_sm.png') no-repeat 18% center/130px;
      }
      &__link {
        position: absolute;
        top: 50%;
        right: 10px;
        color: #db554e;
        font-size: 14px;
        font-weight: 500;
        transform: translateY(-50%);

        &:hover {
          text-decoration: underline;
        }
      }
    }
    &-shadow {
      transition: box-section-shadow 0.5s;
      box-shadow: 0 0 5px #ddd;

      &:hover {
        box-shadow: 0 0 10px #bbb;
      }
    }
    &-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-col {
      width: 580px;
      padding: 0 15px;
      border-radius: 5px;
      background-color: #fff;

      &__image {
        display: block;
        width: 100%;
        height: 200px;
        margin-top: 15px;
        object-fit: cover;
      }
      &__list {
        padding: 15px 0;
        list-style: disc inside;
      }
      &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        color: #666;

        + .section-col__item {
          margin-top: 15px;
        }
        > a {
          display: inline-block;
          vertical-align: center;
          max-width: 80%;
          color: #333;
          font-size: 14px;
          cursor: pointer;
          @include text-ellipsis;

          &:hover {
            color: #db554e;
            text-decoration: underline #db554e;
          }
        }
      }
    }
  }
  .module {
    padding: 0 20px;
    background-color: #fff;

    &-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 15px 0;
    }
    &-item {
      position: relative;
      width: 360px;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        box-shadow: 0 0 10px #bbb;
      }
      &__image {
        display: block;
        width: 360px;
        height: 150px;
        object-fit: cover;
        border-radius: 5px 5px 0 0;
      }
      &__title {
        width: 100%;
        height: 70px;
        padding: 10px;
        color: #666;
        font-size: 14px;
        @include text-ellipsis(3);
      }
    }
  }
  .registrar {
    padding: 0 20px;
    background-color: #fff;

    &-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0;
    }
    &-item {
      position: relative;
      width: 360px;
      height: 220px;
      cursor: pointer;
      border-radius: 5px;

      &:hover {
        box-shadow: 0 0 10px #bbb;
      }
      &__image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
      &__title {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding-left: 25px;
        color: #fff;
        font-size: 14px;
        border-radius: 0 0 5px 5px;
        background-color: rgba($color: #000, $alpha: 0.3);
        @include text-ellipsis;
      }
    }
  }
  .message {
    &-list {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 400px;
      padding: 0 20px;
    }
    &-item {
      flex: 1;
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
          flex: auto;
          font-size: 14px;
        }
        .title {
          color: #333;
          font-weight: 600;
          @include text-ellipsis;
        }
        .content {
          max-height: 3vh;
          color: #666;
          font-weight: 500;
          @include text-ellipsis(2);
        }
        .reply {
          max-height: 6vh;
          color: #999;
          font-weight: normal;
          @include text-ellipsis(3);
        }
      }
    }
  }
  .question {
    &-list {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 400px;
      padding: 20px;
    }
    &-item {
      width: 100%;

      &__text {
        display: flex;
        align-items: baseline;
        width: 100%;

        + .question-item__text {
          margin-top: 0.5vh;
        }
        > b {
          font-size: 16px;
        }
        > span {
          flex: auto;
          font-size: 14px;
        }
        .question {
          color: #333;
          @include text-ellipsis(2);
        }
        .solution {
          color: #666;
          @include text-ellipsis(3);
        }
      }
    }
  }
}
</style>
