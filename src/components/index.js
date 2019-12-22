//这个全局注册组件的文件
import layoutHeadere from "./layout-header"
import layoutLeft from "./layout-left"
// import layoutMain from "../views/home/home"
// import commentList from "../views/comment"
import BreakCrumb from './common/bread_crumb'
export default{
    install(Vue){
        Vue.component('layout-header',layoutHeadere)
        Vue.component('layout-left',layoutLeft)
        // Vue.component('layout-main',layoutMain)
        // Vue.component('comment-list',commentList)
        Vue.component('bread-crumb',BreakCrumb)
    }
}