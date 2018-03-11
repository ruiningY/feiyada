

 <template>
    <div class="app-loves">
         <div class="common_title text_align_left">
         
            <span>情侣</span>
            （<span class="red">7</span>）
        </div>
        <AppLoveGoods></AppLoveGoods> 
        
    </div>


</template>
<script>
    import AppLoveGoods from './AppLoveGoods'
    export default {
        name:'AppLoves',
        
       components:{
           AppLoveGoods
       }
    }
 </script>
<style lang="scss">
    html,body{
        height:100%;
    }
    .app-loves{
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
