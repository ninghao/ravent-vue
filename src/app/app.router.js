import Vue from 'vue';
import VueRouter from 'vue-router';

/**
 * 使用插件
 */
Vue.use(VueRouter);

/**
 * 配置选项
 */
const options = {
  mode: 'history',
  base: process.env.BASE_URL,
};

/**
 * 创建路由
 */
const router = new VueRouter(options);

/**
 * 默认导出
 */
export default router;
