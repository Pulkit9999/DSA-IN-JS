let counter = 0;
function getData() {
  console.log("Fetching data....", counter++);
}
let debounce = (fn, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this);
    }, delay);
  };
};

let betterFunction = debounce(getData, 300);
