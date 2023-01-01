// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  /*
   * Extra Credit 01: 💯 using refs
   * Another way to get the value is via a ref in React. A ref is an object that stays consistent between renders of your React component.
   * It has a current property on it which can be updated to any value at any time.
   * In the case of interacting with DOM nodes, you can pass a ref to a React element and React will set the current property to the DOM node that's rendered.
   * So if you create an inputRef object via React.useRef, you could access the value via: inputRef.current.value (📜https://reactjs.org/docs/hooks-reference.html#useref)
   * Try to get the usernameInput's value using a ref.
   */
  const userInputRef = React.useRef() // Extra Credit 01: 💯 using refs

  function handleSubmit(event) {
    event.preventDefault()
    const username = userInputRef.current.value // Extra Credit 01: 💯 using refs
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" ref={userInputRef} /> {/* Extra Credit 01: 💯 using refs */}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
