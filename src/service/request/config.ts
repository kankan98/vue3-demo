// 定义不同环境下的环境变量

let BASE_URL = '';
const TIME_OUT = 10000;
if (import.meta.env.DEV) {
  // BASE_URL = 'http://152.136.185.210:5000/';
  BASE_URL = 'http://10.168.1.200:8080/bd-monitor';
} else if (import.meta.env.PROD) {
  BASE_URL = 'http://152.136.185.210:5000';
} else {
  BASE_URL = 'http://httpbin.org/test';
}

export { BASE_URL, TIME_OUT };
