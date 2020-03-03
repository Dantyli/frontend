import axios from 'axios';
import {Toast} from 'antd-mobile'
axios.defaults.withCredentials=true
const baseURL='http://localhost:7001'
/**
 * 
 * 返回错误统一处理，只传递正确状态的数据
 *  */
axios.interceptors.response.use(rep=>{
        return rep.data;
},err=>{
    Toast.info('网络错误！');
    return Promise.reject(err);
})
/** 
 * 请求中添加openid和token
*/
// axios.interceptors.request.use((request) => {
//     let REQUEST_DATA = request.data
//     if(sessionStorage.getItem('openid')){
//         REQUEST_DATA={...REQUEST_DATA,'operation_id':sessionStorage.getItem('openid')}
//     }else{
//         REQUEST_DATA={...REQUEST_DATA,'operation_id':''}
//     }
//     if(localStorage.getItem('token')){
//         REQUEST_DATA={...REQUEST_DATA,'token':localStorage.getItem('token')}
//     }
//     request.data = QS.stringify(REQUEST_DATA)
//     return request;
   
//   }, function (error) {
//     // Do something with request error
//     return false;
//   });
  
export default{
    get(url,params={},notUseBaseURL=false){
        return axios.get(url,{
            baseURL:notUseBaseURL?'':baseURL,
            params
        })
    },
    post(url,params={},notUseBaseURL=false){
        return axios.post(url,params,{
            baseURL:notUseBaseURL?'':baseURL
        })
    }
}