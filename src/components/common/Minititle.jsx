import React, { Component } from 'react';
import './Minititle.css';
const Minititle   = (props) => {
    return (
        <div>
            <h3 className="minititle">{props.minititle}</h3>
        </div>
      );
}
 
export default Minititle;