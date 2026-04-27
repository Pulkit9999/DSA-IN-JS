let btn = document.getElementById("btn");
btn.style.width = "100px";
btn.style.height = "30px";

let counter = 0;

function handleClick() {
  console.log("Button clicked " + counter++ + " " + "times ");
}

function throttle(fn, limit) {
  let flag = true;
  return function () {
    if (flag) {
      fn();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}
let betterFunction = throttle(handleClick, 300);
