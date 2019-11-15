<template>
  <div>
     <van-nav-bar 
        title="用户注册"
        left-text="返回"
        left-arrow
        @click-left="GoBack"
     />
     <div class="register-panel">
        <van-field
            v-model="userName"
            label="用户名"
            icon="clear"
            placeholder="请输入用户名"
            required
            @click-icon="userName = ''"
        />

        <van-field
            v-model="passWord"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
        />
        <div class="register-button">
            <van-button type="primary" size="large" @click="axiosRegusterUser" :loading="openLoading">马上注册</van-button>
        </div>
       </div>
  </div>
</template>

<script>
import axios from 'axios'
import url from '@/serviceAPI.config.js'
import { Toast } from 'vant'
export default {
        data() {
            return {
                passWord:'',
                userName:'',
                openLoading:false,   //仿重复提交
            }
        },
        methods: {
            GoBack(){
                this.$router.go(-1)   
            },
            axiosRegusterUser(){
                this.openLoading = true;
                axios({
                    url : url.registerUser,
                    method : 'post',
                    data : {
                        userName : this.userName,
                        passWord : this.passWord
                    }

                })
                .then(response => {
                    console.log(response);
                    if(response.data.code == 200){
                        Toast.success(response.data.message);
                        this.$router.push('/');
                    }else{
                        console.log(response.data.message);
                        this.openLoading = false;
                        Toast.fail('注册失败01'); //注册相同的名字的时候，代码走到这里 
                    }
                })
                .catch((error) => {
                    console.log(error);
                    this.openLoading = false;
                    Toast.fail('注册失败');
                })
            }
        },
}
</script>

<style lang="less">
    .register-panel{
        width:96%;
        border-radius: 5px;
        margin:20px auto;
        padding-bottom:50px;
    }
    .register-button{
        padding-top:10px;
    }
</style>