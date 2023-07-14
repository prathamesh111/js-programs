const num = [2, 3 ,4 ,4,232, 21, 6];
sum =0;

// sum of numbers using for loop

for(let i=0; i<num.length ; i++){
  sum  = sum+ num[i];
}
console.log(sum);


// using for each loop


num.forEach((num) => {
  sum  = sum + num;
})
console.log(sum)

// using reduce method

var sum = num.reduce((acc, cv) => {
  return acc+ cv
})

console.log(sum);