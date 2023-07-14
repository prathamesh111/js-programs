const num = [2, 3 ,4 ,4,232, 21, 6];


// map function
var newNum = num.map((num) => {
  return num*2;
})
console.log(newNum);
console.log(num);


// filter function
var newFilter = num.filter((num) => {
  return num % 2==0;
})

console.log(newFilter);

var sum = num.reduce((acc, cv) => {
  return acc+ cv
})

console.log(sum);