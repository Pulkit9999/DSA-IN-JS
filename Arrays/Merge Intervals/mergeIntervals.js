
// Brute force approach
// The main idea is to combine intervals that overlap with each other. To do this easily, we first sort the intervals by their starting point so that all overlapping intervals come next to each other. Then, for each interval, we try to see if the next ones overlap with it. If they do, we merge them into one bigger interval. We keep doing this until we find a non-overlapping interval, and then start the process again from that point.
// Sort all intervals based on their starting points. This helps bring all overlapping intervals next to each other.
// Go through each interval one by one and if the current interval is already covered by a previously merged interval, skip it. Else, pick the current interval as the starting point of a new merged interval.
// Now run another loop to check if the following intervals overlap with the current one
// If the start of next interval is less than or equal to the end of the current merged interval, it means they overlap. Therefore, extend the end of the merged interval to be the maximum of the two ends.
// Keep doing this for the next intervals as long as they overlap. As soon as you find an interval that doesn't overlap, break the inner loop and move back to the outer loop to process the next non-overlapping interval.
// Store each merged interval in the final answer list and after the loop ends, return the list of merged intervals.

function mergeIntervals(intervals) {
  let size = intervals.length;
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  // Checking all possible overlapping inervals
  for (let i = 0; i < size; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];
    // Skipping already merged intervals
    if (result.length > 0 && end <= result[result.length - 1][1]) {
      continue;
    }
    // find the end of the merged range , basically in order to make a new big interval that will accomodate (merge) the overlapping intervals.

    for (let j = i + 1; j < size; j++) {
      if (intervals[j][0] <= end) {
        end = Math.max(end, intervals[j][1]);
      }
    }
    result.push([start, end]);
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
