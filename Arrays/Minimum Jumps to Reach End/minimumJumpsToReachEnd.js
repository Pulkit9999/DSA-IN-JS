let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];

function minimumJumps(arr) {
  let maxi = 0;
  let choices = 0;
  let jumps = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    maxi = Math.max(maxi, arr[i] + i);

    if (i == choices) {
      choices = maxi;
      jumps++;
    }
  }

  if (choices >= arr.length - 1) return jumps;

  return -1;
}

console.log(minimumJumps(arr));
