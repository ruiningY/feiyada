 <template>
    <div class="app-men">
         <div class="common_title text_align_left">
         
            <span>男士</span>
            （<span class="red">137</span>）
        </div>
        <AppMenGoods></AppMenGoods> 
        
    </div>


</template>
<script>
    import AppMenGoods from './AppMenGoods.vue'
    export default {
        name:'AppMen',
        
       components:{
           AppMenGoods
       }
    }
 </script>
<style lang="scss">
    html,body{
        height:100%;
    }
    .boy-goods{
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
