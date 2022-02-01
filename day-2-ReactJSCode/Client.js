import React, { Component } from 'react';
class Client extends Component {
    constructor() {
        super();
        this.state = {
            Counter: 1, Name: 'Test', ClientData: [{ clientid: 123, clientname: 'A1 Pvt Ltd', address: 'New Delhi' },
            { clientid: 124, clientname: 'A2 Pvt Ltd', address: 'New Delhi' },
            { clientid: 125, clientname: 'A3 Pvt Ltd', address: 'New Delhi' },
            { clientid: 126, clientname: 'A4 Pvt Ltd', address: 'New Delhi' },
            { clientid: 127, clientname: 'A5 Pvt Ltd', address: 'New Delhi' }
            ]
        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    // Counter = 1;
    onClickHandler() {
        // this.Counter = this.Counter + 1;
        let { Counter } = this.state;
        Counter++;
        this.setState({ Counter });
        console.log("Click is called ", Counter);
    }
    render() {
        return (
            <>
                {/* <h1>Client : {this.Counter}</h1> */}
                {/* <h1>{this.state.Name}</h1> */}
                {/* <h1>Counter : {this.state.Counter}</h1> */}
                <h1>User Status : </h1>
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <th>Client Id</th>
                            <th>Client Name</th>
                            <th>Address</th>
                            <th>Select</th>
                        </tr>
                        {this.state.ClientData.map((item, idx) => {
                            return (
                                <tr key={idx}><td>{item.clientid}</td>
                                    <td>{item.clientname}</td>
                                    <td>{item.address}</td>
                                    <td><button className='btn btn-info'>Select</button></td>
                                </tr>
                            )
                          })
                        }
                    </tbody>
                </table>


                <button className='btn btn-primary' onClick={this.onClickHandler}>Click</button>
            </>
        )
    }
}

export default Client;