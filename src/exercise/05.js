// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// Extra credit 01: 💯 Create a custom component
// Make a custom <Box /> component that renders a div, accepts all the props and merges the given style and className props with the shared values.
// I should be able to use it like so:
// <Box className="box--small" style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
// The box className and fontStyle: 'italic' style should be applied in addition to the values that come from props.
function Box({className = '', style, ...otherProps}) {
  return (
    <div
      className={`box ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

const lightblue = {
  backgroundColor: 'lightblue',
}
const pink = {
  backgroundColor: 'pink',
}
const orange = {
  backgroundColor: 'orange',
}
const lightgreen = {
  backgroundColor: 'lightgreen',
}

const smallBox = (
  <Box className="box box--small" style={lightblue}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box className="box box--medium" style={pink}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box className="box box--large" style={orange}>
    large orange box
  </Box>
)

const customBox = (
  <Box className="box--extralarge" style={lightgreen}>
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
      <Box>Sizeless Box</Box>
    </div>
  )
}

export default App
