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
    // 一级页面
    {
        path: '/', // 首页
        component: Index
    }
    
    // 二级页面
];

Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    routes
});
