// Currying is a technique is JavaScript where a function with multiple arguments is transformed into a sequence of multiple functions , each having a single argument.

// function add(x) {
//   return function add2(y) {
//     return x + y;
//   };
// }

// console.log(add(2)(3));

// f(a,b,c) ----> f(a)(b)(c)

// Practical Example ---> Base URL and other API endpoints

function login(baseURL) {
  return function apiEndPoint(endpoint) {
    let response = fetch(`${baseURL}/${endpoint}`);
    response
      .then((data) => {
        return data.json();
      })
      .then((datas) => {
        console.log(datas);
      });
  };
}

login("https://api.github.com")("users");
