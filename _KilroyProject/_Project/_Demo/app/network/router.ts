import Vue from 'vue';
import VueRouter from 'vue-router';

/**
 * 页面
 */
import Index from '../view/page/index.vue';

/**
 * 路由
 */
export const routes = [
    {
        path: '/', // 首页
        component: Index
    },
    {
        path: '/index', // 首页
        component: Index
    }
];

Vue.use(VueRouter);
export default new VueRouter({
    routes
});
