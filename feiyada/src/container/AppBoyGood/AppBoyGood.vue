<template>
    <div class="app-boy-good">
        <div class="boy">
             男士<span>{{b_items}}</span>(<span class="red">{{b_id}}</span>)
             <!-- 男士<span>{{localStorage.listItem1.b_items}}</span>(<span class="red">{{localStorage.listItem1.id}}</span>) -->
        </div>
        <ul class="list">
              <li class="good-item" v-for="(good,i) in boygoods"  :key="good.id" >
                  
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
        <div>

        </div>
    </div>
</template>
<script>

import axios from 'axios'
import {mapMutations} from 'vuex'
    export default {
        name:'AppBoyGood',
         
        data(){
            return{  
                boygoods:[],
                b_id:'',
                b_items:'',
                types:"boygoods"
            }
        },
        methods:{           
            getboygoods(){
                let that =this
                let boygoods=this.boygoods
            //    console.log(that.$route)
                axios.get('./static/json/boygoods.json').then((res)=>{         
                    if(that.$route.params.id&&that.$route.params.b_items){
                        localStorage['b_id'] =that.$route.params.id
                        localStorage['b_items'] =that.$route.params.b_items
                    }
                    that.b_id = localStorage['b_id']
                    that.b_items = localStorage['b_items']     
                    that.boygoods=res.data[that.b_id]
                    localStorage.boygoods=JSON.stringify(res.data[that.b_id])                                  
                })                                    
            },         
             todetail(types,_id){         
                 let that=this
                console.log(_id,this.types)
                this.$router.push({name:'bgdetail',params:{id:_id,types:this.types}})
                localStorage['id'] = _id            
            },
           
            ...mapMutations(['addGood','reduceGood'])
        },
         created(){         
            this.getboygoods()
         },
        mounted(){
            var that=this
             this.getboygoods()
        }
    }
</script>

<style lang="scss">
    .app-boy-good{
        height: 100%;
        overflow: scroll;
        .boy{
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