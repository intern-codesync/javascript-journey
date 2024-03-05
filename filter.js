const arr2 = [25,26,86,10,80,3,5]
let a = arr2.filter((a) =>{
    return a < 10;
});
console.log(a);

let ary = [1,5,6,24,56,78,63,32]
let num = ary.filter((item) =>{
    return item > 10;
})
console.log(num);


// ***************************Filter Even Numbers****************************************
const number = [1,2,3,4,5,6,7,8,9,10]
const numeric = number.filter((number) =>{
    return  number % 2 === 0;

});
console.log(numeric);

// ***************************NAMES BY LENGTH****************************************
const names = ["Johan","Good","Ahmad","khawar","Hassan"]
const filternames = names.filter((item) =>{
  return item.length <= 5;
})
console.log(filternames);

// ***************************Filtering student by name****************************************
const student = [
    {name: "johan",grade: 75},
    {name: "khawar",grade: 25},
    {name: "mahad",grade: 18},
    {name: "ahmad",grade: 65},
    {name: "david",grade: 50},
];
const passStudent = student.filter((total) =>{
    return total.grade >=50;
});
console.log("passStudent:",passStudent);
