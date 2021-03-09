<template>
  <div id="home">
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
          <li class="main-service__item">
            <img src="../../assets/images/icon_registration.png" alt="#" />
            <span>婚姻登记<br />预约服务</span>
          </li>
          <li class="main-service__item">
            <img src="../../assets/images/icon_premarital.png" alt="#" />
            <span>婚前辅导<br />课程预约</span>
          </li>
          <li class="main-service__item">
            <img src="../../assets/images/icon_devorce.png" alt="#" />
            <span>离婚辅导<br />课程预约</span>
          </li>
          <li class="main-service__item">
            <img src="../../assets/images/icon_certificate.png" alt="#" />
            <span>颁证仪式<br />预约服务</span>
          </li>
        </ul>

        <img class="main-service__image" src="../../assets/images/img_service.png" alt="#" />
      </div>
    </section>

    <section class="registrar shadow">
      <header class="header type-1">登记员风采</header>
      <ul class="registrar-list">
        <li class="registrar-item" v-for="(item, index) in registrarList" :key="index">
          <img class="registrar-item__image" :src="item.image" :alt="item.title" />
          <div class="registrar-item__title">{{ item.title }}</div>
        </li>
      </ul>
    </section>

    <section class="row">
      <section class="col shadow policy">
        <header class="header type-2">政策法规</header>
        <img class="col-image" src="../../assets/images/img_policy.png" alt="#" />
        <ul class="col-list">
          <li class="col-item" v-for="item in 5" :key="item">
            <a>政策法规标题</a>
            <span>2020-02-02</span>
          </li>
        </ul>
      </section>
      <section class="col shadow news">
        <header class="header type-2">婚姻要闻</header>
        <img class="col-image" src="../../assets/images/img_news.png" alt="#" />
        <ul class="col-list">
          <li class="col-item" v-for="item in 5" :key="item">
            <a>婚姻要闻标题</a>
            <span>2020-02-02</span>
          </li>
        </ul>
      </section>
    </section>

    <section class="activity shadow">
      <header class="header type-1">沙龙活动</header>
      <ul class="activity-list">
        <li class="activity-item" v-for="(item, index) in activityList" :key="index">
          <img class="activity-item__image" :src="item.image" :alt="item.title" />
          <div class="activity-item__title">{{ item.title }}</div>
        </li>
      </ul>
    </section>

    <section class="activity shadow">
      <header class="header type-1">在线课堂</header>
      <ul class="activity-list">
        <li class="activity-item" v-for="(item, index) in classroomList" :key="index">
          <img class="activity-item__image" :src="item.image" :alt="item.title" />
          <div class="activity-item__title">{{ item.title }}</div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      registrarList: [
        {
          title: '宋微微——南京市婚姻登记处服务模范',
          image: require('@/assets/images/img_registrar1.png'),
        },
        {
          title: '王飞翔——南京市婚姻登记处服务模范',
          image: require('@/assets/images/img_registrar2.png'),
        },
        {
          title: '李鑫——南京市鼓楼区婚姻登记处服务之星',
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
    };
  },
};
</script>

<style lang="scss" scoped>
#home {
  .header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    color: #db554e;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    background-color: #fff;
    border-bottom: 1px solid #bbb;

    &.type-1 {
      background: url('../../assets/images/bg_header_lg.png') no-repeat 46.5% center/370px;
    }
    &.type-2 {
      background: url('../../assets/images/bg_header_sm.png') no-repeat 70% center/130px;
    }
    &.type-3 {
      text-align: left;
      background: url('../../assets/images/bg_header_sm.png') no-repeat 30% center/130px;
    }
  }
  .shadow {
    transition: box-shadow 0.5s;
    box-shadow: 0 0 5px #ddd;

    &:hover {
      box-shadow: 0 0 10px #bbb;
    }
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
  }
  .col {
    width: 49%;
    padding: 0 10px;
    background-color: #fff;

    &-image {
      display: block;
      width: 100%;
      height: 200px;
      margin-top: 15px;
      object-fit: cover;
    }
    &-list {
      padding: 15px 0;
      list-style: disc inside;
    }
    &-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      color: #666;

      + .col-item {
        margin-top: 20px;
      }
      > a {
        display: inline-block;
        vertical-align: center;
        width: 80%;
        font-size: 14px;
        cursor: pointer;
        @include text-ellipsis;

        &:hover {
          color: #db554e;
          text-decoration: underline solid #db554e;
        }
      }
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
      background-color: rgba($color: #eee, $alpha: 0.2);
    }
  }
  &-service {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 330px;
    height: 450px;
    padding: 20px;
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
      border: 2px groove #ddd;
      background-color: #ff9d9b;
      white-space: pre-wrap;

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
    }
  }
}
.registrar {
  padding: 0 20px;
  margin-top: 40px;
  background-color: #fff;

  &-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
  }
  &-item {
    position: relative;
    width: 360px;
    height: 200px;

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
      height: 45px;
      line-height: 45px;
      padding-left: 20px;
      color: #fff;
      font-size: 14px;
      background-color: rgba($color: #000, $alpha: 0.3);
      @include text-ellipsis;
    }
  }
}
.activity {
  padding: 0 20px;
  margin-top: 40px;
  background-color: #fff;

  &-list {
    display: flex;
    // align-items: center;
    justify-content: space-between;
    padding: 15px 0;
  }
  &-item {
    position: relative;
    width: 360px;
    // height: 200px;

    &__image {
      display: block;
      width: 360px;
      height: 150px;
      object-fit: cover;
    }
    &__title {
      margin-top: 15px;
      color: #666;
      font-size: 14px;
      @include text-ellipsis(3);
    }
  }
}
</style>
