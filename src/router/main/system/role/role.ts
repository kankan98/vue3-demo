const role = () => import('@/views/main/system/role/role.vue');
export default {
  path: '/sys/role',
  name: 'role',
  component: role,
  children: []
};
