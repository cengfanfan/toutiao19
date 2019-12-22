import router from "../router"

router.beforeEach(function(to,from,next){
    if(to.path != "/login"){
        let token =window.localStorage.getItem('use-token')
        if(token){
            next()
        }else{
            next('/login')
        }
    }else{
        //登陆页无需拦截
        next()
    }
})