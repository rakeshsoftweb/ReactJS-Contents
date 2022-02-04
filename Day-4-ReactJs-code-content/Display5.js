import React, { Component } from 'react';
import Displayhdr from './Displayhdr';

class Display5 extends Component {
    constructor() {
        super();
        this.state = { FullName: '', address: '', InputBoxClass:'' };
    }
    onFocusHandler =(event)=>{
        // event.target.style.backgroundColor="green";
        this.setState({InputBoxClass:'bg-primary text-white'});
    }
    onBlurHandler =(event)=>{
        // event.target.style.backgroundColor ='red';
        this.setState({InputBoxClass:'bg-success text-white'});
    }
    render()
    {
        let { InputBoxClass } = this.state;
        return(
            <>
                <div className='form-group'>
                <label>Full Name</label>
                    <input type="text" className={"form-control " + InputBoxClass} onFocus={this.onFocusHandler} onBlur={this.onBlurHandler}/>
                </div>
                <div className='form-group'>
               
                   <button>Submit</button>
                </div>
            </>
        )
    }
}

export default Display5