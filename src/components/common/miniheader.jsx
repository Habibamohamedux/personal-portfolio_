import React, { Component } from 'react';
import './miniheader.css';
const miniheader  = (props) => {
    return ( 
        <h5 className='miniheader'>
            {props.miniheader}
        </h5>
     );
}
 
export default miniheader;