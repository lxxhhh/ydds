<template>
  <div class="recommend-area">
    <div class="recommend-title">商品推荐</div>
    <div class="recommend-body">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(good, index) in goods" :key="index">
          <div class="recommend-item">
            <img :src="good.image" width="80%" />
            <div>{{good.goodsName}}</div>
            <div>￥{{good.price}}(￥{{good.mallPrice}})</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  props: ["goods"],
  data() {
    return {
      //   slide: [1, 2, 3, 4, 5, 6],
      swiperOption: {
        //     loop:true,
        slidesPerView: 3 //设置同屏显示的元素数量
        //     mousewheel:true,
        //     // direction:'vert,cal',  //竖屏轮播
        //     pagination: {  //分页器
        //       el: ".swiper-pagination",
        //       clickable:true
        //     }
      }
    };
  },

  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="less" scoped>
@main-color: #e5017d;
.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
  .recommend-title {
    border-bottom: 1px solid #eee;
    font-size: 14px;
    padding: 0.2rem;
    color: @main-color;
  }
}

.recommend-body {
  border-bottom: 1px solid #eee;
  .recommend-item {
    width: 99%;
    border-right: 1px solid #eee;
    font-size: 12px;
    text-align: center;
  }
}
</style>