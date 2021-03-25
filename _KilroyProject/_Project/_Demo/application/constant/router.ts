import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '../page/index.vue';

Vue.use(VueRouter);

/**
 * 路由
 */
export default new VueRouter({
    mode: 'history',
    routes: [
        // 一级页面
        {
            path: '/', // 首页
            component: Index
        }
        
        // 二级页面
    ]
});
