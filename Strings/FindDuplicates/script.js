let str = "Mississippi";

let map = new Map();

for (let x of str) {
  if (map.has(x)) {
    map.set(x, map.get(x) + 1);
  } else {
    map.set(x, 1);
  }
}
console.log(map);

for (let [key, value] of map) {
  if (value > 1) {
    console.log(key + " ----->  " + value);
  }
}
console.log(map);
