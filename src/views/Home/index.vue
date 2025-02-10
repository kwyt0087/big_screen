<template>
  <div class='container'>
    <div class='left'>
      <div class='left-top'>

        <leftTop></leftTop>
      </div>
      <div class='left-bot'>

        <leftBot></leftBot>
      </div>
    </div>
    <div class='center'>
      <div class='img-bac2'>
<!--        <img src="../../assets/img/长庆油田长7泥页岩脆性指数等值线图2.png"/>-->
     <center></center>
      </div>
    </div>
    <div class='right'>
      <div class='right-top'>
        <rightTop></rightTop>
      </div>
      <div class='right-bot'>
        <rightBot></rightBot>
      </div>
    </div>
  </div>
</template>

<script>
import leftTop from '../../components/left-top'
import rightTop from '../../components/right-top'
import leftBot from '../../components/left-bot'
import rightBot from '../../components/right-bot'
import center from '../../components/center'
import {bbimg} from '../../utils/tool'


export default {
  components: {
    leftTop,
    leftBot,
    rightTop,
    rightBot,
   center
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}

    }
  },
  methods: {}
}

</script>

<style lang='less' scoped>
.container {
  display: flex;
  height: 100%;
  width: 100%;

  //.title {
  //  height: 30px;
  //  position: absolute;
  //  color: white;
  //  top: 30px;
  //  left: 28px;
  //}

  .left {
    flex: 0 0 32%;
    height: 100%;
    padding: 20px ;
    box-sizing: border-box;

    .left-top {
      width: 100%;
      height: 50%;
      position: relative;

    }

    .left-bot {
      width: 100%;
      height: 50%;
      position: relative;

    }
  }

  .center {
    flex: 1;
    height: 100%;
    padding: 48px 0px 28px 0px;
    box-sizing: border-box;


    .img-bac2{
      position: relative;
      height: 100%;
      width: 100%;
      //border: 2px solid #36a2f0;
      background: url("../../assets/img/bbj.png");
      background-size: 100% 100%;
      padding: 30px 50px;
      box-sizing: border-box;
      overflow: hidden;
    }

    .img-bac {
      position: relative;
      height: 100%;
      width: 100%;
      //border: 2px solid #36a2f0;
      background: url("../../assets/img/bbj.png");
      background-size: 100% 100%;


      & > img {
        position: absolute;
        width: 95%;
        height: 95%;
        margin-top: 2.5%;
        margin-left: 2.5%;
        //object-fit: cover;
      }
    }

  }

  .right {
    flex: 0 0 32%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;

    .right-top {
      width: 100%;
      height: 50%;
      position: relative;
    }

    .right-bot {
      width: 100%;
      height: 50%;
      position: relative;
    }
  }

}

</style>
