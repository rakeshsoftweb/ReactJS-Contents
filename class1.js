class Employee {
    constructor(mdays)
    {
        // super();
        console.log("Employee ", mdays);
    }
    AddEmployee()
    {
        console.log("Add Employee ");
    }
    EditEmployee()
    {
        console.log("Edit Employee ");
    }
    DeleteEmployee()
    {
        console.log("Delete Employee")
    }
}
class Salary extends Employee{
    constructor(mdays){
      super(mdays);  
      console.log(mdays);
    }
    GenerateSalary()
    {
        console.log("Generate Salary");
    }
}

class Report extends Salary {
    
    GenerateReport(){

    }
}

let sal = new Salary(31);
sal.AddEmployee();
sal.EditEmployee();
sal.DeleteEmployee();
sal.GenerateSalary();
