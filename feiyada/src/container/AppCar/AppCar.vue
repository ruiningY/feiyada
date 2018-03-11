<template>
    <div class="app-car ">
        <div>
            <div class="commit-title">购物车中商品</div>
            <div>
                <ul>
                    <li class="item-content" v-for="info in pureCar" :key="info.goodid">
                        <div>
                            <input type="checkbox" checked="checked">
                            <img :src="info.url" alt="">
                        </div>
                        <div class="cont">
                            <p class="tit">{{info.tit}}</p>
                            <p class="produce">手机型号：{{info.produce}}</p>
                            <p class="price">价格：{{info.price}}</p>
                            <div class="numb">
                                <div><button @click="reduceGood(info.goodid)">-</button><span class="num">{{info.num}}</span><button @click="addGood({goodid:info.goodid,tit:info.tit,produce:info.produce,url:info.url,price:info.price})">+</button></div>
                                <span class="delete" @click="removeGood(info.goodid)">删除</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="alls">
                    <p class="allnum">商品总数：<span>{{all_price_num.num}}</span></p>
                    <p class="totalm">应付金额：<span>￥{{all_price_num.price}}</span></p>
            </div>
            <div class="pay"><button class="payfor">去结算</button></div>
        </div>
    </div>


</template>
<script>

    import{mapState,mapGetters,mapMutations} from 'vuex'
    
    export default {
        
        name:'AppCar',
        
        data(){
            return{
                
            }
        },
       
        computed:{
            
            ...mapState(['cart']),
            
            ...mapGetters(['pureCar','all_price_num'])
            
        },
        
        methods:{
            ...mapMutations(['addGood','reduceGood','removeGood'])
            
        },
        
        mounted(){
     // console.log(this.$store.getters.pureCar,11)
        
        }
    }
    
     //console.log( pureCar)
</script>
<style lang="scss">


    .app-car{
        overflow-y: auto;
        height: 100%;
        flex:1;
      
        div{
            .commit-title{
                  background:#fff;
                line-height: 4rem;
                font-size: 1.6rem;
                font-weight: bold;
                border-bottom: solid 1px #dcdcdc;
                padding: 0 1rem;
               
                text-align: left;

            }
            div{
                ul{
                    li{
                        display: flex;
                        justify-content: space-between;
                        padding:1rem;
                        div{
                            img{
                                width:7rem;
                                height:7rem;
                            }

                        }
                        .cont{
                            padding-left:1rem;
                            p{
                                line-height: 22px;
                                max-height: 44px;
                                overflow: hidden;
                               
                                margin-bottom: 4px;
                               
                            }
                            .tit{
                                 font-weight: bold;
                                 font-size: 1rem;
                                  color:#777;
                            }
                            .produce{
                                color:#999;
                                font-size: .8rem;
                            }
                            .price{
                                color:#999;
                                font-size: 1rem;
                            }
                           
                            .numb{
                                display: flex;
                                justify-content: space-between;

                                 div{
                                      button{
                                    border:0;
                                    background: none;
                                    border:1px solid #ccc;
                                     width:2rem;
                                    height: 2rem;
                                    margin-right:1rem;
                                    margin-left:1rem

                                    }
                                    .num{
                                        display: inline-block;
                                        width:2rem;
                                    
                                        border:1px solid #ccc;
                                        text-align: center;
                                        line-height: 2rem;
                                    }
                                    
                                }
                                .delete{
                                    line-height: 2rem;
                                    }
                                
                               
                            }
                        }
                    }
                }
            }
            .alls{
                .allnum{
                    border-bottom:1px solid #ccc;
                    line-height: 4rem;
                }
                .totalm{
                     border-bottom:1px solid #ccc;
                    line-height: 4rem;
                    color:#a27453;
                    font-size:1.4rem;

                }

            }
            .pay{
                
                 width:100%;
                 text-align: center;
                .payfor{
                   margin-top:2rem;
                    border:0;
                    width:30%;
                    height: 3rem;
                    background:#a27453;
                   
                    line-height: 3rem;

                }
            }
        }

    }

</style>
