const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz()';
let map;
function readyMap() {
  if (typeof map === 'undefined') {
    map = {};
    for (let i = 0; i < letters.length; ++i) {
      map[letters.charAt(i)] = i;
    }
  }
}
export function base64decode(str) {
  readyMap();
  let res = 0;
  for (let i = 0; i < str.length; ++i) {
    res *= (1 << 6);
    res += map[str.charAt(i)];
  }
  return res;
}

export function base64encode(num) {
  let tmp = num;
  let res = '';
  while (tmp > 0) {
    res = letters.charAt(tmp & 0x3f) + res;
    tmp >>>= 6;
  }
  return res;
}
