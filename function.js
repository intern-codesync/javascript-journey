// function employes() {
//     let name = ["ahmad", "hasan", "khawar"]
//     for(let a = 1; a < 5; a++){
//         console.log("name",a)
//     }
//     console.log("ahmad");
//     console.log("hamza");
//     console.log("khalid");
//     console.log("khawar");
//     console.log("hasan");
// }
// employes();

function adding(x, y) {
  return x * y;
}
console.log(adding(2, 3));

// let modal = false

// function sum() {
//   modal = true
// }
// console.log(
//     sum() ,
//     modal
// );

// ################################# Arrow function ############################
function arrowSum(a, b) {
  return a + b;
}
const arrowSum = (a, b) => {
  console.log(a + b);
};
arrowSum();

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(checkEvenOrOdd(5)); // Output: Odd console.log(checkEvenOrOdd(6)); // Output: Even

function celsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(celsiusToFahrenheit(30)); // Output: 86
