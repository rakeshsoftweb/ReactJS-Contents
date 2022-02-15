// Action name AddEmployee
const AddEmp = function(Employee)
{
    console.log("action is called");
    return {type:'ADD-EMPLOYEE', payload :Employee}
}

export default AddEmp;