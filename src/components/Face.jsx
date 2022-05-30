import React from 'react';
import BackgroundCircle from '../components/BackgroundCircle'
import Mouth from '../components/Mouth';
import Eyes from '../components/Eyes'
import Facewrap from '../components/Facewrap'


const Face = ({width, height, centerX, centerY, strokeWidth, eyeOffsetX, eyeOffsetY, eyeRadius, mouthWidth, mouthRadius}) => (
    <Facewrap width={width}
    height={height}
    centerX={centerX}
    centerY={centerY}>
    <BackgroundCircle radius={(height /2) - 20 / 2} strokeWidth={strokeWidth}/>
    <Eyes eyeOffsetX={eyeOffsetX}
    eyeOffsetY={eyeOffsetY}
    eyeRadius={eyeRadius}/>
    <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth}/>
</Facewrap>
);

export default Face;