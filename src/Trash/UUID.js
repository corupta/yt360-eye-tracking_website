import Base64 from './Base64';

const maxN = 0xfffffff;

export default function generateUUID() {
  return Base64.encode(Math.round(Math.random() * maxN)) + Base64.encode(Math.round(Math.random() * maxN));
}
