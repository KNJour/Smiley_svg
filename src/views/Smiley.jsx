import React from 'react';
import ReactDOM from 'react-dom';
import Topbar from '../components/Topbar';
import Face from '../components/Face';
import { range } from 'd3';

const array = range(5 * 3);

const width = 960;
const height = 500;
// const FaceContainer = (props) => (
//     <svg width={width} height={height}>
//     <g transform={`translate(${width / 2}, ${height / 2})`}>
//         {props.children}
//     </g>
//     </svg>
// )

// const Facealt = () => (
//     <Facewrap width={width}
//     height={height}
//     centerX={width / 2}
//     centerY={height / 2}>
//     <BackgroundCircle radius={(height /2) - 20 / 2} strokeWidth={10}/>
//     <Eyes eyeOffsetX={90}
// eyeOffsetY={100}
// eyeRadius={40}/>
//     <Mouth mouthRadius={140} mouthWidth={20}/>
// </Facewrap>
// )
const Smiley = () => array.map(() => (
    <Face width={width}
    height={height}
    centerX={width / 2}
    centerY={height / 2}
    strokeWidth={5 + Math.random() * 10}
    eyeOffsetX={90 + Math.random() * 50}
    eyeOffsetY={100 + Math.random() *10}
    eyeRadius={15 + Math.random() *10}
    mouthWidth={20}
    mouthRadius={140}/> 

 ));

   

            {/* <div className="div">
                <Facealt                
                width={width}
                height={height}
                centerX={width / 2}
                centerY={height / 2}
                strokeWidth={20}
                eyeOffsetX={90}
                eyeOffsetY={100}
                eyeRadius={40}
                mouthWidth={20}
                mouthRadius={140}/>
            </div> */}

            {/* <div className="div">
                <Facewrap width={width}
                    height={height}
                    centerX={width / 2}
                    centerY={height / 2}>
                    <BackgroundCircle radius={(height /2) - 20 / 2} strokeWidth={10}/>
                    <Eyes eyeOffsetX={90}
                eyeOffsetY={100}
                eyeRadius={40}/>
                    <Mouth mouthRadius={140} mouthWidth={20}/>
                </Facewrap>
            </div> */}


             {/* <div className="div">
                <FaceContainer width={width}
                    height={height}
                    centerX={width / 2}
                    centerY={height / 2}>
                    <BackgroundCircle radius={(height /2) - 20 / 2} strokeWidth={10}/>
                    <Eyes eyeOffsetX={90}
                eyeOffsetY={100}
                eyeRadius={40}/>
                    <Mouth mouthRadius={140} mouthWidth={20}/>
                </FaceContainer>
             </div> */}

{/* SVG */}
             {/* <div className="div">
                <svg width={width} height={height}>
                    <g transform={`translate(${width / 2}, ${height / 2})`}>
                    <BackgroundCircle radius={(height /2) - 20 / 2} strokeWidth={10}/>

                    <Eyes eyeOffsetX={90}
                        eyeOffsetY={100}
                        eyeRadius={40}/>
                    <Mouth mouthRadius={140} mouthWidth={20}/>
                    </g>
                </svg>
             </div> */}
     



export default Smiley;