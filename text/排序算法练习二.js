// //  直接插入排序
// // 定义要排序的数组
// const arr = [53, 7, 52, 1, 98, 10, 87, 25, 63, 46];

// // 插入排序函数
// function insertionSort(arr) {
//   const len = arr.length;
//   for (let i = 1; i < len; i++) {
//     let j = i - 1;
//     const temp = arr[i];
//     while(j >= 0 && arr[j] > temp) {
//       arr[j+1] = arr[j];
//       j--;
//     }
//     arr[j+1] = temp;
//   }
//   return arr;
// }

// // 调用插入排序函数并输出结果
// console.log(insertionSort(arr)); //输出结果为：[1, 7, 10, 25, 46, 52, 53, 63, 87, 98]


// // 定义要排序的数组
// const arr = [53, 7, 52, 1, 98, 10, 87, 25, 63, 46];

// // 希尔排序函数
// function shellSort(arr) {
//   const len = arr.length;

//   // 定义增量序列
//   const gaps = [5, 2, 1];
  
//   // 循环遍历增量序列
//   for (let g = 0; g < gaps.length; g++) {
//     const gap = gaps[g];
//     // 对每个增量进行插入排序
//     for (let i = gap; i < len; i++) {
//       const temp = arr[i];
//       let j = i;
//       while (j >= gap && arr[j - gap] > temp) {
//         arr[j] = arr[j - gap];
//         j -= gap;
//       }
//       arr[j] = temp;
//     }
//   }
//   return arr;
// }

// // 调用希尔排序函数并输出结果
// console.log(shellSort(arr));   //[1, 7, 10, 25, 46, 52, 53, 63, 87, 98]




// // 定义要排序的数组
// const arr = [53, 7, 52, 1, 98, 10, 87, 25, 63, 46];

// // 基数排序函数
// function radixSort(arr) {
//   const maxNum = Math.max(...arr);
//   let digit = 1;
//   while (digit <= maxNum) {
//     // 创建10个桶
//     const buckets = Array.from({length: 10}, () => []);
//     for (let i = 0; i < arr.length; i++) {
//       const num = arr[i];
//       const digitNum = Math.floor(num/digit) % 10;
//       buckets[digitNum].push(num);
//     }
//     // 合并所有桶中的数字
//     arr = [].concat(...buckets);
//     digit *= 10;
//   }
//   return arr;
// }

// // 调用基数排序函数并输出结果
// console.log(radixSort(arr));   //[1, 7, 10, 25, 46, 52, 53, 63, 87, 98]




// 定义要排序的数组
const arr = [53, 7, 52, 1, 98, 10, 87, 25, 63, 46];

// 归并排序函数
function mergeSort(arr) {
  const len = arr.length;
  if (len <= 1) {
    return arr;
  }
  const mid = Math.floor(len/2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// 合并两个有序数组
function merge(leftArr, rightArr) {
  const temp = [];
  let leftIndex = 0, rightIndex = 0;
  while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      temp.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      temp.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  return temp.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

// 调用归并排序函数并输出结果
console.log(mergeSort(arr));    //[1, 7, 10, 25, 46, 52, 53, 63, 87, 98]






