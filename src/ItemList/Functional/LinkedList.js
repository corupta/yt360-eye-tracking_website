/* eslint no-void: 0 */
export default class LinkedList {
  constructor() {
    this.data = {};
    this.getLen = this.getLen.bind(this);
    this.push = this.push.bind(this);
    this.remove = this.remove.bind(this);
    this.iterate = this.iterate.bind(this);
    this.clear = this.clear.bind(this);
  }
  getLen() {
    return this.length;
  }
  push(data) {
    this.data[this.lastId] = { data, next: null, prev: this.tail };
    if (this.tail !== null) {
      this.data[this.tail].next = this.lastId;
    }
    this.tail = this.lastId;
    if (++this.length === 1) {
      this.head = this.lastId;
    }
    return this.lastId++;
  }
  remove(key) {
    if (this.data[key].prev !== null) {
      this.data[this.data[key].prev].next = this.data[key].next;
    }
    if (this.data[key].next !== null) {
      this.data[this.data[key].next].prev = this.data[key].prev;
    }
    if (key === this.tail) {
      this.tail = this.data[key].prev;
    }
    if (key === this.head) {
      this.head = this.data[key].next;
    }
    --this.length;
    this.data[key] = void 0;
  }
  iterate(callback) {
    if (this.length) {
      const res = [];
      for (let i = this.head; i !== null; i = this.data[i].next) {
        res.push(callback(this.data[i].data));
      }
      return res;
    }
    return false;
  }
  clear() {
    this.data = {};
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.lastId = 0;
  }
}
