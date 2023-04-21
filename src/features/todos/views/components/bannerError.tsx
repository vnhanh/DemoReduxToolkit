import React from "react"
import { Text } from "react-native"
import FadeInView from "../../../../components/fadeAnimView"
import { styles } from '../style'

const BannerError = () => (
  <FadeInView style={ styles.errorBannerWrapper }>
    <Text style={ styles.errorBanner }>Cannot fetch remote data</Text>
  </FadeInView>
)

export default BannerError
