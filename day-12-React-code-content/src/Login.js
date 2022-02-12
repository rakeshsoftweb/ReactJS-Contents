import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
const [userId, setUserId] = useState();
const [password, setPassword] = useState();
const navigate = useNavigate();
    const onSubmit =()=>{
        console.log("submit", userId,password);
        // api request 
        if(userId ==="admin" && password==="123")
        {
            navigate("/employees");
        }
    }


    return (
        <>
            <form onSubmit={onSubmit}>
                <h5>Login</h5>
                <div className="form-group">
                    <label>User</label>
                    <input type="text" className="form-control" onChange={(e)=>setUserId(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Login