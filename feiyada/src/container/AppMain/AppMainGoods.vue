<template>
  <div class="app-main-goods">
    
    <ul class="list">
      <app-good-item v-for="goods in goodsData" type="index" :key="goods.id" :info="goods"></app-good-item>
    </ul>
 
  </div>
</template>

<script>
import AppGoodItem from '../../components/AppGoodItem'
import axios from 'axios'
export default {
  name: 'AppMainGoods',
  data () {
    return {
      goodsData:[]
    }
  },
  methods:{
    getGoodsData(){
      let that = this
      axios.get('/static/json/index.json').then((res)=>{
        // console.log(res.data)
        that.goodsData = res.data
      })
    }
  },
  created(){
    this.getGoodsData()
  },
  components:{AppGoodItem}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>