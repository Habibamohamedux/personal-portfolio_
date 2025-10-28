import React, { Component } from 'react';
import './centertitle.css';
const centertitle = (props) => {
    return ( 
        <h1 className='centertitle'>{}{props.centertitle}</h1>
     );
}
 
export default centertitle;