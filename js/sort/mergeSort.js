Array.prototype.mergeSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) { return arr; }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    const orderLeft = rec(left);
    const orderRight = rec(right);
    const res = [];
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift());
      } else if (orderLeft.length) {
        res.push(orderLeft.shift());
      } else if (orderRight.length) {
        res.push(orderRight.shift());
      }
    }
    return res;
  }
  const res = rec(this);
  // 把arr里面的值改为res
  res.forEach((n, i) => {
    this[i] = n;
  })
}
// 分的时间复杂度O(logN)，并的时间复杂度O(n),总体时间复杂度是O(nlogN)
const arr = [2,5,4,8,2,1];
arr.mergeSort();
