import React from 'react';
import './Calltoaction.css';


const Calltoaction = (props) => {
  return (
    <button className="cta-btn" onClick={props.handleClick}>
      {props.cta}
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11" fill="none">
        <path d="M0.705792 1.74846C0.641836 1.42868 0.849172 1.11768 1.16895 1.05372L6.37949 0.0116118C6.69927 -0.0523444 7.01028 0.154992 7.07423 0.474771L8.11634 5.68531C8.1803 6.00509 7.97296 6.3161 7.65318 6.38005C7.33346 6.4439 7.02239 6.23662 6.95844 5.91689L6.19589 2.10414L1.08195 9.77506C0.901054 10.0464 0.534445 10.1197 0.263103 9.93883C-0.0082381 9.75794 -0.08156 9.39133 0.0993343 9.11999L5.21328 1.44907L1.40053 2.21162C1.08081 2.27556 0.769824 2.06814 0.705792 1.74846Z" fill="white"/>
      </svg>
    </button>
  );
}

export default Calltoaction;