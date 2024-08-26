import getImageUrl from '@/utils/methods/getImageUrl/index';

declare module 'vue' {
  interface ComponentCustomProperties {
    $getImageUrl: typeof getImageUrl;
  }
}
