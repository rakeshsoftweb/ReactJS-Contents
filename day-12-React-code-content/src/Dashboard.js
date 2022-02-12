import React from 'react';
import { Link } from 'react-router-dom';
function Dashboard()
{
    return(
        <>
            <h5>Dashboard</h5>
            <div>
                <Link to="/">Back</Link>
            </div>
        </>
    )
}

export default Dashboard