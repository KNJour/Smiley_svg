import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Face from '../components/Face';



const Smileyalt = () => {

    const width = 1080;
    const height = 600;
    const circleRadius = 30;

    const [coordinates, setcoordinates] = useState({
        x: width / 3,
        y: height / 2
    });
    
    const mouseMovementHandler = (e) => {
        const {clientX, clientY} = e;
        setcoordinates({x: clientX, y: clientY});
        console.log({clientX: clientX, clientY: clientY });
    }

return (
    <div>
  

    <svg width={width} height={height} onMouseMove={mouseMovementHandler}>
        <circle cx={coordinates.x}
        cy={coordinates.y}
        r={circleRadius}/>
    </svg>

    <Face width={width}
    height={height}
    centerX={width / 2}
    centerY={height / 2}
    strokeWidth={5 }
    eyeOffsetX={90 }
    eyeOffsetY={100}
    eyeRadius={15}
    mouthWidth={20}
    mouthRadius={140}/> 

    </div>
)

    
 };



export default Smileyalt;