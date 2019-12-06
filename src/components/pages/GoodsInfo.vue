<template>
  <div>
       <div class="goods-info">
                        <div class="goods-image">
                            <img v-lazy="msg.IMAGE" width="90%" />
                        </div>
                        <div class="goods-name">
                            {{msg.NAME}}
                        </div>
                        <div class="goods-price">￥{{msg.PRESENT_PRICE}}</div>
                    </div>
  </div>
</template>

<script>
import axios from 'axios'
import url from '@/serviceAPI.config.js'

export default {
    data() {
        return {
            msg : {}
        }
    },
    created() {
        this.getOneInfo();
    },
    methods: {
        getOneInfo(){
            axios({
                url : url.getDetailGoodsInfo,
                method : 'post',
                data:{
                    goodsId : this.$route.params.ID
                }
            }).then(response => {
                this.msg = response.data.message
            }).catch(erroe => {
                    console.log(error)

            })
        }
    },
}
</script>

<style>

</style>