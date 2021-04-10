let arr = [10, 2, 4, 5, 123, 45];

mergeSort(arr);

function mergeSort(arr) {
  createMergeSort(arr);

  for (let i = arr.length - 1; i >= 0; i--) {
    swap(0, i, arr);
    siftDown(0, i - 1, arr);
  }

  console.log(arr);
}

function createMergeSort(arr) {
  const len = arr.length - 1;
  const firstParent = Math.floor(len - 1 / 2);

  for (let currentIdx = firstParent; currentIdx >= 0; currentIdx--) {
    siftDown(currentIdx, len, arr);
  }
}

function siftDown(currentIdx, endIdx, heap) {
  let childONe = currentIdx * 2 + 1;
  while (childONe <= endIdx) {
    const childTwo = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
    let swapTo;

    if (childTwo !== -1 && heap[childTwo] > heap[childONe]) {
      swapTo = childTwo;
    } else {
      swapTo = childONe;
    }

    if (heap[currentIdx] < heap[swapTo]) {
      swap(currentIdx, swapTo, heap);
      currentIdx = swapTo;
      childONe = currentIdx * 2 + 1;
    } else {
      return;
    }
  }
}

function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
