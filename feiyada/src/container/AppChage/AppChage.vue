<template>
    <div class="app-chage">
         <div class="common_title text_align_left">    
            <span>礼品</span>
            （<span class="red">0</span>）
        </div>
         <ul
            class="goods-box"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="5"
            infinite-scroll-immediate-check="true">
            <li class="good-item" v-for="(item,i) in list" :key="i">
                <a>        
                    <img :src="item.url" alt="">
                </a>
                <div class="details">
                    <p class="tit">{{item.tit}}</p>
                    <p class="produce">{{item.produce}}</p>
                    <div class="p_content">
                        <div class="price">{{item.price}}</div>
                        <div class="car">
                            <a><span @click="addGood({goodid:item.id,tit:item.tit,produce:item.produce,url:item.url,price:item.price})">{{item.join}}</span></a>
                            <a href=""><span>{{item.hidee}}</span></a>
                        </div>
                    </div>
                </div>      
            </li>
        </ul>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
import axios from "axios"
    export default {
        name:'AppChage',
        data(){
            return{
                list:[],
                loading:false           
            }
        },
        methods:{
            getGoods(){
                let that = this
                axios.get('../../static/json/chages.json').then((res)=>{
                    console.log(res.data)
                    that.list=res.data
                    that.loading=false
                   
                })
            },
        
            loadMore() {
                this.loading = true;
                setTimeout(() => {
                    let last = this.list[this.list.length/2 ];
                     for (let i=this.list.length; i <= this.list.length/2; i++) {
                    // for (let i = 1; i <= 10; i++) {
                    this.list.push(last + i);
                    }
                    this.loading = false;
                }, 2500);
            
            },
             ...mapMutations(['addGood'])
        },
        
        mounted(){
            this.getGoods()     
        }    
    }
</script>
<style lang="scss">
   html,body{
        height:100%;
    }
    .app-chage{
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


</style>