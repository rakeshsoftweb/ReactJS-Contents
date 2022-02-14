import React from 'react';
import HOC from './HOC';
const ClientFunc = ()=>{
    return(
        <>
            <h5>Client Component</h5>
        </>
    )
}
const Client  = new HOC(ClientFunc)
export default Client;