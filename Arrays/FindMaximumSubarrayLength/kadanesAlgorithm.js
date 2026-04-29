// Kadane's Algorithm is used to find the length of the largest subaaray.
// The intuition is that we have to reset the sum value to zero if the sum < 0 (negative numbe) because
// a negative number will never contribute in finding the maximum sum .

// A question arises here ----> why we reset the sum to 0 after find the maximum sum.

// This comes from an edge case where all the array elements are negative , then length of the largest subarray should be negative (this is for sure because all array elements are negative numbers.)

// In such a case if we reset sum to 0 before finding the sum , the maximum sum will a positive value and the answer that we are expecting in this case is a negative number , so the answer will be wrong

let arr = [3, -4, 5, 4, -1, 7, -8];

let currentSum = 0;
maxSum = arr[0];
for (let i = 0; i < arr.length; i++) {
  currentSum += arr[i];
  maxSum = Math.max(currentSum, maxSum);
  // Now resetting the currentSum to 0 .... This is written after finding the maxSum because if it would have been done before finding the maxSum .... then the answer will turn to be wrong (in the case where array consists all the negative values...instead of a negative value ,  answer would have been positive (which will turn out to be wrong in case the array consists of all the negative numbers))
  if (currentSum < 0) {
    currentSum = 0;
  }
}

console.log(maxSum); // This will give 15 and the subarray will be [5,4,-1,7]---->5+4+(-1)+7 = 15.
