import React from "react"

import { Provider } from "react-redux"

import { ToDo } from "../features/todo/views"
import { store } from "./store"
import { RealmProvider } from "../database/configureRealm"

function App(): JSX.Element {
  return (
    <Provider store={ store }>
      <RealmProvider>
        <ToDo />
      </RealmProvider>
    </Provider>
  )
}

export default App
