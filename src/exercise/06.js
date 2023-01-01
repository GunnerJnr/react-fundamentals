// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

/*
 * Extra Credit 03: 💯 Control the input value
 * If we want to explicitly update that value we could do this:
 * inputNode.value = 'whatever' but that's pretty imperative.
 * Instead, React allows us to programmatically set the value prop on the input like so:
 * <input value={myInputValue} />
 * Typically you'll want to store the input's value in a state variable (via React.useState) and then the onChange handler will call the state updater to keep that value up-to-date.
 */

function UsernameForm({onSubmitUsername}) {
  const [username, setUsernameToLowerCase] = React.useState('') // Extra Credit 03: 💯 Control the input value

  function handleChange(event) {
    const {value} = event.target
    setUsernameToLowerCase(value.toLowerCase()) // Extra Credit 03: 💯 Control the input value
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" value={username} onChange={handleChange} /> {/* Extra Credit 03: 💯 Control the input value */}
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
