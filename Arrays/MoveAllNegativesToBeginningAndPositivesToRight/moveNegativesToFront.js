let arr = [23, 44, 55, 67, -90, -87, 87, 45, -56, -23, -34, 100];

let left = 0;
let right = arr.length - 1;

while (left < right) {
  while (left < right && arr[left] < 0) {
    left++;
  }

  while (right > left && arr[right] > 0) {
    right--;
  }
  if (right > left) {
    let temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
    left++;
    right--;
  }
}
console.log(arr);
