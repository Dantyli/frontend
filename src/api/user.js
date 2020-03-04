import api from '../utils/request' 
export function getEmailCode(param){
    return api.post('/user/sendCode',param)
}