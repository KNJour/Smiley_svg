
const BackgroundCircle = ({radius, strokeWidth}) => (
    <circle 
        r={radius}
        // ALTERNATIVE is r=radius with {radius} instead of props, destructuring it
        fill="yellow"
        stroke="black"
        strokeWidth={strokeWidth}
    />
)
export default BackgroundCircle;