<template>
    <div class="login-wrap">
        <div class="login-con">
            <el-input 
                class="uname" 
                v-model="uname" 
                placeholder="username"
            ></el-input>
            <el-input 
                class="upass"
                v-model="upass" 
                placeholder="password" 
                type="password" 
                @keyup.enter.native="userLogin" 
            ></el-input>
        </div>
    </div>
</template>

<script>
import { login } from '../api/user'

export default {
        data(){
            return {
                uname:'',
                upass:''
            }
        },
        methods:{
         userLogin(){ // 用组件封装需要加native
          login({uname : this.uname,upass : md5(this.upass)}).then(res=>{
              if(res.code ===1){
                  localStorage.setItem('token',res.token)
                  this.$message.success(res.msg)
                  this.$router.push(this.$route.query.from)
              }else{
                  this.$message.error(res.msg)
              }
          })

            }
        }
          
}
</script>

<style scoped lang="less">
    .login-wrap {
        width: 100%;
        height: 100vh;
        background: #f4f4f4 ; 
        &>.login-con{
            width: 300px;
            height: 300px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            &>.uname{
                margin-bottom: 15px;
            }
        }
    }
</style>
