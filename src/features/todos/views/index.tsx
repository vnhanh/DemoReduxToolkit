import React, { useEffect, useState } from "react"
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, ActivityIndicator } from "react-native"
import CheckBox from "@react-native-community/checkbox"
import { useAppDispatch, useAppSelector } from "../../../app/hook"
import { RealmContext, RealmProvider } from "../../../database/configureRealm"
import { styles } from "./style"
import { addTodo, deleteTodo, fetchTodos, updateTodo } from "../data/todoSlice"
import { getStatus, getTodos } from "../data/todoSelector"
import colors from "../../../common/colors"
import { Todo } from "../domain/todo"
import { randomId } from "../../../common/util"
import Status from "../../../common/status"
import Icon from 'react-native-vector-icons/MaterialIcons'
import BannerError from "./components/bannerError"

let localTodoIndex = -1
const localTodos = ["cleaning", "cooking", "fishing", "hanging out", "hiking", "learning English", "shopping", "studying", "sweeping"]

type ItemProps = {
  testID: string,
  name: string,
  checked: boolean,
  onPressItem: () => void,
  onPressDeleteBtn?: () => void,
}

const Item = ( item : ItemProps ) => {
  const textColor = (item.checked) ? colors.gray500 : colors.primary

  return  (
    <View style={ styles.line }>
      { item.onPressDeleteBtn && (
        <TouchableOpacity onPress={ item.onPressDeleteBtn } style={ styles.lineDeleteBtn } >
          <Icon name="delete" size={ 36 } color={ colors.error } />
        </TouchableOpacity>
      ) }
      <View style={ styles.itemWrapper } >
        <TouchableOpacity onPress={ item.onPressItem }>
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
              onValueChange={ item.onPressItem }
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export function ToDo(): JSX.Element {
  const dispatch = useAppDispatch()
  const data = useAppSelector(getTodos)
  const status = useAppSelector(getStatus)

  const [selecting, setSelecting] = useState(false)

  useEffect(() => {
    if (status === Status.IDLE) {
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

  const onTapMenuDeleteButton = () => {
    setSelecting(!selecting)
  }

  const onTapDeleteTodoButton = (item: Todo) => {
    dispatch(deleteTodo(item.id))
  }

  const renderLoadingView = () => (
    <View style={ styles.loadingWrapper }>
      <ActivityIndicator size="large" color={ colors.primary } />
    </View>
  )

  const renderList = () => (
    <FlatList
      data={ data }
      renderItem={ ({ item }) => {
        if (selecting) {
          return (
            <Item
              testID={ item.id }
              name={ item.name }
              checked={ item.isFinished }
              onPressItem={ () => onTapTodoItem(item) }
              onPressDeleteBtn={ () => onTapDeleteTodoButton(item) }/>
          )
        } else {
          return (
            <Item
              testID={ item.id }
              name={ item.name }
              checked={ item.isFinished }
              onPressItem={ () => onTapTodoItem(item) } />
          )
        }
      } }
      keyExtractor={ item => item.id }
      style={ styles.list }
    />
  )

  const renderFailedCase = () => {
    return (
      <View>
        <BannerError />
        { renderList() }
      </View>
    )
  }

  return (
    <SafeAreaView style={ styles.container }>
      <RealmProvider>
        <View style={ styles.header }>
          <Text style={ styles.title }>TODOs</Text>
          <TouchableOpacity onPress={ onTapMenuDeleteButton } style={ styles.deleteBtn } >
            { selecting && <Icon name="delete" size={ 30 } color={ colors.red500 } /> }
            { !selecting && <Icon name="delete" size={ 30 } color={ colors.white } /> }
          </TouchableOpacity>
        </View>
        <View style={ styles.body }>
          {
            status === Status.LOADING && renderLoadingView()
          }
          {
            status === Status.FAILED && renderFailedCase()
          }
          {
            status === Status.SUCCEEDED && renderList()
          }
          <TouchableOpacity
            onPress={ onTapAddButton }
            style={ styles.floatingBtn }>
            <Text style={ styles.floatingBtnText }>+</Text>
          </TouchableOpacity>
        </View>
      </RealmProvider>
    </SafeAreaView>
  )
}
