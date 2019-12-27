//这个全局注册组件的文件
import layoutHeadere from "./layout-header"
import layoutLeft from "./layout-left"
import BreakCrumb from './common/bread_crumb'
import CoverImg from './publish/cover-img'
import SelectImg from './publish/select-img'
export default{
    install(Vue){
        Vue.component('layout-header',layoutHeadere)
        Vue.component('layout-left',layoutLeft)
        Vue.component('bread-crumb',BreakCrumb)
        Vue.component('cover-img',CoverImg)
        Vue.component('select-img',SelectImg)
    }
}