// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const userInputRef = React.useRef()

  /*
   * Extra Credit 02: 💯 In this extra credit, we're going to say that this username input only accepts lower-case characters.
   * So if someone types an upper-case character, that's invalid input and we'll show an error message.
   * If we want our form to be dynamic, we'll need a few things:
   * 1. Component state to store the dynamic values (an error message in our case)
   * 2. A change handler on the input so we know what the value is as the user changes it and can update the error state.
   * Once we have that wired up then we can render the error message and disable the submit button if there's an error.
   * 💰 This one's a little more tricky, so here are a few things you need to do to make this work:
   * 1. Create a handleChange function that accepts the change event and uses event.target.value to get the value of the input. Remember this event will be triggered on the input, not the form.
   * 2. Use the value of the input to determine whether there's an error. There's an error if the user typed any upper-case characters. You can check this really easily via const isValid = value === value.toLowerCase()
   * 3. If there's an error, set the error state to 'Username must be lower case'. (💰 here's how you do that: setError(isValid ? null : 'Username must be lower case')) and disable the submit button.
   * 4. Finally, display the error in an element
   * You may consider adding a role="alert" to the element you use to display the error to assist with screen reader users.
   * Make sure you pass handleChange to the onChange handler of the input.
   */
  const [error, setError] = React.useState(null) // Extra Credit 02: 💯

  // Extra Credit 02: 💯 - handleChange: this function accepts the change event and uses event.target.value to get the value of the input.
  // It then uses the value of the input to determine whether there's an error (there's an error if the user typed any upper-case characters).
  function handleChange(event) {
    const isValid = event.target.value === event.target.value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const username = userInputRef.current.value
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          ref={userInputRef}
        />{' '}
        {/* Extra Credit 02: 💯: here we call the handleChange Method whenever a change is detected on the input state */}
        <div role="alert" style={{color: 'red'}}>
          {error}{' '}
          {/* Extra Credit 02: 💯: here we display the error in an element if the user has typed an uppercase letter, causing an error */}
        </div>
      </div>
      <button type="submit" disabled={error}>
        {' '}
        {/* Extra Credit 02: 💯: here we disable the submit button if there's an error, making sure the user cannot submit their entry until the error has been corrected */}
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
