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
    appName: 'Ravent',
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
