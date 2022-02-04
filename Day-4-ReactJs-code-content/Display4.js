import React, { Component } from 'react';
import Displayhdr  from './Displayhdr';

class Display4 extends Component {
    constructor() {
        super();
        this.state = { FullName:'', address:'' };
    }
    onInputChange = (event)=>{
        let { name, value } = event.target;
        console.log("Input box changed " , name, value);
        // this.setState({FullName:value});
        if(name==='FullName')
        {
            this.setState({FullName:value});
        }
        if(name==='address')
        {
            this.setState({address:value});
        }
    }
    render()
    {
        let { FullName, address } = this.state;
        return(
            <>
               <div className='form-group'>
               <h1>{FullName}</h1>
               <Displayhdr fullname={FullName} address ={address} />
               <label>Full Name : </label>
                <input type="text" className='form-control' name="FullName" value={FullName} onChange={this.onInputChange}/>
               </div>
               <div className='form-group'>
               <label>Address : </label>
                <input type="text" className='form-control' name="address" value={address} onChange={this.onInputChange}/>
               </div>
            </>
        )
    }

}

export default Display4;