// using call method function borrowing --- use this method on function and pass refrence

function printName(hometown = "notPassed"){
  console.log(this.firstname +" " +this.lastname + " " + hometown);

}

let Fname= {
firstname : 'prat',
lastname : 'samudra',
}


let sname= {
firstname : 'sachin',
lastname : 'tehdulkar',
}

printName.call(Fname);
printName.call(sname, "Mumbai");


// Using apply method -- only diff is we pass arguments in array

printName.apply(Fname, ["maharashtra"]);



// Using bind method

var fullName = printName.bind(Fname, "Delhi");
console.log(fullName())
