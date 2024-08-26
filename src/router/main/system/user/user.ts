const user = () => import('@/views/main/system/user/user.vue');
export default {
  path: '/sys/user',
  name: 'user',
  component: user,
  children: []
};
