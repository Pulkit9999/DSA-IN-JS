let arr = [12, 31, 35, 8, 32, 17];

function merge(arr, start, mid, end) {
  let temp = [];
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }
  while (i <= mid) {
    temp.push(arr[i]);
    i++;
  }
  while (j <= end) {
    temp.push(arr[j]);
    j++;
  }

  for (let idx = 0; idx < temp.length; idx++) {
    arr[start + idx] = temp[idx];
  }
}

function mergeSort(arr, start, end) {
  if (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    mergeSort(arr, start, mid); //left half
    mergeSort(arr, mid + 1, end); // right half
    merge(arr, start, mid, end);
  }
}
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
