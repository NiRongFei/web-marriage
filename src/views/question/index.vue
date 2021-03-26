<template>
  <section class="faq">
    <h3 class="faq-title">常见问题列表</h3>
    <ul class="faq-list">
      <li class="faq-item" v-for="(item, index) in faqList" :key="index">
        <div class="faq-item__text">
          <b>问：</b><span class="question">{{ item.question }}</span>
        </div>
        <div class="faq-item__text">
          <b>答：</b><span class="solution">{{ item.solution }}</span>
        </div>
      </li>
    </ul>
    <el-pagination
      class="faq-pagination nj-pagination"
      prev-text="上一页"
      next-text="下一页"
      layout="prev,pager,next,total"
      :total="100"
      :page-size="10"
      :pager-count="5"
      :current-page="currentPage"
      background
    >
    </el-pagination>
  </section>
</template>

<script>
export default {
  name: 'Qusetion',
  data() {
    return {
      currentPage: 1,
      faqList: [
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
        {
          question: '办理结婚或离婚手续费要多少？',
          solution: '每对收工本费9元。',
        },
        {
          question: '现在办理结婚登记时要不要婚检？',
          solution: '现在办理婚姻登记无需提供婚检证明。',
        },
        {
          question: '身份证和户口簿遗失了，可以用其他身份证件代替吗？',
          solution:
            '当事人无法提交居民身份证的，婚姻登记机关可根据当事人出具的有效临时身份证办理婚姻登记。当事人无法出具居民户口簿的，婚姻登记机关可凭公安部门或有关户籍管理机构出具的加盖印章的户籍证明办理婚姻登记。',
        },
        {
          question:
            '在民政局婚姻登记处办理协议离婚登记时，一本结婚证遗失了，只用一本结婚证可以办理离婚登记吗？',
          solution:
            '婚姻登记机关可根据另一本结婚证办理离婚登记，但当事人应对结婚证丢失情况作出书面说明，该说明由婚姻登记机关存档。',
        },
        {
          question: '什么是三代以内旁系血亲？',
          solution:
            '三代以内旁系血亲是指向上推算，当事人源于相同的祖父母或者外祖父母，比如兄妹之间、表兄妹之间以及姑姑与侄子、叔叔与侄女的关系均属。',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.faq {
  width: 100%;
  padding: 0 100px;
  border-radius: 5px;
  background-color: #fff;

  &-title {
    width: 100%;
    height: 10vh;
    line-height: 10vh;
    color: #db554e;
    font-size: 24px;
    text-align: center;
  }
  &-list {
    width: 100%;
    min-height: 80vh;
    border-top: 1px solid #db554e;
    border-bottom: 1px solid #db554e;
  }
  &-item {
    width: 100%;
    padding: 2vh 0;

    &__text {
      display: flex;
      align-items: baseline;
      width: 100%;

      + .faq-item__text {
        margin-top: 1vh;
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
</style>
