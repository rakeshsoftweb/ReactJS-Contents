import React, { Component } from 'react';

class Displayhdr extends Component {
    constructor(props) {
        super();
        
    }
    render()
    {
        let { fullname, address } = this.props;
        return(
            <>
                <h1>{fullname.length ? fullname :'Please Enter Full Name'}</h1>
                {/* <h1>{address.length ? address :'Please Enter Address'}</h1> */}
            </>
        )
    }
}

export default Displayhdr