<template>
    <div class="app-main-gb">
        <div class="good_title"><a href="">男士腕表</a></div>
    <ul>
        <!-- <li v-for="(listItem1,i) in listItem1" :key="i" >  <router-link  :to="{name:'boygood',params:{id:listItem1.id,b_items:listItem1.b_items}}">{{listItem1.b_items}}</router-link></li></li> -->
        <li v-for="(lists1,i) in listItem1" :key="i" ><a  @click.prevent="save1(i)">{{lists1.b_items}}</a></li>
       
    </ul>
    <div class="good_title"><a href="">女士腕表</a></div>
  <ul>
       <!-- <li v-for="(lists2,i) in listItem2" :key="i" ><router-link  :to="{name:'girlgood',params:{id:lists2.id,g_items:lists2.g_items}}">{{lists2.g_items}}</router-link></li> -->
       <li v-for="(lists2,i) in listItem2" :key="i"><a @click.prevent="save2(i)">{{lists2.g_items}}</a></li>
         
  </ul>
    </div>
</template>



<script>

    export default {
        name:'AppMainGB',
        data(){
            return{
                listItem1:[
                    {'id':1,'b_items':'银系列'},{'id':2,'b_items':'摄影师系列'},{'id':3,'b_items':'极限系列'},{'id':4,'b_items':'艺系列'},{'id':5,'b_items':'经典系列'},{'id':6,'b_items':'航天系列'},{'id':7,'b_items':'大师系列'},{'id':8,'b_items':'卓雅系列'},{'id':9,'b_items':'恒生系列'},{'id':10,'b_items':'郎璇系列'},{'id':11,'b_items':'心动系列'},{'id':12,'b_items':'凤仪系列'},{'id':13,'b_items':'金纯系列'},{'id':14,'b_items':'祈福系列'},{'id':15,'b_items':'飞行系列'},
                    {'id':16,'b_items':'金纯系列'},{'id':17,'b_items':'特工系列'},{'id':18,'b_items':'纪念系列'}
                ],
                listItem2:[
                     {'id':1,'g_items':'花语系列'},{'id':2,'g_items':'Yuong+系列'},{'id':3,'g_items':'四叶草系列'},{'id':4,'g_items':'心弦系列'},{'id':5,'g_items':'玲珑系列'},{'id':6,'g_items':'IF系列'},{'id':7,'g_items':'摄影师系列'},{'id':8,'g_items':'艺系列'},{'id':9,'g_items':'银系列'},{'id':10,'g_items':'银系列'},{'id':11,'g_items':'银系列'},{'id':12,'g_items':'银系列'},{'id':13,'g_items':'银系列'},{'id':14,'g_items':'银系列'},{'id':15,'g_items':'银系列'},
                    {'id':16,'g_items':'银系列'},{'id':17,'g_items':'银系列'},{'id':18,'g_items':'银系列'}
                ]
            }
        },
        
        methods:{          
            save1(i=null){ 
                var that = this          
                 this.$router.push(       
                    {name:'boygood',params:{id:that.listItem1[i].id,b_items:that.listItem1[i].b_items}}
                   )
                  // console.log(that.listItem1[i].id)   
             },    
       
            save2(i=null){
                var that=this
                this.$router.push(
                    {name:'girlgood',params:{id:that.listItem2[i].id,g_items:that.listItem2[i].g_items}}
                )
            }
        },
        created(){
       // console.log("wsw")
        },
        mounted(){
        }

       
     }

</script>
<style lang="scss">
    .app-main-gb{
        .good_title{
            padding:.5rem;
            padding-left:1rem;
           margin-bottom:1rem;
            border-bottom:1px solid #ccc;
            a{
                 
                font-size:1.4rem;
            }
          
        }
        ul{
            display: flex;
            justify-content: space-between;
            padding-left:.5rem;
            padding-right:.5rem;
            flex-wrap: wrap;
            margin-bottom:1rem;
            li{
                width:45%;
                margin-bottom:.8rem;
                margin-right:.8rem;
                

                a{
                     display: block;
                    padding: .5em 1em;
                    background: #f3f3f3;
                    font-size:1.1rem;
                    color:#777;
                }
            }
        }

    }
</style>
