<template>
    <div class="banner">

        <div class="swiper-container mySwiper swiper-container-horizontal">
            <div class="swiper-wrapper"> 
            <div class="swiper-slide swiper-slide-next" style="width: 100%; margin-right: 10px;" v-for="value in banners"  v-bind:style="{backgroundImage: 'url(' + value.imgs + ')'}"></div> 
            </div> 
                        
        </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    </div>


</template>

<script>
export default {
  name: 'friends-item',
  props:['info'],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  $base-color:red;

  a{
    display:block;width:100%;
    padding:0px 10px;
    color:$base-color;
  }
  .item-content{
    padding:0;
  }
  .item-inner{
    
    margin:0!important;
  }
</style>
