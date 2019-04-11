import Scroll from '../components/Scroll'
import Header from '../components/Header'
import { Icon ,Popup,Lazyload,Swipe, SwipeItem } from 'vant'



export default {
    install(Vue) {
        Vue.component(Scroll.name, Scroll);
        Vue.component(Header.name, Header);
        Vue.component(Icon.name, Icon);
        Vue.use(Popup),
        Vue.use(Lazyload),
        Vue.use(Swipe).use(SwipeItem);
    }
}