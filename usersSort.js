const users = [
    {
        id: 1,
        name: 'prat',
        location: 'mum',
        salary: 12
    },
    {
        id: 22,
        name: 'akshay',
        location: 'banglore',
        salary: 166
    },
    {
        id: 4,
        name: 'sujneja',
        location: 'chennai',
        salary: 150
    },
    {
        id: 6,
        name: 'chet',
        location: 'pun',
        salary: 15
    }
]



// extracting names form array
const names = [];

// // For loop
// for(i=0 ;i<users.length ; i++){
//     names.push(users[i].name);
// }
// console.log(names);


// // for each loop

// users.forEach((user)=>{
//     names.push(user.name);
// })
// console.log(names);


// const filteted = users.filter((user) => {
//    return  user.salary > 100;
// }).map((Fuser) => {
//     return Fuser.name; 
// })

// console.log(filteted)



// sort function to sort array salary high to low

const sorted = users.sort((a, b) => {
  return  a.salary > b.salary ? -1 : 1
});
console.log(sorted)
