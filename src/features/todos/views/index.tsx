import React from "react"
import { FlatList, SafeAreaView, Text, View } from "react-native"
import CheckBox from "@react-native-community/checkbox"
import { useAppDispatch, useAppSelector } from "../../../app/hook"
import { styles } from "./style"
import { toggleTodoStatus, todos } from "../slice/todosSlice"

type ItemProps = {
  testID: string,
  name: string,
  checked: boolean,
  onPress: () => void,
}

const Item = ( item : ItemProps ) => {
  return  (
    <View style={ styles.item } >
      <Text style={ styles.itemText }>{ item.name }</Text>
      <CheckBox
        value={ item.checked }
        testID={ item.testID }
      />
    </View>
  )
}

export function Counter(): JSX.Element {
  const list = useAppSelector(todos)
  const dispatch = useAppDispatch()

  const onPressIncrement = () => {
    dispatch(toggleTodoStatus())
  }

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.header }>
        <Text style={ styles.title }>TODOs</Text>
      </View>
      <View style={ styles.body }>
        <FlatList 
          data={ list }
          renderItem={ ({ item }) => {
            return (
              <Item 
                testID={ item.id }
                name={ item.name } 
                checked={ item.isFinished } 
                onPress={ () => {
                  console.log('Alan - press item')
                } } />
            )
          } }
          keyExtractor={ item => item.id } 
          style={ styles.list }
        />
      </View>
      <View style={ styles.footer } />
    </SafeAreaView>
  )
}
