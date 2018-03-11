
 <template>
    <div class="gril-goods">
         <div class="common_title text_align_left">
         
            <span>女士</span>
            （<span class="red">137</span>）
        </div>
        <AppWomenGoods></AppWomenGoods> 
        
    </div>


</template>
<script>
    import AppWomenGoods from './AppWomenGoods'
    export default {
        name:'GrilGoods',
        
       components:{
           AppWomenGoods
       }
    }
 </script>
<style lang="scss">
    html,body{
        height:100%;
    }
    .gril-goods{
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
