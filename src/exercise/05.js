// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// Extra credit 01: 💯 Create a custom component
// Make a custom <Box /> component that renders a div, accepts all the props and merges the given style and className props with the shared values.
// I should be able to use it like so:
// <Box className="box--small" style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
// The box className and fontStyle: 'italic' style should be applied in addition to the values that come from props.
function Box({className, style, ...otherProps}) {
  return (
    <div
      className={`box ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

const lightBlueWithItalicFont = {
  backgroundColor: 'lightblue',
  fontStyle: 'italic',
}
const pinkWithItalicFont = {
  backgroundColor: 'pink',
  fontStyle: 'italic',
}
const orangeWithItalicFont = {
  backgroundColor: 'orange',
  fontStyle: 'italic',
}
const lightGreenWithItalicFont = {
  backgroundColor: 'lightgreen',
  fontStyle: 'italic',
}

const smallBox = (
  <div className="box box--small" style={lightBlueWithItalicFont}>
    small lightblue box
  </div>
)
const mediumBox = (
  <div className="box box--medium" style={pinkWithItalicFont}>
    medium pink box
  </div>
)
const largeBox = (
  <div className="box box--large" style={orangeWithItalicFont}>
    large orange box
  </div>
)

const customBox = (
  <Box className="box--extralarge" style={lightGreenWithItalicFont}>
    Other Box from Custom Component
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      {customBox}
    </div>
  )
}

export default App
