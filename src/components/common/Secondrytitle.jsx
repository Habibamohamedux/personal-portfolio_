import React, { Component } from 'react';
import './secondrytitle.css';
const secondrytitle = (props) => {
    return (
        <h2 className='secondrytitle'>{props.secondaryTitle}</h2>
      );
}

export default secondrytitle;