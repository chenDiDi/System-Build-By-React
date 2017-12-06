/**
 * created by didi on 2017/12.6
 **/

// 检测一个字符串是否是一个数据URL
export function isDataUrl(s) {
  return !!s.match(isDataUrl.regex);
}
isDataUrl.regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
