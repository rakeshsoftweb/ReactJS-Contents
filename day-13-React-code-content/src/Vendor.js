import React from 'react';
import HOC from './HOC';
const VendorFunc = ()=>{
    return(
        <>
            <h5>Vendor Component</h5>
        </>
    )
}
const Vendor  = new HOC(VendorFunc)
export default Vendor;