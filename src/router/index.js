import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/demoItem',
            component: resolve => require(['../components/page/DemoItem.vue'], resolve),
        },
        {
            path: '/message',
            component: resolve => require(['../components/page/Message.vue'], resolve),
        },

        {
            path: '/call',
            component: resolve => require(['../components/page/Call.vue'], resolve),
        },
        {
            path: '/whiteboard',
            component: resolve => require(['../components/page/Whiteboard.vue'], resolve),
        },
        {
            path: '/file',
            component: resolve => require(['../components/page/File.vue'], resolve),
        },
        {
            path: '/group',
            component: resolve => require(['../components/page/Group.vue'], resolve),
        },
        {
            path: '/confrence',
            component: resolve => require(['../components/page/Confrence.vue'], resolve),
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
