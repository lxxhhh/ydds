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
            :error-message="usernameErrorMsg"
        />

        <van-field
            v-model="passWord"
            type="password"
            label="密码"
            placeholder="请输入密码"
            :error-message="passwordErrorMsg"
            required
        />
        <div class="register-button">
            <van-button type="primary" size="large" @click="RegisterAction" :loading="openLoading">马上注册</van-button>
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
                usernameErrorMsg:'',   //当用户名出现错误的时候
                passwordErrorMsg:'',   //当密码出现错误的时候
            }
        },
        methods: {
            GoBack(){
                this.$router.go(-1)   
            },
            RegisterAction(){
                 this.checkForm() && this.axiosRegisterUser()
            },
            axiosRegisterUser(){
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
                        Toast.fail('注册失败'); //注册相同的名字的时候，代码走到这里 
                    }
                })
                .catch((error) => {
                    console.log(error);
                    this.openLoading = false;
                    Toast.fail('注册失败');
                })
            },
            // 表单验证
            checkForm(){
                let isOk = true;
                if(this.userName.length<5){
                    this.usernameErrorMsg="用户名不能小于5位";
                    isOk= false;
                }
                else{
                    this.usernameErrorMsg='';
                }
                if(this.passWord.length<6){
                    this.passwordErrorMsg="密码不能少于6位";
                    isOk= false;
                }
                else{
                    this.passwordErrorMsg='';
                }
                return isOk;
                   
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