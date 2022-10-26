Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if (arr.length < 2) { return arr; }
    const left = [];
    const right = [];
    const mid = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  };

  const res = rec(this);
  // 把arr里面的值改为res
  res.forEach((n, i) => {
    this[i] = n;
  })
}
// 递归时间复杂度O(logN),分区时间复杂度O(n),总体时间复杂度为O(nlogN);
const arr = [6,5,4,3,2,1];
arr.quickSort();
