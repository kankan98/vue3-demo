<template>
  <div class="base-echart">
    <div
      ref="echartRef"
      class="echart"
      :style="{ width, height }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch, watchEffect } from 'vue';
// echart hooks
import useEchart from '../hooks/useEchart';
import { EChartsOption } from 'echarts';

const props = withDefaults(
  defineProps<{
    options: EChartsOption;
    width?: string;
    height?: string;
  }>(),
  {
    width: '100%',
    height: '300px'
  }
);

// 基于准备好的dom，初始化echarts实例
const echartRef = ref<HTMLElement>();

onMounted(() => {
  const { setOptions } = useEchart(echartRef.value!);
  // 监听options配置的改变
  watchEffect(() => {
    setOptions(props.options);
  });
});
</script>

<style scoped lang="scss">
.base-echart {}
</style>
