
<template>
    <li class="app-good-item">
       
        <a  @click.prevent="save(type)"  >
            
            <img :src="info.url" alt="">
        </a>
         <div class="details">
             <p class="tit">{{info.tit}}</p>
             <p class="produce">{{info.produce}}</p>
             <div class="p_content">
                 <div class="price">{{info.price}}</div>
                 <div class="car">
                     <a><span @click="addGood({goodid:info.id,tit:info.tit,produce:info.produce,url:info.url,price:info.price})">{{info.join}}</span></a>
                     <a href=""><span>{{info.hidee}}</span></a>
                 </div>
             </div>
         </div>
    </li>
</template>
<script>
import {mapMutations,mapState,mapActions} from 'vuex'
import bus from '../bus';
    export default {
        name:'AppGoodItem',
        props:['info','type'],
        data (){
            return {
            }
        },
        computed:{
            ...mapState(['userInfo'])
        },
        
        methods:{
            save(type){
                this.$router.push({name:'detail',params:{id:this.info.id,type:this.type}})
                localStorage['id'] = this.info.id          
                  console.log(this.type)
            },
            changeType(){
                type=this.type
            },
            
             ...mapMutations(['addGood','reduceGood'])

        },
        watch:{
            userInfo(val){
                if(val.username==''){
                    this.$router.replace('login')
                }
            }
        },

        mounted(){
            var that = this        
      }
    }
</script>
<style lang="scss">
.list{
     margin:0;
     width:100%;
     background:#F5F5F5;
     padding-top:.5rem;
     padding-left:0;
     padding-bottom:.5rem;  
    .app-good-item{
        width:100%;
        display: flex;
        justify-content: space-between;
        padding-right:.5rem;
    
        a{

            img{
                width:6rem;
                height:6rem;
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

</style>
