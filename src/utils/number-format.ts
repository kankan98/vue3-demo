export function formatNumber(num: number) {
  const str = num.toString();
  const len = str.length;
  if (len <= 3) {
    return str;
  }
  const r = len % 3;
  return r > 0
    ? str.slice(0, r) + ',' + str.slice(r, len).match(/\d{3}/g)!.join(',')
    : str.slice(r, len).match(/\d{3}/g)!.join(',');
}
