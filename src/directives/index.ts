import type { App } from 'vue';
import { setupLoadMoreDirective } from './loadMore';

export function setupGlobDirectives(app: App) {
  setupLoadMoreDirective(app);
}
