const LETTERS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-';
export default class Base64 {
  static encode(intValue) {
    let tmp = intValue;
    let res = '';
    while (tmp) {
      res = LETTERS.charAt(tmp & 0x3f) + res;
      tmp >>>= 6;
    }
    return res;
  }
}