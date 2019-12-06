<template>
  <div>
     <van-nav-bar 
        title="用户登录"
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
            <van-button type="primary" size="large" @click="LoginAction" :loading="openLoading">马上登录</van-button>
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
                openLoading:false,   //是否开启用户的Loading
                usernameErrorMsg:'',   //当用户名出现错误的时候
                passwordErrorMsg:'',   //当密码出现错误的时候
            }
        },
        // created() {
        //     if(localStorage.userInfo){
        //         Toast.fail('您已经登录'); 
        //         this.$router.push({name:'shoppingMall',params:{userName:localStorage.userInfo.userName}});
        //     }
        // },
        methods: {
            GoBack(){
                this.$router.go(-1)   
            },
            LoginAction(){
                 this.checkForm() && this.axiosLoginUser()
            },
            axiosLoginUser(){
                this.openLoading = true;
                axios({
                    url : url.loginUser,
                    method : 'post',
                    data : {
                        userName : this.userName,
                        passWord : this.passWord
                    }

                })
                .then(response => {

                    console.log(response);
                    if(response.data.code == 200 && response.data.message){
                        this.openLoading=false;
                        //将登录信息存储起来
                        new Promise((resolve,reject)=>{
                            localStorage.userInfo = {userName:this.userName};
                            // localStorage.userName = this.userName;
                            setTimeout( ()=>{resolve()},500) 
                        }).then(()=>{
                                Toast.fail('登录成功'); 
                                this.$router.push('/');
                            }).catch(err=>{
                                Toast.fail('登录状态存储失败'); 
                                console.log(err);
                            });
                       
                        
                    }else{
                        this.openLoading = false;
                        Toast.fail('登录失败'); 
                    }
                })
                .catch((error) => {
                    console.log(error);
                    this.openLoading = false;
                    Toast.fail('登录失败');
                })
            },
            checkForm(){
                let isOk = true;
                if(this.userName.length<3){
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