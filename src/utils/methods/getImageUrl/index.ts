/**
 * @description:
 * @param {string} folder 上级文件夹名
 * @param {string} fileName 文件名
 * @param {string} type 文件类型
 * @return {*}
 */
export default (folder: string, fileName: string, type: string = 'png') => {
  return new URL(
    `../../../assets/${folder}/${fileName}.${type}`,
    import.meta.url
  ).href;
};
