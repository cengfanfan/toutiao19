import router from "../router"
import progress from 'nprogress'
import 'nprogress/nprogress.css'
// import nProgress from "nprogress"
router.beforeEach(function(to,from,next){
    progress.start()
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
router.afterEach(function(){
    progress.done();
    // setTimeout(()=>{
    //     progress.done(),500
    // })
})