<template>
    <div class="hot-area">
    <div class="hot-title">热卖商品</div>
    <div class="hot-goods">
        <van-list>
            <van-row gutter="20">
                <van-col span="12" v-for="( item, index) in hotGoods" :key="index">
                    <div class="goods-info">
                        <div class="goods-image">
                            <img v-lazy="item.image" width="90%" />
                        </div>
                        <div class="goods-name">{{item.name}}</div>
                        <div class="goods-price">￥{{item.price | mFilter }}</div>
                    </div>
                </van-col>
            </van-row>
        </van-list>
    </div>
</div>
</template>

<script>
    import {toMoney} from '@/filter/moneyFilter.js'
    export default {
        props:['hotGoods'],
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