<template>
  <div class='container-box'>
    <div class="recommendPage">
      <swiper :options="swiperOption" ref="mySwiper">
<!--        <swiper-slide><img src="../assets/img/长庆油田长7泥页岩脆性指数等值线图2.png"/></swiper-slide>-->
        <swiper-slide><img src="../assets/img/1、长庆油田长6杨氏模量数据分布图.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/2、长庆油田长7砂岩分布图.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/3、长庆油田长7泥页岩数据分布图.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/4、长庆油田长8杨氏模量数据分布图.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/5、长庆油田长9杨氏模量分布图.jpg" alt=""></swiper-slide>

      </swiper>

    </div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "center",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {

      swiperOption: {
        loop: false,
        autoplayDisableOnInteraction:true,
        // autoplay: {
        //
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false,
        //
        // },

        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }

}
</script>

<style  scoped>
.container-box {
  height: 100%;
  width: 100%;
  background-color: #cccccc;
  /*overflow: hidden;*/
  position: relative;
}
.recommendPage{
  width: 100%;
  height: 100%;
}
.recommendPage .swiper-container{
  position: absolute;
  width: 100%;
  /*width: 800px;*/
  height: 100%;
  background: pink;
}
.recommendPage .swiper-container .swiper-slide{
  width: 100%;
  height: 100%;
  background: yellowgreen;
  color: #000;
  font-size: 16px;
  text-align: center;
}
img{
  /*object-fit: cover;*/
  width: 100%;
  height:100%;
}
.swiper-button-prev{
left:-33px;
  background: url("../assets/img/正常-左.png")no-repeat !important;
  background-size: 100% 100%;
  width: 30px !important;
}
.swiper-button-next{
  right: -33px;
  background: url("../assets/img/正常-右.png")no-repeat !important;
  background-size: 100% 100%;
  width: 30px !important;
}
</style>
