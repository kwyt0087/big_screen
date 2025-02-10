<template>
  <div class='box'>
    <div class='box-header'>
      <Header></Header>
    </div>
    <div class='box-main'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '../components/header'

export default {
  components: {
    Header
  }
}
</script>
<style lang='less' scoped>
.box {
  height: 100%;
  width: 100%;
  background: url("../assets/img/背景.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;

  .box-header {
    //height: 116px;
    flex: 0 0 116px;
    background: url("../assets/img/title.png");
  }

  .box-main {
    flex: 1
  }
}

/deep/ .el-input__inner {
  height: 28px;
  width: 105px;
  background-color: #124170;
  border: 1px solid #2489ce;
}

///deep/ .el-input__icon {
//  line-height: 31px;
//}
</style>
