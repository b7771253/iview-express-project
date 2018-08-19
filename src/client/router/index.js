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
            path: '/main',
            name:"index",
            component: (resolve) => require(['./../components/pages/FindFun.vue'], resolve),
            // children:[
            //     {path: 'idip', component: (resolve) => require(['./../components/Hello.vue'], resolve)},
            //     {path: 'b', component: (resolve) => require(['./../components/Blog.vue'], resolve)},
            // ]
        },
        {path: '/v',name:"v", component: (resolve) => require(['./../components/pages/Article.vue'], resolve)},
        {path: '*', component: (resolve) => require(['./../components/Hello.vue'], resolve)}
    ]
})

export default router