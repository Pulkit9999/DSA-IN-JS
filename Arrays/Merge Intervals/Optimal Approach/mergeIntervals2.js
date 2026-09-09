// Optimal Approach
// Imagine laying intervals out on a number line. If two intervals overlap, we can combine them into one, like merging blocks that touch or overlap.

// Instead of checking each interval with every other one (as in brute-force), we first sort the intervals, so that any overlapping intervals will come one after the other. This way, we only need to compare each interval with the last one added to our answer. If they overlap, we merge them. If they don’t, we simply add the current interval as a new entry.
// Sort the intervals based on their starting points. This ensures overlapping intervals come together.
// Initialize an empty list to store the final merged intervals.
// If the list is empty or the current interval starts after the last one ends, it means there is no overlap, so just add it to the list.
// If the current interval starts before or exactly at the end of the last one, it means there is overlap. So, combine both by extending the end of the last one to the further end of the two.
// Keep doing this until all intervals have been checked. The final list will now contain only non-overlapping, merged intervals.

function mergeIntervals(intervals) {
  let size = intervals.length;
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];

  for (let i = 0; i < size; i++) {
    // add the interval in the resultant array if it is empty or if the element at the 0th index(first element) for the current interval is greater than the element at the 1st index (second element) in the previously computed resultant array.
    if (result.length == 0 || intervals[i][0] > result[result.length - 1][1]) {
      result.push(intervals[i]);
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        intervals[i][1],
      );
    }
  }
  return result;
}

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
let ans = mergeIntervals(intervals);
console.log(ans);
for (const interval of ans) console.log(interval[0], interval[1]);
