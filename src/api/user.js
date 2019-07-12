import request from "../util/request"


export const login = data => {
    return request({
        method:'post',
        url:'/login',
        data    
    })
}


