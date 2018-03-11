<template>
    <div class="app-girl-dood">
        <div class="girl">
            女士<span>{{g_items}}</span>(<span class="red">{{ g_id}}</span>)
        </div>
         <ul class="list">
              <li class="good-item" v-for="(good,i ) in girlgoods"  :key="good.id">
       
                <a  @click.prevent="todetail(types,i)" >
                    <img :src="good.url" alt="">
                </a>
                <div class="details">
                    <p class="tit">{{good.tit}}</p>
                    <p class="produce">{{good.produce}}</p>
                    <div class="p_content">
                        <div class="price">{{good.price}}</div>
                        <div class="car">
                            <a><span @click="addGood({goodid:good.id,tit:good.tit,produce:good.produce,url:good.url,price:good.price})">{{good.join}}</span></a>
                            <a href=""><span>{{good.hidee}}</span></a>
                        </div>
                    </div>
                </div>
       
            </li>
        </ul>
    </div>


</template>
<script>
 // console.log(this.$route.params.b_items)
 import axios from 'axios'
 import {mapMutations} from 'vuex'
    export default {        
        name:'AppGirlGood',  
     
        data(){
            return{  
                  girlgoods:[],
                  g_id:'',
                  g_items:'',
                  types:'girlgoods'       
            }
        },
        methods:{
            getgirlgood(){
                let that =this
                axios.get('/static/json/girlgoods.json').then((res)=>{
                   if(this.$route.params.id&&this.$route.params.g_items){
                       localStorage['g_id']=this.$route.params.id
                       localStorage['g_items']=this.$route.params.g_items
                    }
                    that.g_id= localStorage['g_id']
                    that.g_items=localStorage['g_items']
                        that.girlgoods= res.data[that.g_id]
                })
            },

             todetail(types,_id){
                 let that=this
                 console.log(this.types,_id)
                that.$router.push(
                    {name:'bgdetail',params:{id:_id,types:this.types}}
                   )
                localStorage['id'] =_id
            },
            ...mapMutations(['reduceGood','addGood'])

        },
       created(){
           this.getgirlgood()
       },
       mounted(){
           var that =this
           this.getgirlgood()
       }
    }
  
</script>
<style lang="scss">
    .app-girl-dood{
        height: 100%;
        overflow:scroll;
         .girl{
             height:4rem;
            line-height: 4rem;
            font-size: 1.8rem;
            font-weight: bold;
            border-bottom: solid 1px #dcdcdc;
            padding: 0 1rem;
            padding-bottom: .8rem;
            background:#fff;
            span{
                font-size:1.6rem;
                color:#000;
                padding-left:1rem;
                
            }
            .red{
                color:red;
            }
        }
        .list{
        margin:0;
        width:100%;
        background:#F5F5F5;
        padding-top:.5rem;
        padding-left:0;
        padding-bottom:.5rem;
        .good-item{
            width:100%;
            display: flex;
            justify-content: space-between;
            padding-right:.5rem;
            height:11rem;
        
            a{

                img{
                    width:6rem;
                    height:7rem;
                    margin-left:.7rem;
                    margin-top:1rem;
                }
            }
                
        
            .details{
                width:70%; 
                padding-top:1rem; 
                .tit{
                    font-size:1rem;
                    color:#777;
                    font-weight: bold;
                    padding-bottom:1rem;
                }
                .produce{
                    color: #999;
                    font-size: 1rem;
                    height: 20px;
                    line-height: 20px;
                    overflow: hidden;
                    display: block;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    
                }
                .p_content{
                    padding-top:1rem;
                    display: flex;
                    justify-content: space-between;
                    line-height: 1rem;
                    .price{
                        color: #a27453;
                        font-size: .8rem;
                    }
                    a{
                        span{
                            color:#999;
                            font-size:.8rem;
                            margin-right:.5rem;
                            }
                        }
                
                    }
                }
        
            }
        }
    }
</style>