import type { App } from 'vue';

const modules = import.meta.glob('./*/index.ts');

export default {
  install: (app: App) => {
    Object.keys(modules).forEach(async (item) => {
      const name = item.slice(2, -9);
      const module = (await modules[item]()) as any;
      app.config.globalProperties[`$${name}`] = module.default;
    });
  }
};
