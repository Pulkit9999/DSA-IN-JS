let arr = [0, 2, 1, 2, 0, 1, 2];

function sort012(arr) {
  let low = 0;
  let mid = 0;
  let hi = arr.length - 1;

  while (mid <= hi) {
    if (arr[mid] == 0) {
      let temp = arr[low];
      arr[low] = arr[mid];
      arr[mid] = temp;
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      let temp = arr[mid];
      arr[mid] = arr[hi];
      arr[hi] = temp;
      hi--;
    }
  }
}

sort012(arr);
console.log(arr);
