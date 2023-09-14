import data from './DB';

const sortFunc = (a, b) => {
  const p = a.id.localeCompare(b.id);
  return p < 0 ? - 1 : p > 0 ? 1 : 0;
};

export default function FetchData() {
  const p = { ...data };
  // p.videos.sort(sortFunc);
  // p.galleries.sort(sortFunc);
  // p.tags.sort(sortFunc);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(p);
    }, /* 2000 */ 100);
  });
}
