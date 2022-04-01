const log = console.log;

let arr = [1, -2, 3, 4, -2];

// findAllSubArr(arr);

function findAllSubArr(array) {
  for (let s = 0; s < array.length; s++) {
    for (let e = s; e < array.length; e++) {
      const a = [];
      for (let index = s; index <= e; index++) {
        a.push(array[index]);
      }
      log(a);
    }
  }
}

kadenAlgo(arr);

function kadenAlgo(arr) {
  // remove carry
  let carry_sum = 0;
  let max_sum = 0;

  let end = 0;
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    carry_sum += arr[i];

    if (carry_sum > max_sum) {
      max_sum = carry_sum;
      end = i;
    }

    if (carry_sum < 0) {
      carry_sum = 0;
      start = i + 1;
    }
  }

  log(start);
  log(end);
}
