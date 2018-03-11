import axios from 'axios'
import { Toast } from 'mint-ui';
export default {
    register({commit},params){
        //console.log(params)
        axios.post('/feiyada/users/register.do',params).then((res)=>{
            console.log(res)
           console.log(res.data)

            if(res.data===0){
                commit('changeUserInfo',res.data) 
                Toast('注册成功')
                location.href ='/main'  
                                       
            }else{  
                Toast('用户名重名')                        
                     
            }
        })
    },
    login({commit},params){
        axios.get('/feiyada/users/login.do',{params}).then((res)=>{
            console.log(res)
            if(res.data.username){
                commit('changeUserInfo',res.data) 
                location.href ='/index'            
            }else{
                Toast('请先注册')
            }
        })
    }
   
}

