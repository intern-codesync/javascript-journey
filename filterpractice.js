const age = [
    {name:"ahmad", age:20},
    {name:"mahad", age:15},
    {name:"hasan", age:18},
    {name:"khawar", age:19},
    {name:"johan", age:14},
    {name:"david", age:30},
];
const ageTotal = age.filter((item) =>{
    return item.age >= 18
});
console.log("ageTotal:",ageTotal)