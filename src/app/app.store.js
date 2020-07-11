import Vue from 'vue';
import Vuex from 'vuex';

/**
 * 使用插件
 */
Vue.use(Vuex);

/**
 * 配置选项
 */
const options = {
  state: {
    appName: process.env.VUE_APP_NAME,
  },
};

/**
 * 创建 Store
 */
const store = new Vuex.Store(options);

/**
 * 默认导出
 */
export default store;
