import request from "../util/request"


export const login = data => {
    return request({
        methods:'post',
        url:'/login',
        data
    })
}


