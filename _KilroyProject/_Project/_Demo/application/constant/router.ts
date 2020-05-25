import Vue from 'vue';
import VueRouter from 'vue-router';

/**
 * 页面
 */
import Index from '../page/index.vue';

Vue.use(VueRouter);

/**
 * 路由
 */
const Router = new VueRouter({
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
export default Router;
