const abc = ["hello", "hi", "why"];
for (let i = 0; i < abc.length; i++) {
  console.log(abc);
}
const sum = [];
for (let i = 0; i < abc.length; i++) {
  sum.push(abc[i]);
}
console.log(sum);
// console.log(abc[1])
for (let i = 0; i <= 10; i++) {
  if (i < 4) {
    console.log(i + 2);
  } else {
    console.log(i);
  }
}
// ##########################printing even number##############################################
for (let a = 2; a <= 20; a += 2) {
  console.log(a);
}
// ##########################Countdown##############################################
for (let a = 20; a >= 1; a--) {
  console.log(a);
}
// ##########################  add the sum of the number ##############################################
// let add = 0;
// for (let i = 1; i <= 5; i++) {
//   console.log(add += i);
// }
// console.log("add =", add);
// ##########################  add the sum of the number ##############################################\
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(i, "*", j, "=", i * j);
  }
}


let  add= 0;
for (let i = 1; i <= 5; i++) {
  add += i;
  console.log("Iteration", i, ":", add);
}