<template>
    <div class="app-register">
        <div class="newuser">新用户注册</div>
        <div class="rges">
            <form@submit.prevent="register({username,password,nickname})">
                <div><span><i class="red">*</i>手机号：</span><input  v-model="username" type="text" placeholder="手机号"></div>
                <div><span><i class="red">*</i>密码：</span><input v-model="password" type="text"  placeholder="密码"></div>
                <div><span><i class="red">*</i>确认密码：</span><input type="text"  placeholder="确认密码"></div>
                <div><span><i class="red">*</i>邮件：</span><input type="text" v-model="nickname"  placeholder="邮件"></div>
                <div><span><i class="red">*</i>验证码：</span><input type="text"  placeholder="请输入验证码"></div>
                <p><input type="checkbox" > 我已阅读并同意(飞亚达会员俱乐部会员守则)</p>
                <div class="regist"><button> 立即注册</button></div>
            </form>
        </div>
    </div>
</template>
<script>
    import {mapActions,mapState} from 'vuex'
    export default {
        name:'AppRegister',
        data(){
            return{
                username:'',password:'',nickname:''
                
            }
        },
        computed:{
            ...mapState(['userInfo'])
        },
        methods:{
            ...mapActions(['register'])
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
<style lang="scss">
.app-register{
    background:#fff;
    height:100%;
    .newuser{
        margin-top:1rem;
        text-align: center;
    line-height: 2em;
    font-size: 1.3em;
    font-weight: bold;

    }
    .rges{
        padding:1rem;
        form{
            div{
                display: flex;
                justify-content: space-between;
                margin-top:1.5rem;
                span{
                    display: inline-block;
                    color:#555;
                    font-size:1rem;
                    line-height: 2.6rem;
                    i{
                        color:red;
                    }
                }
                input{
                     background: #eee;
                    border: #ddd 1px solid;
                    height: 2.6em;
                    line-height: 2.6em;
                    width: 70%;
                    box-sizing: border-box;
                    padding: 2px;
                }
            }
            p{
                margin-top:1rem;
                color:#777;
            }
            .regist{
                text-align:center;
                margin-left:5rem;
                button{
                width:10rem;
                height: 3rem;
                color:#fff;
                background:#8dd;
                border:0;
                }
                
            }
        }
    }
}

</style>