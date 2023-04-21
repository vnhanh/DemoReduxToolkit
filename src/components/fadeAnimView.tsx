import React, { PropsWithChildren, useEffect, useRef } from "react"
import { ViewStyle, Animated, Dimensions } from "react-native"

const windowWidth = Dimensions.get('window').width

type FadeInViewProps = PropsWithChildren<{ style: ViewStyle }>

const FadeInView: React.FC<FadeInViewProps> = props => {
  const fadeAnim = useRef(new Animated.Value(windowWidth)).current

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: windowWidth * 0.05,
      duration: 1500,
      useNativeDriver: false,
    }).start()
  }, [fadeAnim])

  return (
    <Animated.View
      style={ {
        ...props.style,
        left: fadeAnim
      } }>
      { props.children }
    </Animated.View>
  )
}

export default FadeInView
