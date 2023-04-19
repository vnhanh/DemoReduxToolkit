import React from "react"

import { Provider } from "react-redux"

import { ToDo } from "../features/todos/views"
import { store } from "./store"

function App(): JSX.Element {
  return (
    <Provider store={ store }>
      <ToDo />
    </Provider>
  )
}

export default App
