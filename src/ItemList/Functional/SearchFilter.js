/*
Dummy data mysql php faker
dummy data copy output to inferno
async fetch
search, tag, gallery



abcdefg

zmxndkzlsndndlslxjdnslsldnn

1st letter matches
points[k]
tot[k]

80% required

(tot - points)/maxTot > 20% break
*/

import Heap from 'js-heap';
// const Heap = require('js-heap');
const minSimilar = 0.7;
function iterateStep(str, obj) {
  let i = obj.ind;
  const t = str.charAt(i);
  let points = obj.proportion * i;
  if (obj.str.charAt(i) === t) {
    points += 1;
  } else if (obj.str.charAt(i - 1) === t
    || obj.str.charAt(i + 1) === t) {
    points += 0.5;
  }
  ++i;
  const n = str.length;
  if ((n - i + points) / n < minSimilar) {
    return false;
  }
  if (points / n >= minSimilar) {
    return true;
  }
  return { ind: i, proportion: points / i, str: obj.str };
}

export default function isSimilar(bigStrInit, smallStrInit) {
  if (smallStrInit === '') {
    return true;
  }
  const m = bigStrInit.length;
  const n = smallStrInit.length;
  if (m < n) {
    return isSimilar(smallStrInit, bigStrInit);
  }
  const smallStr = smallStrInit.toLowerCase();
  const bigStr = bigStrInit.toLowerCase();
  const heap = new Heap((a, b) => {
    return a.proportion - b.proportion;
  });
  for (let i = 0; i + n <= m; ++i) {
    const t = iterateStep(smallStr,
      {
        ind: 0,
        proportion: 0,
        str: bigStr.substring(i - 1, i + n + 1)
      }
    );
    if (t === true) {
      return true;
    }
    if (t) {
      heap.push(t);
    }
  }
  let p = heap.pop();
  while (p) {
    p = iterateStep(smallStr, p);
    if (p === true) {
      return true;
    }
    if (p) {
      heap.push(p);
    }
    p = heap.pop();
  }
  return false;
}
