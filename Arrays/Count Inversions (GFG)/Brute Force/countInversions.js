// Given an array of integers arr[]. You have to find the Inversion Count of the array. Inversion count is the number of pairs of elements (i, j) such that i < j and arr[i] > arr[j].

// Examples:

// Input: arr[] = [2, 4, 1, 3, 5]
// Output: 3
// Explanation: The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).

let arr = [2, 4, 1, 3, 5];
let ans = [];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (i < j && arr[i] > arr[j]) {
      count++;
      ans.push([arr[i], arr[j]]);
    }
  }
}
console.log(ans);
console.log("Total number of inversions = ", count);
