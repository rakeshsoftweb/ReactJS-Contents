import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Employees from './Employees';
import Employee from './Employee';
import Admin from './Admin';
import Client from './Client';
import Login from './Login'
function Display2() {
    return (
        <>
            <div className="text-center"><h5>Routing</h5></div>
            <Router>
                <div className="row">
                    <div className="col-md-2">
                        {/* <ul>
                            <li className="mr-2"><Link to="/">Dashboard</Link></li>
                            <li className="mr-2"><Link to="/employees">Employees </Link></li>
                            <li className="mr-2"><Link to="/client">Client </Link></li>                          
                        </ul> */}
                    </div>
                    <div className="col-md-10">
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/employees" element={<Employees/>}/>
                            <Route path="/employees/:eid/:ename" element={<Employee/>}/>
                            <Route path="/client*" element={<Client/>}/>
                            <Route path="/*" element={<Admin/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default Display2
