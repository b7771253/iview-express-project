import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
import store from './../store/store'

// 导入相应的子组件
import Blog from './../components/Blog'
import page404 from './../components/404'
import BlogIndex from './../components/pages/BlogIndex'
import PicIndex from './../components/pages/PicIndex'

Vue.use(Router)
//Vue.use(store)

var router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/blog',
            component: Blog,
            children: [
                {path: '', component: BlogIndex},
                {path: 'pic', component: PicIndex},
            ]
        },
        {
            path: '/tools',
            component: (resolve) => require(['./../components/Tools.vue'], resolve),
            children:[
                {path: 'idip', component: (resolve) => require(['./../components/tool/idip.vue'], resolve)},
                {path: '', component: (resolve) => require(['./../components/tool/toolTest.vue'], resolve)},
            ]
        },
        {path: '*', component: page404}
    ]
})

export default router