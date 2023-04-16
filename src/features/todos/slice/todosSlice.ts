import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../../app/store"
import { Todo } from "../data/todo"

interface ToDosState {
  list: Todo[],
}

const initialState: ToDosState = {
  list: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getList: (state) => {
      state.list = []
    },
  },
})

export const { getList } = todosSlice.actions

export const selectCount = (state: RootState) => state.todos.list

export default todosSlice.reducer
