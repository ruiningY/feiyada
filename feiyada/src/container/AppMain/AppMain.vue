<template>
    <div class="app-main">
        <div class="banner">
            <div class="swiper-container mySwiper swiper-container-horizontal">
                <div class="swiper-wrapper"> 
                <div class="swiper-slide swiper-slide-next" style="width: 100%; margin-right: 10px;" v-for="(ban,i) in banners" :key="i" v-bind:style="{backgroundImage: 'url(' + ban.imgs + ')'}"></div> 
                </div>                        
            </div>
    <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>  
        </div>
        <div class="newgoods"><a href="">新品上市</a></div>
        <AppMainGoods></AppMainGoods>
       
       
         <AppMainGB></AppMainGB>
         <BackToTop></BackToTop>
      
    </div>


</template>



<script>
import Vue from 'vue'
import Swiper from 'swiper'
import AppMainGoods from './AppMainGoods'
import AppMainGB from './AppMainGB'
import BackToTop from '../../components/BackToTop/BackToTop'

    export default {
        name:'AppMain',
        data(){
           
            return{
                banners: [ 
                    { 
                    'imgs': 'http://www.fiyta.com.cn:88/ArticlePicPath/2017/9/62f8e91b-93ac-42ec-ae8b-4d1f12d5d5af_s.jpg'
                    }, { 
                    'imgs': 'http://www.fiyta.com.cn:88/ArticlePicPath/2017/8/eb22cafd-27c9-4cf3-b11d-84f24bf8dcbf_s.jpg'
                    }, { 
                    'imgs': 'http://www.fiyta.com.cn:88/ArticlePicPath/2017/8/9779464b-4161-4335-a4c4-c029abdea05e_s.jpg'
                    } ,{
                        'imgs':'http://www.fiyta.com.cn:88/ArticlePicPath/2017/7/7301a1ff-0344-4370-86c1-2437b0f4d4d3_s.jpg'
                    },{
                        'imgs':'http://www.fiyta.com.cn:88/ArticlePicPath/2017/7/fc27d4a0-f616-4785-8ef9-e07dc7b2a64b_s.jpg'
                    }
                    
                ] 
            } 
        }, 
        mounted () { 
            this.lunbo() 
        }, 
        components:{AppMainGoods,AppMainGB,BackToTop},
       

        methods: { 
            lunbo () { 
                var mySwiper = new Swiper ('.swiper-container', {
                  pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: 3000,
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
                    
                }) 
        
            }
        }
} 
</script>
<style lang="scss">
html,body{
    height:100%;
}
#app{
   
    height: 100%;
    overflow-y: hidden;
}
.app-main{
    height:100%;
    flex:1;
    overflow-y: auto;
    background:#fff;
  
   
   
}
.banner{
 position: relative;
}
.newgoods{
      width:100%;
    padding:1rem 0 0 1rem;
   
    border-bottom:1px solid #ccc;

    a{
 font-size:1.4rem;
    }
}  
.gallery-thumbs .swiper-slide{  
  width:30%;  
  height:14rem;  
  opacity:0.4;  
}  
.gallery-thumbs .swiper-slide-active{  
  opacity:1;  
}  
.swiper-slide{ 
 background-size: 100% 160%; 
 -webkit-background-size: 100% 160%; 
 height:14rem;
} 
.swiper-pagination{
    position: absolute;
    top:85%;
    left:40%;
    span{
        margin-right:0.5rem;
    }
}
</style>
