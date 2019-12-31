import request from '../utils/request'
import {API_ARTICLES,API_CHANNELS,} from '../constant/api'
export function getatricles(params){
    return request({
        url:API_ARTICLES,
        params
    })
}
//channels
export function getTypeList(){
    return request({
        url:API_CHANNELS
    })
}
//articles
export function getComment(){
    return request({
        url:API_ARTICLES,
        
    })
}