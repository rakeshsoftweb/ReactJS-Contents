import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
const Dashboard = React.lazy(()=>{
    return new Promise((Resolve)=>{
        setTimeout(()=>{
            Resolve(import('./Dashboard'));
        },3000)
    });
})

const Client = React.lazy(()=>{
    return new Promise((Resolve)=>{
        setTimeout(()=>{
            Resolve(import('./Client'));
        },3000)
    });
})
// const Dashboard = React.lazy(()=>import('./Dashboard'));
// const Client = React.lazy(()=>import('./Client'));

function Sidebar()
{
    return(
        <>
            <h5>Routing</h5>
           <Router>
                {/* <Link className="btn btn-primary pr-2" to="/dashboard">Dashboard</Link>
                <Link className="btn btn-primary pr-2" to="/client">Client</Link> */}
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/client">Client</NavLink>
                <React.Suspense fallback={<h5>Loading ....</h5>}>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/client" element={<Client/>}/>
                </Routes>
                </React.Suspense>
           </Router>
        </>
    )
}

export default Sidebar;