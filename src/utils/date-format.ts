import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
// 本地格式化
export const formatLocalTime = (
  utcString: string,
  format: string = DATE_TIME_FORMAT
) => dayjs.utc(utcString).local().format(format);

// 时间戳格式化显示
export const formatTimestamp = (
  timestamp: number,
  format: string = DATE_TIME_FORMAT
) => dayjs(timestamp).format(format);
