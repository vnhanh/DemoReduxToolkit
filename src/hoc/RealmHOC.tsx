import { PropsWithChildren } from "react"
import { RealmProvider } from "../database/configureRealm"

type RealmHOCProps = PropsWithChildren<any>

const RealmWrapper: React.ComponentType<RealmHOCProps> = props => {

  return (
    <RealmProvider>
      { props.children }
    </RealmProvider>
  )
}

function Wrapper<T>(Component: React.FunctionComponent<T>): JSX.Element {
  return (
    <RealmProvider>
      <Component />
    </RealmProvider>
  )
}
