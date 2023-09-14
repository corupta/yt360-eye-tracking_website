export function eqObj(x, y) {
  if (typeof x === 'object' && typeof y === 'object') {
    const xKeys = Object.keys(x).sort();
    const yKeys = Object.keys(y).sort();
    if (xKeys.length !== yKeys.length) {
      return false;
    }
    for (let i = 0; i < xKeys.length; ++i) {
      const myKey = xKeys[i];
      if (!eqObj(myKey, yKeys[i]) || !eqObj(x[myKey], y[myKey])) {
        return false;
      }
    }
    return true;
  }
  return x === y;
}

export const perInt = 30;

export const maxTagGroups = 1;
