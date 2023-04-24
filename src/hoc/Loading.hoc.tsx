import React, { ReactNode } from "react"
import { View, ActivityIndicator, StyleSheet } from "react-native"
import colors from "../common/colors"

export interface LoadingChildProps {
  loadingView: ReactNode
}

const withLoading = (Component: React.FunctionComponent<LoadingChildProps>) => {
  return function LoadingComponent() {
    const loadingView = () => (
      <View style={ styles.loadingWrapper }>
        <ActivityIndicator size="large" color={ colors.primary } />
      </View>
    )
  
    return (
      <Component loadingView={ loadingView() } />
    )
  }
}

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
})

export default withLoading
