

<template>
    <div class="detail ">
        <div class="pic">
            <img :src="detail.url " alt="">
            <div>
                <span></span>
            </div>
        </div>
        <div class="prodect_detail">
            <div class="tit">{{detail.tit}}</div>
            <div class="produce">{{detail.produce}}</div>
            <div class="scalee">零售价：<span class="price">{{detail.price}}</span></div>
            <div class="counts">数量：
                <button v-if="counts>=0" v-on:click="counts-=1" @click="reduceGood({goodid:detail.id})">-</button>
                <span class="num">{{counts}}</span>
                <button  v-on:click="counts += 1"  @click="addGood({goodid:detail.id,tit:detail.tit,produce:detail.produce,url:detail.url,price:detail.price})">+</button></div>
            <div class="shoping">
                <button  @click="addGood({goodid:detail.id,tit:detail.tit,produce:detail.produce,url:detail.url,price:detail.price})">加入购物车</button>
                <button>立即购买</button></div>
            <a href="" class="hid"><img src="http://m.fiyta.com.cn/css/images/collect.png"/><span>收藏</span></a>
        </div>
        <div class="parmass">
            <p>详细参数</p>
           
            <ul v-if='type!="giftwatch"'  class="list">
                <li>表盘：<span>{{detail.plate}}</span></li>
                <li>机芯：<span>{{detail.movement}}</span></li>
                <li>表壳：<span>{{detail.cases}}</span></li>
                <li>男/女款：<span>{{detail.stylea}}</span></li>
                 <li>男/女款：<span>{{detail.stylev}}</span></li>
                <li>型号：<span>{{detail.model}}</span></li>
                <li>系列：<span>{{detail.series}}</span></li>
                <li>产地：<span>{{detail.origin}}</span></li>
                <li>品牌：<span>{{detail.brand}}</span></li>
                <li>防水：<span>{{detail.waterproof}}</span></li>
                <li>表扣：<span>{{detail.buckle}}</span></li>
                <li>表带：<span>{{detail.strap}}</span></li>
                <li>底盖：<span>{{detail.cap}}</span></li>
                <li>表针：<span>{{detail.hand}}</span></li>
                <li>表镜：<span>{{detail.glases}}</span></li>
            </ul>            
        </div>
        <div class="pic_detail">
            <p>产品详情</p>
             <img :src="detail.url " alt="">
        </div>
        <ul class="acess">
            <p>评论</p>
            <li></li>
             </ul>              
    </div>
</template>
<script>   
   import{mapState,mapGetters,mapMutations} from 'vuex'
    import axios from 'axios'
    import bus from "../../bus"
    export default {
        name:'detail',
        data (){
            return {
                detail:{},
                type:'index',
                counts:0
            }
        },
         computed:{
            
            ...mapState(['cart']),
            
            ...mapGetters(['pureCar','all_price_num'])
            
        },
        methods:{             
            getDetailData(){
                let that = this
                axios.get('./static/json/'+that.$route.params.type+'.json').then((res)=>{
                     console.log( res.data)
                    res.data.forEach((item,i)=>{
                        // console.log(that.$route)
                        if(item.id==Number(localStorage['id'])){
                            that.detail = item
                        }
                    })
                })
            },
            sort(){
               // console.log(this.$route.params.type)
              
               this.type=this.$route.params.type
            },    
             ...mapMutations(['addGood','reduceGood'])
    
        },
        created(){
            this.getDetailData();   
            this.sort()
           
        },
        mounted(){
             this.getDetailData();
             
         
        }
    }
</script>
<style scoped lang="scss">
.detail{
    height:100%;
    
    overflow-y: auto;
    background:#fff;
    padding-bottom:7rem;
    .pic{
        width:100%;
        height:15rem;
        border-bottom:1px solid #ccc;
        img{
             margin:0 auto;
             display:block;
             padding-top:2rem;
        }
    }
    .prodect_detail{
        .tit{
            font-size:1.4rem;
            font-weight: bolder;
            padding-top:1rem;
            padding-left:1rem;
        }
        .produce{
            color: #b2b2b2;
            font-size:1rem;
            padding-top:1rem;
            padding-left:1rem;
        }
        .scalee{
            color:#a27453;
            padding-left:1rem;
            padding-top:1rem;
            .price{
                color:#a27453;
                font-size:1.8rem;
            }
        }
        .counts{
            color:#a27453;
            padding-left:.8rem;
            padding-top:1rem;
            width:15rem;
           display: flex;
           justify-content: space-around;
            input{
                border:0;
                height: 2rem;
                border:1px solid #ccc;             
            }
            button{
                width:2rem;
                height: 2rem;
                display:inline-block;
                border:1px solid #ccc;
               
                text-align: center;
                line-height: 2rem;
            }
            span{
                
                 width:2rem;
                height: 2rem;
                display:inline-block;
                border:1px solid #ccc;
                margin-left:1rem;
                margin-right:1rem;
                text-align: center;
                line-height: 2rem;
            }
        }
        .shoping{
            button{
                width:8rem;
                height: 2.5rem;
                background:red;
                margin-top:2rem;
                margin-left: 3rem;
                border:0;
                color:#fff;
            }
        }
        .hid{
            line-height:3rem;         
            width:8rem;           
            background:#fff;
            border:1px solid #ccc;
        
              display: flex;
              justify-content: flex-start;
              margin: 1rem auto;
             img{
                display: inline-block;
                padding-left:1.5rem;
                margin-top:.5rem;
                width:4rem;
                height:2.2rem;               
            }  
            span{
                display: inline-block;
                padding-left:.5rem;           
            }        
        }       
    }
    .parmass{
        p{
            background:#f5f5f5;
            line-height: 2.5rem;
            padding:0 1rem;
        }
        .list{
            padding:1rem;
            li{
                    line-height: 1.5em;
                 color: #555;
                 font-weight: bold;
                padding-top:.5rem;
                 span{
                     color:#555;
                     font-weight: normal;
                 }
            }
        }
    }
    .pic_detail{
        p{
             background:#f5f5f5;
            line-height: 2.5rem;
            padding:0 1rem;
        }
        img{
            width: 20rem;
            height:20rem;
            margin:0 auto;
        }
    }
    .acess{
        p{
            background:#f5f5f5;
            line-height: 2.5rem;
            padding:0 1rem;         
        }
    }
}
</style>
