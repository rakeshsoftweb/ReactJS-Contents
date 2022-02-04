import React, { Component } from 'react';
class Display extends Component {
    constructor() {
        super();
        
    }
    onInputChange = (e)=>{
        console.log("this is input change ", e.target.value);
    }
  
    render() {
        console.log("render");
        return (
            <>
                <h1>Display</h1>             
                <input type="text" onChange={this.onInputChange}  />
            </>
        )
    }
}

export default Display;