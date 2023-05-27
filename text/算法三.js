const arr = [21, 34, 56, 78, 99, 100, 102, 109, 200];

// 折半查找函数
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// 查找109
const index1 = binarySearch(arr, 109);
console.log(index1); // 7

// 查找20
const index2 = binarySearch(arr, 20);
console.log(index2); // -1
