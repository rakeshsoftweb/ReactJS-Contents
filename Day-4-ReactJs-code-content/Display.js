import React, { Component } from 'react';
class Display extends Component {
    constructor(props)
    {
        super();
        this.state = {textData:'this is default text'};
        // console.log("Display : ", title);
    }
    onChangeHandler = ()=>{
        this.setState({textData:'this text changed'});
    }
    onClear = ()=>{
        this.setState({textData:''});
    }
    render()
    {
        // let { title, amount } = this.props;
        return(
            <>
                {/* <h1>props : {title}</h1>
                <h1>Amount : {amount}</h1> */}
                {/* <h1>props : {this.props.title}</h1>
                <h1>Amount : {this.props.amount}</h1> */}
                <h1>{this.state.textData}</h1>
                <button onClick={this.onChangeHandler}>Change text data</button>
                <button onClick={this.onClear}>Clear</button>
            </>
        )
    }

}

export default Display