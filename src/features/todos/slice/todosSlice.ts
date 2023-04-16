import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../../app/store"
import { Todo } from "../data/todo"

interface ToDosState {
  list: Todo[],
}

const initialState: ToDosState = {
  list: [
    {
      id: '00001',
      name: 'sweeping',
      isFinished: false,
    },
    {
      id: '00002',
      name: 'fan cleaning',
      isFinished: false,
    },
  ],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getList: (state) => {
      console.log('Alan - running getList action')

      state.list = []
    },
    toggleTodoStatus: () => {
      console.log('Alan - running toggleTodoStatus')
    },
  },
})

export const { getList, toggleTodoStatus } = todosSlice.actions

export const todoList = (state: RootState) => state.todos.list

export default todosSlice.reducer
