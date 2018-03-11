
<template>
    <div class="app-gift">
         <div class="common_title text_align_left">
         
            <span>配套</span>
            （<span class="red">7</span>）
        </div>
        <AppGiftGoods></AppGiftGoods> 
        
    </div>


</template>
<script>
    import AppGiftGoods from './AppGiftGoods'
    export default {
        name:'AppGift',
        
       components:{
           AppGiftGoods
       }
    }
 </script>
<style lang="scss">
    html,body{
        height:100%;
    }
    .app-gift{
        overflow: auto;
        flex:1;

        .common_title{
             text-align: left;
            line-height: 5rem;
            height: 5rem;
            font-size: 1.6rem;
            font-weight: bold;
            border-bottom: solid 1px #dcdcdc;
           background: #fff;
           padding: 0 2rem;
           .red{
               color: red
           }
        }
    }
</style>
