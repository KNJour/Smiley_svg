const Eyes = (props) => (
    <>
        <circle
        cx={ - props.eyeOffsetX}
        cy={ - props.eyeOffsetY}
        r= {props.eyeRadius}
        />    

        <circle
        cx={props.eyeOffsetX}
        cy={- props.eyeOffsetY}
        r={props.eyeRadius}
        /> 
    </>
)

export default Eyes;