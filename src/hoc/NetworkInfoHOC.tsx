import React, { useEffect, useState } from "react"
import { useNetInfo } from "@react-native-community/netinfo"

export interface NetworkInfoChildProps {
  isNetworkConnected: boolean | null,
}

export const withNetworkInfo = (Component: React.FC<NetworkInfoChildProps>) => {
  return function NetworkInfoComponent() {
    const [networkConnection, setNetworkConnection] = useState< boolean|null >( null )
    const netInfo = useNetInfo()
  
    useEffect(() => {
      console.log('Alan - withNetworkInfo() ', netInfo.isConnected, netInfo.isInternetReachable)
      if (netInfo.isConnected && netInfo.isInternetReachable) {
        setNetworkConnection(true)
      } else {
        setNetworkConnection(false)
      }
    }, [netInfo.isConnected, netInfo.isInternetReachable])
  
    return (
      <Component isNetworkConnected={ networkConnection } />
    )
  }
}
