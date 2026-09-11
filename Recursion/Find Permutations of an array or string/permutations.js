//   We are given an arr = [1,2,3] and we have to print all the possible permutations of the array elements. These will be n!. (in case there are 3 elements in array , then 3!=6).

function recurPermute(arr, ds, freqMap, ans) {
  if (ds.length === arr.length) {
    ans.push([...ds]);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!freqMap.has(arr[i])) {
      ds.push(arr[i]);
      freqMap.set(arr[i], 1);
      recurPermute(arr, ds, freqMap, ans);
      freqMap.delete(arr[i]);
      ds.pop();
    }
  }
}

function permute(arr) {
  let freqMap = new Map();
  for (let [key, value] in freqMap) {
    freqMap.set(key, 0);
  }
  let ds = [];
  let ans = [];
  recurPermute(arr, ds, freqMap, ans);
  return ans;
}

let arr = [1, 2, 3];
let ans = permute(arr);
console.log(ans);
