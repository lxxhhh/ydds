<template>
  <div>
    <div class="search-bar">
      <van-row>
        <van-col span="3">
          <img :src="locationIcon" class="location-icon" />
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input" value="输入" />
        </van-col>
        <van-col span="5">
          <van-button size="mini" class="search-button">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- swiper area -->
    <div class="swiper-area">
      <van-swipe :autoplay="2000" indicator-color="#fc6a4d">
        <van-swipe-item v-for="(item,index) in bannerPic" :key="index">
          <img v-lazy="item.image" alt width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- type bar -->
    <div class="type-bar">
      <div class="bar-item" v-for="(cate, index) in category" :key="index">
        <img v-lazy="cate.image" width="90%" />
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>
    <div class="banner-adv">
      <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%" />
    </div>

    <!-- recommend-area -->
    
      <swiperDefault :goods="recommendGoods"></swiperDefault>
  
    

    <!--floor one area-->
    <floor-Component :floorData="floor1" :floorTitle="floorName.floor1"></floor-Component>
  
  <!--floor two area-->
    <floor-Component :floorData="floor2" :floorTitle="floorName.floor2"></floor-Component>
  
  <!--floor three area-->
    <floor-Component :floorData="floor3" :floorTitle="floorName.floor3"></floor-Component>
  </div>
</template>
<script>
import axios from "axios";
import swiperDefault from "../swiper/swiperDefault";
import floorComponent from "../component/floorComponent";

export default {
  data() {
    return {
      locationIcon: require("../../../static/images/location.png"),
      bannerPic: [],
      category: [],
      adBanner: [],
      floor1: [],
      floor2: [],
      floor3: [],
      recommendGoods: [],
      floorName:{},
      swiperOption: {
        slidesPerView: 3
      }
    };
  },
  components: {
    swiperDefault,floorComponent
  },
  created() {
    axios({
      url:
        "https://www.easy-mock.com/mock/5d82f435e4d5197784494880/expmale/goods",
      method: "get"
    })
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          this.category = response.data.data.category;
          this.adBanner = response.data.data.advertesPicture;
          this.bannerPic = response.data.data.slides;
          this.recommendGoods = response.data.data.recommend;
          this.floor1 = response.data.data.floor1;
          this.floor2 = response.data.data.floor2;
          this.floor3 = response.data.data.floor3;
          this.floorName = response.data.data.floorName;
         
        }
      })
      .catch(error => {
        console.log(error);
        alert("连接失败");
      });
  }
};
</script>

<style lang="less" scoped>
@main-color: #e5017d;
.search-bar {
  height: 2.2rem;
  background-color: @main-color;
  line-height: 2.2rem;
  overflow: hidden;
  .location-icon {
    width: 80%;
    padding-top: 0.2rem;
    padding-left: 0.3rem;
  }
  .search-input {
    width: 100%;
    height: 1.3rem;
    border: 0;
    border-bottom: 1px solid #fff !important ;
    background-color: #e5017d;
    color: #fff;
    font-size: 14px;
  }
  .search-button {
    margin-left: 0.8rem;
  }
}
.swiper-area {
  max-height: 9rem;
  overflow: hidden;
  clear: both;
}
.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row; //定义主轴方向为水平方向
  flex-wrap: nowrap;
  // flex-flow: row nowrap;  //简写
  .bar-item {
    padding: 0.3rem;
    font-size: 12px;
    text-align: center;
    flex: 1;
  }
}





</style>
