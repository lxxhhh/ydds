 <template>
   <div class="hot-area">
    <div class="hot-title">热卖商品</div>
    <div class="hot-goods">
        <van-list>
            <van-row gutter="20">
                <van-col span="12" v-for="( item, index) in goodsInfo" :key="index">
                    <div class="goods-info">
                        <div class="goods-image">
                            <img v-lazy="item.IMAGE" width="90%" />
                        </div>
                        <div class="goods-name">
                            <router-link :to="{name:'GoodsInfo',params:{ID: item.ID}}">{{item.NAME}}</router-link>
                        </div>
                        <div class="goods-price">￥{{item.PRESENT_PRICE}}</div>
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

 export default {
     data() {
         return {
             goodsInfo:[],
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
                this.goodsInfo = response.data.message;
                })
                .catch(error=>{
                    console.log(error)
                })
        }
    },
 }
 </script>
 
 <style>
 
 </style>