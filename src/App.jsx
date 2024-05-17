import React from 'react'
import { useContext } from 'react'
import { newcontext } from './components/NewComponent';


const App = () => {
  const DATA = useContext(newcontext)
  console.log(DATA);
  return (
    <div>App</div>
  )
}

export default App