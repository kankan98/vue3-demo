// 按需导入图标入口

import type { App } from 'vue';
import registerElementIcons from './register-element-icons';
import { registerProperties } from './register-properties';

//app.use 默认执行其中的函数并且传入app对象
export function globalRegister(app: App): void {
  // app.use(registerElementIcons);或
  registerElementIcons(app);
  registerProperties(app);
}
