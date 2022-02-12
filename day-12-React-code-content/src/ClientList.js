import React, { useState, useEffect } from 'react';
import axios from 'axios';
function ClientList() {
    const [id, setId] = useState();
    const [clientname, setClientName] = useState();
    const [address, setAddress] = useState();
    const [clientData, setClientData] = useState([]);

    useEffect(() => {
        LoadClient();
    }, [])

    const LoadClient = ()=>{
        axios.get("http://localhost:4000/clients").then(response => {
            setClientData(response.data);
            console.log(response.data);
        })
    }

    const onSubmit = ()=>{
        // console.log("Submitted");
        // let tempclientData = clientData;
        // tempclientData.push({id:id,clientname:clientname,address:address});
        // setClientData([...tempclientData]);
        let cData = {id:id,clientname:clientname,address:address};
        axios.post("http://localhost:4000/clients", cData).then(response=>{
                LoadClient();
        })
    }

    return (
        <>
            <h5>Client List</h5>
            <div className='row'>
                <div className="col-md-6">
                    <table className="table">
                        <tbody>
                            {clientData.map((item, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{item.id}</td>
                                        <td>{item.clientname}</td>
                                        <td>{item.address}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Client Id</label>
                        <input type="text" className="form-control" onChange={(e) => setId(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Client Name</label>
                        <input type="text" className="form-control" onChange={(e) => setClientName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="form-group">
                       <button onClick={onSubmit} className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )

}


export default ClientList;