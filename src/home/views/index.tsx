import React from "react";
import { SafeAreaView, Text, TouchableHighlight, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { styles } from "./style";
import { decrement, increment, selectCount } from "../slice/counterSlice";

export function Counter(): JSX.Element {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  const onPressIncrement = () => {
    dispatch(increment())
  }

  const onPressDecrement = () => {
    dispatch(decrement())
  }

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.header }>
        <Text style={ styles.counter }>Counter: { count }</Text>
      </View>
      <View style={ styles.body }>
        <View style={ styles.wrapperButton }>
          <TouchableHighlight onPress={ onPressIncrement }>
            <Text style={ styles.contentButton }>INCREMENT</Text>
          </TouchableHighlight>
        </View>
        <View style={ styles.wrapperButton }>
          <TouchableHighlight onPress={ onPressDecrement }>
            <Text style={ styles.contentButton }>DECREMENT</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={ styles.footer } />
    </SafeAreaView>
  )
}
