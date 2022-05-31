// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'

// const countReducer = (state, action) => ({
//   ...state,
//   ...(typeof action === 'function' ? action(state) : action),
// })

function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return {count: state.count + action.step}
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  // const increment = () =>
  //   setState(currentState => ({count: currentState.count + step}))
  return <button onClick={increment}>{count}</button>
}

// function Counter({initialCount = 0, step = 1}) {
//   const [count, changeCount] = React.useReducer(countReducer, initialCount)
//   const increment = () => changeCount(step)
// }

function App() {
  return <Counter />
}

export default App
