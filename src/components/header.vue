<template>
  <div style="position: relative">
    <img class="topTitle" src="../assets/img/word.png" alt="">
    <div class="banner-box">
      <div class="banner">
        <!--        <img class="lb" src="../assets/img/lb.png" alt="">-->
        <span>{{ msg }}</span></div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      intervalId: null, // 在data上定义 定时器Id
      msg: '本库目前已收集长庆油田岩石力学实测井348井次，样品5024样次，涉及华庆、姬塬、合水、安塞等27个区块，囊括长6-长10五个纵向层位，测试参数包括杨氏模量、泊松比、地应力、断裂韧性在内的数十项测试参数，全面的岩石力学数据为钻完井工程优化设计和区块效果分析提供了重要指导。'
    }
  },
  created() {
    this.lang()
  },
  methods: {
    lang() {
      if (this.intervalId !== null) {
        return
      }

      var _this = this
      this.intervalId = setInterval(function () {
        // 获取到头的第一个字符
        var start = _this.msg.substring(0, 1)

        // 获取到后面的所有字符
        var end = _this.msg.substring(1)

        // 重新拼接得到的字符串 并赋值给this.msg
        _this.msg = end + start

      }, 400)
    },
  }
}
</script>

<style lang='less' scoped>
.topTitle {
  display: inline-block;
  position: absolute;
  left: 37%;
  top: 20px;
}

.banner-box {
  width: 100%;
  height: 48px;
  position: absolute;
  top: 97px;
  padding-right: 40px;
  padding-left: 40px;
  box-sizing: border-box;

  .banner {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    border: 1px solid #1c5f94;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    .lb {
      display: inline-block;
      height: 40px;
      width: 40px;
      margin-left: 10px;
    }

    span {
      width: 1000px;
      display: inline-block;
      flex: 1;
      font-size: 18px;
      height: 18px;
      overflow: hidden;
      color: #6198ae;
      //font-family: "Microsoft YaHei" ! important;
      font-family: "STSong" ! important;
      font-weight: bold;
    }
  }
}


</style>
