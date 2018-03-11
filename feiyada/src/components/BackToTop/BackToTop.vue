<template>
    <div class="back-to-top">
        <transition enter-active-class="fast-animate fadeInUp" leave-active-class="fast-animate fadeOutDown">
            <div v-show="isShow">
                <div @click="back">
                    <span class="icon icon-up"></span>
                </div>
             </div>
        </transition>
    </div>


</template>
<script>
    export default {
        name:"BackToTop",
        data(){
            return {
                  isShow:false
            }        
        },
        mounted(){
            let that= this
            this.$parent.$el.addEventListener("scroll",function(e){
               // console.log( this.scrollTop)
                if(this.scrollTop>1000){
                    that.isShow=true
                } else{
                    that.isShow=false
                }
            })
        },
        methods:{
            back(){
                this.$parent.$el.scrollTop=0
            }
        }
    }
</script>
<style scoped lang="scss">
.back-to-top{
      position: fixed;
        right: 0;
        bottom:3rem;
        z-index:999;

    .icon{
        display: block;
        width:2rem;
        height: 3rem;
        border-radius: 50%;
        background:#ddd;
        text-align: center;
        line-height: 3rem;
        
      
    }
}
    

</style>
