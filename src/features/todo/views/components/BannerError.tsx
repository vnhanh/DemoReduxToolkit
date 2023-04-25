import React from "react"
import { Text } from "react-native"
import TransRightToLeftView from "../../../../components/transitionRTL.component"
import { styles } from '../style'

const BannerError = () => (
  <TransRightToLeftView style={ styles.errorBannerWrapper }>
    <Text style={ styles.errorBanner }>Cannot fetch remote data</Text>
  </TransRightToLeftView>
)

export default BannerError
