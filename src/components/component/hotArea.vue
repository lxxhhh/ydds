<template>
    <div class="hot-area">
    <div class="hot-title">热卖商品</div>
    <div class="hot-goods">
        <van-list>
            <van-row gutter="20">
                <van-col span="12" v-for="( item, index) in hotGoods" :key="index">
                    <div class="goods-info">
                        <div class="goods-image">
                            <img v-lazy="item.IMAGE" width="90%" />
                        </div>
                        <div class="goods-name">
                            <router-link :to="{name:'GoodsInfo',params:{ID: item.ID}}">{{item.NAME}}</router-link>
                        </div>
                        <div class="goods-price">￥{{item.PRESENT_PRICE | mFilter }}</div>
                    </div>
                </van-col>
            </van-row>
        </van-list>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import url from '@/serviceAPI.config.js'
import {toMoney} from '@/filter/moneyFilter.js'
    export default {
        data() {
            return {
                hotGoods : []
            }
        },
        
    created() {
         this.getInfo();
     },
    methods: {
        getInfo(){
            axios({
                url:url.getDetailGoodsInfo,
                method:'post',
            }).then(response=>{
                this.hotGoods = response.data.message.slice(10,20);
                })
                .catch(error=>{
                    console.log(error)
                })
        }
    },
    filters:{
            mFilter(money){
                return toMoney(money)
            }  
        },
    }
</script>

<style scoped>
    .goods-name{
        padding: 0 8px;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space:nowrap; 
    }
.hot-area{
      text-align: center;
      font-size:14px;
      height: 1.8rem;
      line-height:1.8rem;
  }
</style>