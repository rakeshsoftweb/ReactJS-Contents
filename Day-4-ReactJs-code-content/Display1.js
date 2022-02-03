import React, { Component } from 'react';

class Display1 extends Component {
    constructor(props)
    {
        super();
        this.state = {counter:0};        
    }
    onCounter =()=>{
        let { counter } = this.state;
        counter++;
        this.setState({counter});
    }

    render()
    {
        let { counter } = this.state;
        console.log("render");
        return(
            <>
                <h1>Counter</h1>
                {/* Counter : {this.state.counter} */}
                Counter : {counter}
                <button onClick={this.onCounter}>Counter</button>
            </>
        )
    }
}
export default Display1