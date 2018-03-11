<template>

    <header class="app-header">
       <div class="info-box">
            <span class="icon icon-menu" @click="isNavShow = !isNavShow"></span>
            <img src="http://m.fiyta.com.cn/css/images/logo-main.png" alt="">
            <span class="tits">{{tits}}</span>
       </div>
       <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
           <div @click="change()" v-if="isNavShow" class="mask"></div>
       </transition>
       <transition enter-active-class="fast-animate slideInLeft" leave-active-class="fast-animate slideOutLeft">
           <nav v-if="isNavShow" class="nav">
               <ul>
                   <li class="nav-item" v-for="(nav,i) in navs" :key="i">
                       <a @click="change(nav.path)"><span>{{nav.tits}}</span><span class="icon icon-right"></span></a>
                       
                   </li>
                   <li class="server"><img src="http://m.fiyta.com.cn/css/images/tel.png" alt="">客服热线:400 700 5858</li>
               </ul>
           </nav>


       </transition>
    </header>
    </template> 


<script>
 
    export default{
        name:'AppHeader',
        data(){
            return{
                isNavShow:false,
                navs:[
                    {tits:'回到首页',path:'/main'}, {tits:'男士腕表',path:'/men'}, {tits:'女士腕表',path:'/women'}, {tits:'情侣专区',path:'/loves'}, {tits:'折扣专区',path:'/disnt'}, {tits:'配套产品',path:'/gift'},{tits:'礼品兑换',path:'/chage'},{tits:'个人中心',path:'/login'},
                ]
            }
        },
       computed:{
            tits(){
                switch(this.$route.name){
                    case 'men': return '男士腕表';break;
                    case 'women': return '女士腕表';break;
                    case 'loves': return '情侣专区';break;
                    case 'login': return '登录';break;
                    case 'gift': return '配套产品';break;
                    case 'chage': return '礼品兑换';break;
                    case 'car': return '';break;                              
                    default :
                    return '';break;
                }
            }
  },
        
        methods:{
            change(path){
                this.isNavShow=false;
                if(path){
                    this.$router.push(path)
                }
            }
        },
            mounted(){
                let that = this;
                this.$router.beforeEach((to,from,next)=>{
                     next()
                })
            }
        }
    
   
    
</script>
<style scoped lang="scss">
.app-header{
     .info-box{
            position:relative;
            height:4rem;
            padding:1rem;
            margin:0 auto;
            width:100%;
            display: flex;
            justify-content: space-between;
            z-index: 999;
            background: rgba(245,245,245,1);
            span{
        
                line-height: 2rem;
                color:#777;
                display: inline-block;
                font-size:2rem;
                width:2rem;
            }
            img{
                width:10rem;
                height:2rem;
            }
            .tits{
                font-size:1rem;
                width:auto;
            }

       }
    .fast-animate{
        animation-duration: 0.5s;
    }  
    .mask,.nav{
        width:100%;
        height: 100vh;
        background:rgba(0,0,0,0.3);
        position:absolute;
        top:0;
        left: 0;
        z-index:990;
    }
    .nav{
        z-index:994;
        width:16rem;
        background:rgba(245,245,245,1);
        padding-top:2.5rem;
        ul{
            padding-top:1.4rem;
            li{
           
            height:100%;
            padding:1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color:#999;
                a{
                width:100%;
                display: flex;
                justify-content: space-between;
                color:#666;

                }
            }
            .server{
                color:#666;
                font-size:1.1rem;
            }
        }
        
    }
    
   
    
}

</style>