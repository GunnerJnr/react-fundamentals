// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// Extra credit 02: 💯 accept a size prop to encapsulate styling
// In this extra credit, try to make this API work:
// <Box size="small" style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
function Box({size='none', style, ...otherProps}) {
  return (
    <div
      className={`box box--${size}`}
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
  <Box size="small" style={lightblue}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={pink}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={orange}>
    large orange box
  </Box>
)

const customBox = (
  <Box size="extralarge" style={lightgreen}>
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
