import React from 'react';
// import sore to communicate or sending request
import store from './store/store';
// import action here 
import AddEmp from './action/emp';

const AddEmployee = ()=>{

    const onAddEmployee = ()=>{
        console.log("Employee Add Request");
        // making request to store 
        store.dispatch(AddEmp({eid:1,ename:'rohit'}));
    }
    return(
        <>
            <h5>Add Employee</h5>
            <button onClick={onAddEmployee}>Add Employee</button>
        </>
    )
}

export default AddEmployee;