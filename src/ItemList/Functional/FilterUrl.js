/* eslint sort-keys: 0 */
/* eslint quote-props: 0 */
import { base64decode, base64encode } from './Base64';

const blanketMap = {
  '.': 1,
  '-': 2,
  '~': 3,
  '*': 4,
  '!': 5
};

const blanket = '.-~*!_';

export function urlToFilter(code) {
  const currFilter = {
    intersectOrUnion: true,
    search: '',
    tags: []
  };
  let lastTag = - 1;
  let currCode = '';
  for (let i = 0; i < code.length; ++i) {
    const c = code.charAt(i);
    let ttt = false;
    for (let j = 0; j < blanket.length; ++j) {
      if (c === blanket.charAt(j)) {
        const p = base64decode(currCode);
        if (lastTag === - 1) {
          if (p === 1) {
            currFilter.intersectOrUnion = false;
          }
        } else {
          currFilter.tags[lastTag] = p;
        }
        if (c === '_') {
          currFilter.search = decodeURIComponent(code.substring(i + 1));
          return currFilter;
        }
        let n = blanketMap[c];
        while (n--) {
          currFilter.tags[++lastTag] = 0;
        }
        ttt = true;
        break;
      }
    }
    if (ttt) {
      currCode = '';
    } else {
      currCode += c;
    }
  }
  return false;
  // that function is beautiful, okay?
}

export function filterToUrl(filter) {
  let code = filter.intersectOrUnion ? '' : '1';
  let blanks = 0;
  for (let i = 0; i < filter.tags.length; ++i) {
    if (filter.tags[i] === 0) {
      ++blanks;
    } else {
      while (blanks > 4) {
        code += blanket.charAt(4);
        blanks -= 4;
      }
      code += blanket.charAt(blanks);
      blanks = 0;
      code += base64encode(filter.tags[i]);
    }
  }
  code += '_';
  code += encodeURIComponent(filter.search);
  return code;
}

/*
  intersectOrUnion => 0 = intersect (default) - true ,   1 = union - false

 */
