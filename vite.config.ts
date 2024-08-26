import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),

    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [ElementPlusResolver()],
      dts: fileURLToPath(new URL('./src/auto-imports.d.ts', import.meta.url))
      // eslintrc: {
      //   // 已存在文件设置默认 false，需要更新时再打开，防止每次更新都重新生成
      //   enabled: false,
      //   // 生成文件地址和名称
      //   filepath: fileURLToPath(
      //     new URL('./.eslintrc-auto-import.json', import.meta.url)
      //   ),
      //   globalsPropValue: true
      // }
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: fileURLToPath(new URL('./src/components.d.ts', import.meta.url))
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 varibles.scss 这样就可以在全局中使用 varibles.scss中预定义的变量了
        // 给导入的路径最后加上 ;
        additionalData: '@import "@/assets/style/varibles.scss";'
      }
    }
  }
});
