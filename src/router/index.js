import Router from "vue-router" 
import Home from "../pages/Home"
import Login from "../pages/Login"
import Vue from "vue"
Vue.use(Router)
const router =  new Router ({
    mode:"history",
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/login',
            name:'Login',
            component:Login
        }
    ]
})


// router.beforeEach((to,from,next)=>{
//     next()
// })
// router.afterEach(to=>{

// })

export default router ; 


