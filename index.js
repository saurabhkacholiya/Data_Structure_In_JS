let arr = [10, 2, 4, 5, 123, 45];

console.log();

const sortArr = mergeSort(arr);

console.log(sortArr);

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  const left = mergeSort(leftArr);
  const right = mergeSort(rightArr);
  return helperMergeSort(left, right);
}

function helperMergeSort(left, right) {
  const total = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      total.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      total.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  return [...total, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}
