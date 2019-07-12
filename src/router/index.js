import Router from "vue-router" 
import Login from "../pages/Login"
import LeftMenu from "../components/LeftMenu"
import Vue from "vue"
Vue.use(Router)
const router =  new Router ({
    mode:"history",
    routes:[
        {
            path:'/LeftMenu',
            name:'Home',
            component:LeftMenu,
            redirect:'/home',
            children:[
                {
                    path:'/home',
                    component : ()=>import('../pages/Home'),
                    name:'Home'
                },
                {
                    path:'/write',
                    component : ()=>import('../pages/Write'),
                    name:'Write'
                }
            ]
        },
        {
            path:'/login',
            name:'Login',
            component:Login
        }
    ]
})


router.beforeEach((to,from,next)=>{
    if(to.path === '/login') return next()
    let token = localStorage.getItem('token');
    if(token){
        //已登录
        next()
    }else{
        //未登录
       next('/login?'+'from='+to.path)
    }
})

export default router ; 


