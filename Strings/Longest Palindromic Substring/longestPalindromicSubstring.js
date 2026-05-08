let str = "forgeeksskeegfor";

function isPalindrome(i, j, str) {
  let low = i;
  let high = j;

  while (low < high) {
    if (str[low] !== str[high]) {
      return false;
    }
    low++;
    high--;
  }
  return true;
}

function largestPalindromicSubstring(str) {
  let maxLen = 1; // there may be a case when there is only one character in the string , so maxLen = 1
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (isPalindrome(i, j, str) && j - i + 1 > maxLen) {
        start = i;
        maxLen = j - i + 1;
      }
    }
  }
  return str.substring(start, start + maxLen);
}

console.log(largestPalindromicSubstring(str));
