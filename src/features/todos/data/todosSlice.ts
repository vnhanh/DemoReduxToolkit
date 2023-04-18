import { createEntityAdapter, createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store"
import { Todo } from "../domain/todo"
import { Animated, AppState } from "react-native";
import delay = Animated.delay;
import { randomId } from "../../../common/util"
import Status from "../../../common/status"

interface ToDosState {
  list: Todo[],
}

const todosAdapter = createEntityAdapter<Todo>({
  selectId: ( todo ) => todo.id,
  sortComparer: (a,b) => a.name.localeCompare(b.name),
})

const initialState = todosAdapter.getInitialState({
  status: Status.IDLE,
})

export const fetchTodos = createAsyncThunk('todos', async () => {
  // fake calling api in 3 seconds
  const res = await new Promise((resolve, reject) => setTimeout(() => resolve(''), 3000))

  const response = {
    'data': [
      {
        id: randomId(),
        name: 'Learning Redux Toolkit',
        isFinished: false,
      }
    ]
  }

  console.log('Alan - return response data with res ', res)

  return response.data
})

export const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: todosAdapter.addOne,
    // loadTodos(state) {
    // },
    // getTodos(state, action) {
    //   todosAdapter.setAll(state, action.payload)
    // },
    updateTodo: todosAdapter.updateOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = Status.LOADING
        console.log('Alan - fetchTodos.pending')
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED
        todosAdapter.upsertMany(state, action.payload)
        console.log('Alan - fetchTodos.fulfilled ', state)
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        console.log('Alan - fetchTodos.rejected')
        state.status = Status.FAILED
        // state.error = action.error.message
      })
  }
})

export const { addTodo, updateTodo } = todosSlice.actions

export const {
  selectAll: getTodos,
  selectTotal: getTotalTodos,
} = todosAdapter.getSelectors((state: RootState) => state.todos)

export const getStatus = (state: RootState) => state.todos.status

export default todosSlice.reducer
