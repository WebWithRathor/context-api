import React, { createContext } from 'react'

export const newcontext = createContext(null)

const NewComponent = (props) => {
  return (
    <newcontext.Provider value={"skndksljfkjasf"}>
      <h1>{props.children}</h1>
    </newcontext.Provider>
  )
}

export default NewComponent