<template>
  <section class="registrar">
    <img class="registrar-image" src="../../assets/images/img_registrar1.png" alt="#" />
    <h3 class="registrar-title">宋微微-南京市婚姻登记处服务模范</h3>
    <p class="registrar-intro">婚姻登记员风采介绍</p>
  </section>
</template>

<script>
export default {
  name: 'RegistrarStyle',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.registrar {
  display: flex;
  align-items: center;
  flex-direction: column;

  &-image {
    width: 500px;
    height: auto;
  }
  &-title {
    margin-top: 2vh;
  }
  &-intro {
    width: 800px;
    margin-top: 4vh;
  }
}
</style>
