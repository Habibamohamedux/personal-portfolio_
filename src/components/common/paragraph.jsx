import React, { Component } from 'react';
import './paragraph.css';
const paragraph = (props) => {
    return ( 
        <p className="paragraph">{props.paragraph}</p>
     );
}
 
export default  paragraph;