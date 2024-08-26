<template>
  <div class="login">
    <LoginPanel />
    <!-- <div class="beian">
      <a href="https://beian.miit.gov.cn">湘ICP备2021017188号-1</a>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginPanel from './comps/LoginPanel.vue';
export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}

.beian {
  position: absolute;
  z-index: 999;
  font-size: 14px;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);

  a {
    color: #333;
    text-decoration: none;

    &:hover {
      color: skyblue;
    }
  }
}
</style>
