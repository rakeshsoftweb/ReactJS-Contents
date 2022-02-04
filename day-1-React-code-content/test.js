// var Emp1 = {empid:123,empname:'Rahul'};
// var Emp2 = {empid:124,salary:99999};
// const Result = Object.assign(Emp1, Emp2);
// console.log(Result);


var val1 = 123;
var val2 = "123";
const Result = Object.is(val1,val2);
console.log(Result);
