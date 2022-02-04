function GetEmp(eid,ename)
{
    this.empid = eid;
    this.empname = ename;
}

// new 

GetEmp.prototype.CompanyName ='Abc Pvt Ltd';

var Result  = new GetEmp(101,'Amit');
Result.designation ='Manager';
console.log(Result)
console.log(Result.empname);
console.log(Result.CompanyName);

var Result2  = new GetEmp(101,'Rajesh');
Result2.department ='HR';
console.log(Result2)
console.log(Result2.empname);
console.log(Result2.CompanyName)
