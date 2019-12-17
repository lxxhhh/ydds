<template>
  <div class="floor">
      <div class="floor-title">
          {{floorData0.floorName}}
      </div>
    <div class="floor-anomaly">
      <div class="floor-one">
        <img :src="floorData0.IMAGE" width="100%" />
      </div>
      <div>
        <div class="floor-two">
          <img :src="floorData1.IMAGE" width="100%" />
        </div>
        <div>
          <img :src="floorData2.IMAGE" width="100%" />
        </div>
      </div>
    </div>
    <div class="floor-rule">
      <div v-for="(item ,index) in floorData.slice(3)" :key="index">
        <img :src="item.IMAGE" width="100%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['floorData'],
  data() {
    return {
        floorData0:{},
        floorData1:{},
        floorData2:{},
    };
  },
  watch: {
      floorData:function(val){
            this.floorData0 = this.floorData[0];
            this.floorData1 = this.floorData[1];
            this.floorData2 = this.floorData[2];
      }
  }
//   created() {    //  直接在created时获取传送数据会出现错误，因为数据来源于axios获取的数据，但是created时axios还没获取到数据，为空
//         this.floorData0 = this.floorData[0]; 
//         this.floorData1 = this.floorData[1];
//         this.floorData2 = this.floorData[2];
//   },
};
</script>

<style lang="less" scoped>
.floor{
  margin-top: 0.8rem;
}
.floor-title{
    text-align: center;
    font-size: 14px;
    line-height: 1.5rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
}
.floor-anomaly {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.floor-anomaly div {
  width: 10rem;

  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.floor-one {
  border-right: 1px solid #ddd;
}
.floor-two {
  border-bottom: 1px solid #ddd;
}
.floor-rule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
}
.floor-rule div {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 10rem;

  border-bottom: 1px solid #ddd;
}
.floor-rule div:nth-child(odd) {
  border-right: 1px solid #ddd;
}
</style>