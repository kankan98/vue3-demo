// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/%E5%AD%90%E7%B3%BB%E7%BB%9F%E9%A1%B9%E7%9B%AE/%E6%99%BA%E8%83%BD%E6%8F%92%E5%BA%A7%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/%E5%AD%90%E7%B3%BB%E7%BB%9F%E9%A1%B9%E7%9B%AE/%E6%99%BA%E8%83%BD%E6%8F%92%E5%BA%A7%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/%E5%AD%90%E7%B3%BB%E7%BB%9F%E9%A1%B9%E7%9B%AE/%E6%99%BA%E8%83%BD%E6%8F%92%E5%BA%A7%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import vueDevTools from "file:///D:/%E5%AD%90%E7%B3%BB%E7%BB%9F%E9%A1%B9%E7%9B%AE/%E6%99%BA%E8%83%BD%E6%8F%92%E5%BA%A7%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import AutoImport from "file:///D:/%E5%AD%90%E7%B3%BB%E7%BB%9F%E9%A1%B9%E7%9B%AE/%E6%99%BA%E8%83%BD%E6%8F%92%E5%BA%A7%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/%E5%AD%90%E7%B3%BB%E7%BB%9F%E9%A1%B9%E7%9B%AE/%E6%99%BA%E8%83%BD%E6%8F%92%E5%BA%A7%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/%E5%AD%90%E7%B3%BB%E7%BB%9F%E9%A1%B9%E7%9B%AE/%E6%99%BA%E8%83%BD%E6%8F%92%E5%BA%A7%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_import_meta_url = "file:///D:/%E5%AD%90%E7%B3%BB%E7%BB%9F%E9%A1%B9%E7%9B%AE/%E6%99%BA%E8%83%BD%E6%8F%92%E5%BA%A7%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      resolvers: [ElementPlusResolver()],
      dts: fileURLToPath(new URL("./src/auto-imports.d.ts", __vite_injected_original_import_meta_url))
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
      dts: fileURLToPath(new URL("./src/components.d.ts", __vite_injected_original_import_meta_url))
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
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
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTVCNTBcdTdDRkJcdTdFREZcdTk4NzlcdTc2RUVcXFxcXHU2NjdBXHU4MEZEXHU2M0QyXHU1RUE3XHU3QkExXHU3NDA2XHU3Q0ZCXHU3RURGXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTVCNTBcdTdDRkJcdTdFREZcdTk4NzlcdTc2RUVcXFxcXHU2NjdBXHU4MEZEXHU2M0QyXHU1RUE3XHU3QkExXHU3NDA2XHU3Q0ZCXHU3RURGXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTUlQUQlOTAlRTclQjMlQkIlRTclQkIlOUYlRTklQTElQjklRTclOUIlQUUvJUU2JTk5JUJBJUU4JTgzJUJEJUU2JThGJTkyJUU1JUJBJUE3JUU3JUFFJUExJUU3JTkwJTg2JUU3JUIzJUJCJUU3JUJCJTlGL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCc7XG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJztcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJztcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgdnVlSnN4KCksXG4gICAgdnVlRGV2VG9vbHMoKSxcblxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogWyd2dWUnLCAndnVlLXJvdXRlcicsICdwaW5pYSddLFxuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICAgIGR0czogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9hdXRvLWltcG9ydHMuZC50cycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgICAvLyBlc2xpbnRyYzoge1xuICAgICAgLy8gICAvLyBcdTVERjJcdTVCNThcdTU3MjhcdTY1ODdcdTRFRjZcdThCQkVcdTdGNkVcdTlFRDhcdThCQTQgZmFsc2VcdUZGMENcdTk3MDBcdTg5ODFcdTY2RjRcdTY1QjBcdTY1RjZcdTUxOERcdTYyNTNcdTVGMDBcdUZGMENcdTk2MzJcdTZCNjJcdTZCQ0ZcdTZCMjFcdTY2RjRcdTY1QjBcdTkwRkRcdTkxQ0RcdTY1QjBcdTc1MUZcdTYyMTBcbiAgICAgIC8vICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAvLyAgIC8vIFx1NzUxRlx1NjIxMFx1NjU4N1x1NEVGNlx1NTczMFx1NTc0MFx1NTQ4Q1x1NTQwRFx1NzlGMFxuICAgICAgLy8gICBmaWxlcGF0aDogZmlsZVVSTFRvUGF0aChcbiAgICAgIC8vICAgICBuZXcgVVJMKCcuLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uJywgaW1wb3J0Lm1ldGEudXJsKVxuICAgICAgLy8gICApLFxuICAgICAgLy8gICBnbG9iYWxzUHJvcFZhbHVlOiB0cnVlXG4gICAgICAvLyB9XG4gICAgfSksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxuICAgICAgZHRzOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjL2NvbXBvbmVudHMuZC50cycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfSxcbiAgY3NzOiB7XG4gICAgLy8gY3NzXHU5ODg0XHU1OTA0XHU3NDA2XHU1NjY4XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICAvLyBcdTVGMTVcdTUxNjUgdmFyaWJsZXMuc2NzcyBcdThGRDlcdTY4MzdcdTVDMzFcdTUzRUZcdTRFRTVcdTU3MjhcdTUxNjhcdTVDNDBcdTRFMkRcdTRGN0ZcdTc1MjggdmFyaWJsZXMuc2Nzc1x1NEUyRFx1OTg4NFx1NUI5QVx1NEU0OVx1NzY4NFx1NTNEOFx1OTFDRlx1NEU4NlxuICAgICAgICAvLyBcdTdFRDlcdTVCRkNcdTUxNjVcdTc2ODRcdThERUZcdTVGODRcdTY3MDBcdTU0MEVcdTUyQTBcdTRFMEEgO1xuICAgICAgICBhZGRpdGlvbmFsRGF0YTogJ0BpbXBvcnQgXCJAL2Fzc2V0cy9zdHlsZS92YXJpYmxlcy5zY3NzXCI7J1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1WLFNBQVMsZUFBZSxXQUFXO0FBRXRYLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFSMkcsSUFBTSwyQ0FBMkM7QUFVaE0sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLElBRVosV0FBVztBQUFBLE1BQ1QsU0FBUyxDQUFDLE9BQU8sY0FBYyxPQUFPO0FBQUEsTUFDdEMsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsTUFDakMsS0FBSyxjQUFjLElBQUksSUFBSSwyQkFBMkIsd0NBQWUsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVXhFLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ2pDLEtBQUssY0FBYyxJQUFJLElBQUkseUJBQXlCLHdDQUFlLENBQUM7QUFBQSxJQUN0RSxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQTtBQUFBLElBRUgscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBO0FBQUE7QUFBQSxRQUdKLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
