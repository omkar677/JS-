const accountId = 14435
let accountEmail = "abc@gmail.com"
var accountPaaword = "1234"
accountCity = "Solapur"
let accountState;

// accountId = 2  //Not allowed 

accountEmail = "xyz@gmail.com"
accountPaaword = "76895"
accountCity = "Pune"

console.log(accountId);
// console.log(accountEmail);
// console.log(accountPaaword);
// console.log(accountCity);

/*
prefer not to use var 
because issue in block scope and functional scope 
*/
console.table([accountEmail,accountPaaword,accountCity,accountId,accountState])
