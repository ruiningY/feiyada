<template>
    <div class="app-disnt">
         <div class="common_title text_align_left">
         
            <span>折扣</span>
            （<span class="red">0</span>）
        </div>
    </div>


</template>

<script>
    export default {
        name:'AppDisnt',
        data(){
            return{
                
            }
        }
    }
</script>
<style lang="scss">
   html,body{
        height:100%;
    }
    .app-disnt{
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