import React, { Component } from 'react';
import './centerparagraph.css';
const centerparagraph = (props) => {
    return ( 
        <h1 className='centerparagraph'>{}{props.centerparagraph}</h1>
     );
}
 
export default centerparagraph;