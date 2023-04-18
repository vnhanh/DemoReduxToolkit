import React, { useEffect, useState } from "react"
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, ActivityIndicator } from "react-native"
import CheckBox from "@react-native-community/checkbox"
import { useAppDispatch, useAppSelector } from "../../../app/hook"
import { styles } from "./style"
import { addTodo, fetchTodos, getStatus, getTodos, updateTodo } from "../data/todosSlice"
import colors from "../../../common/colors"
import { Todo } from "../domain/todo"
import { randomId } from "../../../common/util"
import Status from "../../../common/status"
// import Icon from "react-native-vector-icons/FontAwesome"

let localTodoIndex = -1
const localTodos = ["cleaning", "cooking", "fishing", "hanging out", "hiking", "learning English", "shopping", "studying", "sweeping"]

type ItemProps = {
  testID: string,
  name: string,
  checked: boolean,
  onPress: () => void,
}

const Item = ( item : ItemProps ) => {
  const textColor = (item.checked) ? colors.gray500 : colors.primary

  return  (
    <View style={ styles.itemWrapper } >
      <TouchableOpacity onPress={ item.onPress }>
        <View style={ styles.itemInner }>
          <View style={ styles.itemContent }>
            <Text style={ { ...styles.itemText, color: textColor } }>{ item.name }</Text>
            { item.checked && <View style={ styles.itemStrikeThrough } /> }
          </View>
          <CheckBox
            value={ item.checked }
            testID={ item.testID }
            tintColors={ { true: colors.gray500, false: colors.primary } } // Android
            tintColor={ colors.primary } //iOS - color of unchecked
            onCheckColor={ colors.gray500 } // iOS - check mark color
            onTintColor={ colors.gray500 } // iOS - border color on checked status
            onValueChange={ item.onPress }
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export function ToDo(): JSX.Element {
  const dispatch = useAppDispatch()
  const data = useAppSelector(getTodos)
  const status = useAppSelector(getStatus)

  useEffect(() => {
    console.log('Alan - status ', status)
    if (status === Status.IDLE) {
      console.log('Alan - fetchTodos()')
      dispatch(fetchTodos())
    }
  }, [dispatch, status])

  const onTapTodoItem = (item: Todo) => {
    dispatch(updateTodo({
      id: item.id,
      changes: {
        isFinished: !item.isFinished,
      },
    }))
  }

  const onTapAddButton = () => {
    localTodoIndex = localTodoIndex +1
    if (localTodoIndex >= localTodos.length) {
      localTodoIndex = 0
    }

    dispatch(addTodo({ id: randomId(), name: localTodos[localTodoIndex], isFinished: false }))
  }

  const renderLoadingView = () => (
    <View style={ styles.loadingWrapper }>
      <ActivityIndicator size="large" color={ colors.primary } />
    </View>
  )

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.header }>
        <Text style={ styles.title }>TODOs</Text>
        {/*<Icon name="rocket" size={ 30 } color={ colors.white } />*/}
      </View>
      <View style={ styles.body }>
        {
          status === Status.LOADING && renderLoadingView()
        }
        {
          status === Status.SUCCEEDED && (
            <FlatList
              data={ data }
              renderItem={ ({ item }) => {
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
          )
        }
        <TouchableOpacity
          onPress={ onTapAddButton }
          style={ styles.floatingBtn }>
          <Text style={ styles.floatingBtnText }>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
