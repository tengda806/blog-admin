import request from "../util/request"


export const savePost = data => {
    return request({
        method:'post',
        url:'/post',
        data    
    })
}


export const putPost = data => {
    return request({
        method:'put',
        url:'/post',
        data    
    })
}


export const delPost = data => {
    return request({
        method:'delete',
        url:'/post',
        params:data
    })
}


export const getPost = data => {
    return request({
        method:'get',
        url:'/post',
        params:data    
    })
}