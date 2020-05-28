import React from 'react';

export default function Circle(props) {
  return (
    <div 
      className="circle" 
      onClick={() => props.removeCircle(props.circleObj)}
      style={{backgroundColor: props.circleObj.backgroundColor}}
    > 
      {props.circleObj.number}
    </div>
  );
}
