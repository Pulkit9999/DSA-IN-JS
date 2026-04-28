// // KMP Algorithm is used for pattern matching where we have to prepare a LPS (Longest Prefix Suffix) array .
// // I will first write the code to implement LPS array. After that , I will solve the problem named
// // "Check if a string is rotation of the other string".

// let str = "ABCABDABCABDABDAB";

// function generateLPS(str) {
//   let n = str.length;
//   let lps = new Array(n).fill(0);

//   let pre = 0,
//     suf = 1;

//   while (suf < n) {
//     if (str[pre] == str[suf]) {
//       lps[suf] = pre + 1;
//       pre++;
//       suf++;
//     } else {
//       if (pre == 0) {
//         lps[suf] = 0;
//         suf++;
//       } else {
//         pre = lps[pre - 1];
//       }
//     }
//   }
//   console.log(lps);
//   return lps;
// }

// console.log(generateLPS(str));

// // The above code is used to generate an LPS

let s1 = "aab";
let s2 = "aba";

function computeLPS(s2) {
  let pre = 0,
    suf = 1;
  let n = s2.length;
  let lps = new Array(n).fill(0);

  while (suf < n) {
    if (s2[pre] == s2[suf]) {
      lps[suf] = pre + 1;
      pre++;
      suf++;
    } else {
      if (pre == 0) {
        lps[suf] = 0;
        suf++;
      } else {
        pre = lps[pre - 1];
      }
    }
  }

  return lps;
}

console.log(computeLPS(s2));

// This is the actual code responsible for checking whether a string is rotation of the other. Here , we will use computeLPS() function.

function checkForRotation(s1, s2) {
  let text = s1 + s1;
  let pat = s2;

  let lps = computeLPS(pat);

  let n = text.length;
  let m = pat.length;

  let i = 0,
    j = 0;

  while (i < n) {
    if (text[i] == pat[j]) {
      i++;
      j++;
    }
    if (j == m) {
      return true;
    } else if (i < n && pat[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
  return false;
}
console.log(checkForRotation(s1, s2));
