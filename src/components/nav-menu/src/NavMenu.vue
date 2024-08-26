<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.png" alt="logo" />
      <span v-show="!collapse" class="title">智能插座管理系统</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      background-color="#0c2135"
      :collapse="collapse"
      text-color="#b7bdc3"
      active-text-color="white"
    >
      <template v-for="item in userMenu" :key="item.menuId">
        <!-- 一级菜单且存在二级菜单 -->
        <template v-if="item.type === 0 && !!item.list?.length">
          <el-sub-menu :index="item.menuId + ''">
            <template #title>
              <kk-icon :name="item.icon === 'system' ? 'user' : ''"></kk-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.list" :key="subItem.menuId">
              <!-- 二级菜单且存在三级菜单 -->
              <template v-if="subItem.type === 1 && !!subItem.list?.length">
                <el-sub-menu :index="subItem.menuId + ''">
                  <template #title>
                    <span>{{ subItem.name }}</span>
                  </template>
                  <template v-for="subSubItem in subItem.list" :key="subSubItem.menuId">
                    <!-- 三级菜单 -->
                    <el-menu-item :index="subSubItem.menuId + ''" @click="handleMenuItemClick(subSubItem)">
                      <span>{{ subSubItem.name }}</span>
                    </el-menu-item>
                  </template>
                </el-sub-menu>
              </template>
              <!-- 只有二级菜单 -->
              <template v-else-if="subItem.type === 1 && !subItem.list?.length">
                <el-menu-item :index="subItem.menuId + ''" @click="handleMenuItemClick(subItem)">
                  <span>{{ subItem.name }}</span>
                </el-menu-item>
              </template>
            </template>
          </el-sub-menu>
        </template>
        <!-- 只有一级菜单 -->
        <template v-else-if="item.type === 0 && !item.list?.length">
          <el-menu-item class="first-menu-item" :index="item.menuId + ''" @click="handleMenuItemClick(item)">
            <kk-icon :name="item.icon === 'system' ? 'user' : ''"></kk-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useLoginStore } from '@/stores/login';
import { useRouter, useRoute } from 'vue-router';
import type { IMenuItem } from '../types';
import { pathMapToMenu } from '@/utils/map-menus';

import KkIcon from '@/base-ui/icon/index.vue';
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },

  components: {
    KkIcon
  },
  setup() {
    // store
    const loginStore = useLoginStore();
    const userMenu = computed(() => loginStore.userMenu);
    // router
    const router = useRouter();
    const route = useRoute();
    const currentPath = route.path;
    // data
    const menu = pathMapToMenu(userMenu.value, currentPath);
    console.log(menu, userMenu, currentPath);
    const defaultValue = ref(menu?.menuId + '');
    // event handle
    const handleMenuItemClick = (item: IMenuItem) => {
      router.push({
        path: '/' + item.url ?? '/not-found'
      });
    };
    return {
      userMenu,
      defaultValue,
      handleMenuItemClick
    };
  }
});
</script>

<style lang="scss" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 48px;
    padding: 20px 10px 10px 10px;

    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      text-wrap: nowrap;
      line-height: 100%;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-sub-menu {
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  :deep(.el-sub-menu__title) {
    background-color: #001529 !important;
  }
  .first-menu-item {
    background-color: #001529;
  }
  .el-menu-item.is-active {
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
