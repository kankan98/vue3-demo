<template>
  <div class="not-found">
    <img
      src="~@/assets/img/404.jpg"
      alt="404"
      @click="backHome"
    />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const backHome = () => {
  router.back();
};

</script>

<style lang="scss" scoped>
.not-found {
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
}
</style>
