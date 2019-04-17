import React, { Component } from 'react';
import './index.css'; 

class Square extends Component {
    
    render() {
        return (<button className = "square" onClick = {this.props.click}>
        {this.props.value}
        </button> );
    }
}
 
export default Square;


