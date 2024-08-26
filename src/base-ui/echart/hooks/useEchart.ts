import * as echarts from 'echarts';

import ChinaMapData from '../data/chinaMapData.json';

echarts.registerMap('china', ChinaMapData);

export default function (el: HTMLElement, theme = 'light', type: any = 'svg') {
  const echartInstance = echarts.init(el, theme, { renderer: type });
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options);
  };
  const updateResize = () => {
    echartInstance.resize();
  };
  window.addEventListener('resize', () => {
    echartInstance.resize();
  });

  return {
    echartInstance,
    setOptions,
    updateResize
  };
}
