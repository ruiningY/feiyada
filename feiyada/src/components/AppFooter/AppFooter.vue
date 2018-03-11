<template>
    <div>
       
    <nav class=" bar-tab footer">
        
        <router-link :to="{name:nav.path}" active-class="active" v-for="(nav,i) in navs" v-if='i<3' :key="nav.icon" class="tab-item external" @click="turnto">
           <span :class="'icon icon-'+nav.icon"></span>
           <span class="tab-label">{{nav.text}}</span>
             
        </router-link>
        <router-link :to="{name:navs[3].path}" class="tab-item external" active-class="active">
            <span :class="'icon icon-'+navs[3].icon"></span>
            <span class="tab-label" @click="isNavShow = !isNavShow">{{navs[3].text}}</span>    
        </router-link>
    </nav>
    <!-- <div class="pad-top"></div> -->
    <transition enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
   
        <div class="selects" v-if="isNavShow">
            <form action="">
                <select name="sex" id="">
                    <option value="">请选择</option>
                    <option value="man">男</option>
                    <option value="woman">女</option>

                </select>
                <input type="text" placeholder="请输入名称、款号">
                <input class="searchs" type="submit" value="搜索">
            </form>
        </div>

    </transition>
    
    </div>
</template>
<script>
    export default {
        name:'footer',
        data(){
            return {
                  isNavShow:false,
                navs:[
                    {text:'首页',icon:'menu',path:"main"},
                    {text:"个人中心", icon:'me' ,path:"login"},
                    {text:"购物车",icon:'cart',path:"car"},
                    {text:"搜索",icon:'search'},
                ]
            }
        },methods:{
            turnto(){

            }
        }
    }


</script>  
<style lang="scss">
 .footer{
      height:3.66rem;
      border-top:0.04rem solid #ccc;  
      align-items: center;
        position: relative;
      bottom:-1px;
     background: #f3f3f3; 
     z-index:999!important;
        a{
            width: 23%;
             display: flex;
             flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
   }
   .animated{
        animation-duration: 0.5s;
    }  
  
       .pad-top{
        
           height: 3rem;;
       }
        .selects{
             position:absolute;
             width:100%;
            line-height: 5rem;
            text-align: center;
            background: #222;
            border-bottom: solid 1px #fff;    
            padding-top:1rem;
            padding-bottom:1rem;
            left: 0;
            right:0;
             bottom:3.3rem;  
             z-index:0;   
            form{
                display: flex;
                justify-content: space-around;
                    input{
                        height:2rem;
                    }
                    .searchs{
                        border:1px solid #fff;
                        background:#000;
                        color:#fff;
                    }

                }
        }
   
  
</style>