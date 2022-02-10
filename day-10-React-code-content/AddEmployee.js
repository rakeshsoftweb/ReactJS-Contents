import React, { Component } from 'react';
import axios from 'axios';
class AddEmployee extends Component{
    constructor()
    {
        super();
        this.state = {Employee:{id:'',employeeName:'', address:'',city:''}, showMessage:''}
    }
    onChangeHandler = (e)=>
    {
        let {name, value }= e.target;
        let { Employee } = this.state;
        this.setState({Employee:{...Employee,[name]:value}});
    }
    onSubmit = (e)=>
    {
        e.preventDefault();
        const URL = "http://localhost:4000/Employee";
        axios.post(URL, this.state.Employee).then(response=>{
            console.log(response);
            if(response.statusText ==="Created")
            {
                this.setState({showMessage:'Record has been inserted'});
            }
        });
    }
    render()
    {
        let { Employee, showMessage } = this.state;
        return(
            <>
               <div>
               <span className="alert-success">{showMessage}</span>
               <form onSubmit={this.onSubmit}>
                <h5>Add Employee</h5>
                <div className="form-group">
                    <label>Employee Id</label>
                    <input type="text" className="form-control" name="id" value={Employee.id} onChange={this.onChangeHandler} />
                </div>
                <div className="form-group">
                    <label>Employee Name</label>
                    <input type="text" className="form-control" name="employeeName" value={Employee.employeeName} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" name="address" value={Employee.address} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" name="city" value={Employee.city} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                  <button type="submit">Submit</button>
                </div>
                </form>
               </div>
            </>
        )
    }

}

export default AddEmployee;
