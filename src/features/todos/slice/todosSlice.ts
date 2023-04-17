import { createEntityAdapter, createSlice, configureStore } from '@reduxjs/toolkit'
import { RootState } from "../../../app/store"
import { Todo } from "../data/todo"

interface ToDosState {
  list: Todo[],
}

const todosAdapter = createEntityAdapter<Todo>({
  selectId: ( todo ) => todo.id,
  sortComparer: (a,b) => a.name.localeCompare(b.name),
})

export const todosSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState(),
  reducers: {
    addTodo: todosAdapter.addOne,
    // loadTodos(state) {
      
    // },
    // getTodos(state, action) {
    //   todosAdapter.setAll(state, action.payload)
    // },
    updateTodo: todosAdapter.updateOne,
    // toggleTodoStatus: (state, action) => {
    //   const todoItem = action.payload

    //   todoItem.isFinished = !todoItem.isFinished

    // },
  },
})

// export const { addTodo, loadTodos, getTodos, updateTodo, toggleTodoStatus } = todosSlice.actions
export const { addTodo, updateTodo } = todosSlice.actions

export const {
  selectAll: getTodos,
  selectTotal: getTotalTodos,
} = todosAdapter.getSelectors((state: RootState) => state.todos)

export default todosSlice.reducer
