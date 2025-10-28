import React, { Component } from 'react';
import './Videotxtbtn.css';
const Videotxtbtn = (props) => {
    return ( 
        <div className="videotxtbtn-container">
            <p>{props.videotxtbtn}</p>
        </div>
     );
}
 
export default Videotxtbtn;