import React, {Component } from 'react';
import axios from 'axios';
class Employees extends Component
{
    constructor()
    {
        super();
        this.state = {Employees:[]};
    }
    componentDidMount()
    {
        axios.get("http://localhost:4000/Employee").then(response=>{
            this.setState({Employees:response.data});
        })
    }
    render()
    {
        let { Employees } = this.state;
        console.log(Employees);
        return(
            <>
            <h1>Employees </h1>
            <table className="table">
            <tbody>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
            </tr>
                {Employees.map((item,idx)=>{
                    return(
                        <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.employeeName}</td>
                            <td>{item.address}</td>
                            <td>{item.city}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
            </>
        )
    }
}
export default Employees;