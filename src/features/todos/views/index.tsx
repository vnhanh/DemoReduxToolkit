import React from "react"
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import CheckBox from "@react-native-community/checkbox"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useAppDispatch, useAppSelector } from "../../../app/hook"
import { styles } from "./style"
import { addTodo, getTodos, updateTodo } from "../slice/todosSlice"
import colors from "../../../common/colors"
import { Todo } from "../data/todo"

let index = 0

const randomId = () => {
  index++

  return index.toString()
}

type ItemProps = {
  testID: string,
  name: string,
  checked: boolean,
  onPress: () => void,
}

const Item = ( item : ItemProps ) => {
  const textColor = (item.checked) ? colors.primary : colors.gray500

  return  (
    <View style={ styles.itemWrapper } >
      <TouchableOpacity onPress={ item.onPress }>
        <View style={ styles.itemInner }>
          <View style={ styles.itemContent }>
            <Text style={ { ...styles.itemText, color: textColor } }>{ item.name }</Text>
          </View>
          <CheckBox
            value={ item.checked }
            testID={ item.testID }
            tintColors={ { true: colors.primary, false: colors.gray500 } } // Android
            tintColor={ colors.gray500 } //iOS - color of unchecked
            onCheckColor={ colors.primary } // iOS - check mark color
            onTintColor={ colors.primary } // iOS - border color on checked status
            style={ styles.itemCheckBox }
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export function ToDo(): JSX.Element {
  const dispatch = useAppDispatch()
  const data = useAppSelector(getTodos)

  console.log('data: ', JSON.stringify(data))

  const onTapTodoItem = (item: Todo) => {
    console.log('onTapTodoItem()')

    dispatch(updateTodo({
      id: item.id,
      changes: {
        isFinished: !item.isFinished,
      },
    }))
  }

  const onTapAddButton = () => {
    console.log('onTapAddButton()')
    dispatch(addTodo({ id: randomId(), name: 'abc', isFinished: false }))
  }

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.header }>
        <Text style={ styles.title }>TODOs</Text>
      </View>
      <View style={ styles.body }>
        <FlatList 
          data={ data }
          renderItem={ ({ item }) => {
            console.log('Alan -renderItem() - item ', JSON.stringify(item))

            return (
              <Item 
                testID={ item.id }
                name={ item.name } 
                checked={ item.isFinished } 
                onPress={ () => {
                  onTapTodoItem(item)
                } } />
            )
          } }
          keyExtractor={ item => item.id } 
          style={ styles.list }
        />
      </View>
      <View style={ styles.footer }>
        <TouchableOpacity
          onPress={ onTapAddButton }
          style={ styles.floatingBtn }>
          <Text style={ styles.floatingBtnText }>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
