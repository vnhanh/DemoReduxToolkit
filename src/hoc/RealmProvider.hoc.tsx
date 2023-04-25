import React from "react"
import { RealmProvider } from "../database/configureRealm"

const withRealmProvider = (Component: React.FunctionComponent<object>) => {
  return function RealmProviderComponent() {
    return (
      <RealmProvider>
        <Component />
      </RealmProvider>
    )
  }
}

export default withRealmProvider
