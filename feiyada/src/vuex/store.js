import Vuex from 'vuex'
import Vue from 'vue'
Vue.use (Vuex)

const state ={
   
        cart:{username:'abc',
        goodsData:localStorage.goodsData?JSON.parse(localStorage.goodsData):[]
        
        },
        userInfo:{
            nickname:'',
            username:''
          
       
        }
    }
    
    const getters = {
        pureCar(state){
            return state.cart.goodsData 
        },
        all_price_num(state){
            let all={price:0,num:0}
            state.cart.goodsData.forEach((item,i)=>{
                all.num+=item.num;
                all.price+=item.num*item.price
            })
            return all
        }
    }
    
    const mutation1 = {
        addGood(state,{goodid,price,tit,produce,url}){
            let goodsData = state.cart.goodsData 
            let isHas = false
            for(var i = 0;i<goodsData.length;i++){
                if(goodsData[i].goodid==goodid){
                    goodsData[i].num++
                    isHas=true
                    break;
                }
            }
            if(!isHas){
                goodsData.push({goodid,price,produce,url,tit,num:1})
            }
    
            localStorage.goodsData = JSON.stringify(goodsData)
        }
    }
const mutation2 = {
    reduceGood(state,goodid){
        let goodsData = state.cart.goodsData
        for(var i=0;i<goodsData.length;i++){
            if(goodsData[i].goodid==goodid){
                goodsData[i].num--
                if(goodsData[i].num==0){
                    goodsData.splice(i,1)
                }
                break;
            }
            
        }
        localStorage.goodsData = JSON.stringify(goodsData)
    }
}
const mutation3 = {
    removeGood(state,goodid){
        let goodsData = state.cart.goodsData
        for(var i = 0;i<goodsData.length;i++){
            if(goodsData[i].goodid==goodid){
                goodsData.splice(i,1)
                break;
            }
        }
        localStorage.goodsData = JSON.stringify(goodsData)
    }
}
const mutation4={
    changeUserInfo(state,userinfo){
        state.userInfo={
            nickname:'',
            username:''
           
        }
    },
    exit(state){
        state.userInfo={
            nickname:'',
            username:''
        }
    }
   

}
const mutations = Object.assign({},mutation1,mutation2,mutation3,mutation4)
import actions from './actions'
const store = new Vuex.Store({
    state,mutations,actions,getters
})
export default store