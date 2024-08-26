import { createApp } from 'vue';
import { createPinia } from 'pinia';
// 全局方法
import { globalRegister } from './global/index';
// 全局自定义指令
import { setupGlobDirectives } from '@/directives';
import registerGlobalMethods from './utils/methods/index';
// 导入饿了么css动画
import 'element-plus/dist/index.css';
// 导入初始化css库
import 'normalize.css';
import './assets/css/index.scss';
// 导入图标
import './assets/font/iconfont.js';
import App from './App.vue';
import router from './router';

import { useLoginStore } from './stores/login';

const app = createApp(App);
// 全局方法
globalRegister(app);
setupGlobDirectives(app);
app.use(createPinia());

// 刷新页面重新加载pinia信息
const loginStore = useLoginStore();
await loginStore.loadLocalLogin();
app.use(router).use(registerGlobalMethods);
app.mount('#app');
