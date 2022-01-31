function GetSalary(salary, wd = 31, mdays=31)
{
  
    let getSalary = (salary /mdays) * wd;
    console.log(getSalary);
}

GetSalary(50000,28);
GetSalary(60000);
GetSalary(70000);
GetSalary(90000);
GetSalary(80000,30);