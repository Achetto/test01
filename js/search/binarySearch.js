Array.prototype.binarySearch = function (item) {
  let low = 0;
  let high = this.length - 1;
  while(low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = this[mid];
    if (element < item) {
      low = mid + 1;
    } else if (element > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

// 前提这个数组是有序的, 时间复杂度为O(logN);
const res = [1,2,3,4,5].binarySearch(5);
