import React from "react"
import { Provider } from "react-redux"

import { store } from "./store"
import { ToDoComponent } from "../features/todo/views"

function App() {
  return (
    <Provider store={ store }>
      <ToDoComponent />
    </Provider>
  )
}

export default App
