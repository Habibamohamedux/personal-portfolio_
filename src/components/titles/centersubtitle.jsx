import React, { Component } from 'react';
import './centersubtitle.css';
const Centersubtitle = (props) => {
    return ( 
        <h1 className='centersubtitle'>{}{props.centertitle}</h1>
     );
}
 
export default Centersubtitle;