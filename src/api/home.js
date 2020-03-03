import api from '../utils/request' 
export function initHome(){
    return api.get('/')
}
export function log(){
    return api.get('/common/log')
}