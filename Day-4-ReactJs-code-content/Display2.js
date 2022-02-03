import React, { Component } from 'react';
class Display2 extends Component {
    constructor(props)
    {
        super();
        this.state = {Total:0};        
    }
    onBtnClick = (value)=>{
        let { Total } = this.state;
        Total = Total + value;
        this.setState({Total});
    }
    render()
    {
        let { Total } = this.state;
        return(
            <>
            <div>Total : {Total}</div>
                <button onClick={()=>this.onBtnClick(10)}>10</button>
                <button onClick={()=>this.onBtnClick(20)}>20</button>
                <button onClick={()=>this.onBtnClick(30)}>30</button>
                <button onClick={()=>this.onBtnClick(40)}>40</button>
                <button onClick={()=>this.onBtnClick(50)}>50</button>
            </>
        )
    }
}

export default Display2