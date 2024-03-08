// const numbers = [1,16,14, 13, 8, 130, 44];

// const found = numbers.find(function(element) {
//   return element > 10;
// });

// console.log(found);
// Writing a note
// const array = [1, 2, 5, 3, 4, 5, 5, 4, 1];

// // Reducer function to calculate the sum of all elements in the array
// const reducer = (Good, value) => Good + value;

// // Applying reduce() to the array with the reducer function
// const sum = array.reduce(reducer);

// console.log(sum); 
// const array = [2,3,4,5,7,8,9,6]

//     function num (firstNumber, secondNumber) {
//         return firstNumber + secondNumber
//     }
//     const sum = array.reduce(num)
//     console.log("num",sum); 
// const arrays = [[1, 2], [3, 4], [5, 6]];
// const flattenedArray = arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
// console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
// Set Item
// Storing a user's name in localStorage
var userName = "John Doe";
localStorage.setItem("username", userName);

// Retrieving the user's name from localStorage and displaying it
var storedUserName = localStorage.getItem("username");
console.log("User's name is: " + storedUserName);


