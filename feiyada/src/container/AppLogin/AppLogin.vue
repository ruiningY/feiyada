<template>
    <div class="app-login ">

        <div class="contents">
            <div class="welcom">欢迎光临飞亚达</div>
            <div class="logins">
                <form @submit.prevent="login({username,password,})">
                    <div>
                        <div> <span>手机号：</span><input v-model="username" type="text" placeholder="手机号"></div>
                        <div> <span>密码：  </span><input  v-model="password" type="text" placeholder="请输入密码"></div>
                    </div>

                   <div class="forget"><a href="">忘记密码?</a></div>
                   <div class="newlr">
                        <div><button type="submit" >登录</button></div>
                         <div><router-link :to="{name:'register'}" class="register" >注册</router-link></div>
                   </div>
                </form>
            </div>

        </div>  
    </div>


</template>
<script>
   
    import {mapActions,mapState} from 'vuex'
    export default {
        name:'AppLogin',
        data(){
            return{
                username:'',password:''
                
            }
        },
        computed:{
            ...mapState(['userInfo'])
        },
        methods:{
            ...mapActions(['login'])
        },
        watch:{
            userInfo(val){
                if(val.username){
                    this.$router.replace('login')
                }
            }
        }
       
    }
</script>
<style scoped lang="scss">
    .app-login{
        height: 100%;
        background:#fff;
        .contents{
            padding:2rem;
             .welcom{
                 text-align: center;
                line-height: 2em;
                font-size: 1.3em;
                font-weight: bold;

            }
        }
        .logins{

            div{
                padding-top:1.2rem;
               div{
                   display: flex;
                   justify-content: space-between;
                   height:3.4rem;
                  
                   span{
                       display: inline;
                       width:30%;
                       font-size:1.2rem;
                       line-height:2.4rem;
                       color:#555;
                       
                   }
                   input{
                       border:0;
                       border:1px solid #ccc;
                       box-sizing:border-box;
                       width:70%;
                        line-height:2.4rem;
                        height:2.4rem;
                        
                   }
               }
              
               
            }
             .forget{
                   width:100%;
                    text-align: right;
                  
               }
            .newlr{
                text-align: center;
               
                div{
                    text-align: center;
                     margin:0 auto;
                     margin-top:1.7rem;
                    button{
                        border:0;
                        width: 12rem;
                        height: 3rem;
                        background:#232323;
                        color:#fff;
                        margin-left:5rem;
                       
                        font-weight: bold;
                        
                    }
                   
                    .register{
                         width: 12rem;
                        height: 3rem;
                        color:#232323;
                        border:1px solid #ccc;
                        background:#fff;
                        font-weight: bold;
                        line-height: 3rem;
                        margin-left:5rem;
                    }
                }
            }
        }
       
    }
</style>
