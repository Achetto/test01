class MinHeap {
  constructor() {
      this.heap = [];
  }
  swap(i1, i2) {
      const temp = this.heap[i1];
      this.heap[i1] = this.heap[i2];
      this.heap[i2] = temp;
  }
  getParentIndex(i) {
      return (i - 1) >> 1;  // 二进制向左边移动一位，达到除以2的效果
  }
  getLeftIndex(i) {
      return i * 2 + 1;
  }
  getRightIndex(i) {
      return i * 2 + 2;
  }
  shiftUp(index) {
      if (index == 0) { return; }
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] > this.heap[index]) {
          this.swap(parentIndex, index);
          this.shiftUp(parentIndex);
      }
  }
  shiftDown(index) {
      const leftIndex = this.getLeftIndex(index);
      const rightIndex = this.getRightIndex(index);
      if (this.heap[leftIndex] < this.heap[index]) {
          this.swap(leftIndex, index);
          this.shiftDown(leftIndex);
      }
      if (this.heap[rightIndex] < this.heap[index]) {
          this.swap(rightIndex, index);
          this.shiftDown(rightIndex);
      }
  }
  insert(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
  }
  pop () {
    // 把堆顶删除
    if (this.size() < 1) return void 0;
    if (this.size() === 1) return this.heap.pop();
    let top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return top;
  }
  peek() {
      return this.heap[0];
  }
  size() {
      return this.heap.length;
  }
}


