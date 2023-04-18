import { createEntityAdapter, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store"
import { Todo } from "../domain/todo"
import { randomId } from "../../../common/util"
import Status from "../../../common/status"

const todosAdapter = createEntityAdapter<Todo>({
  selectId: ( todo ) => todo.id,
  sortComparer: (a,b) => a.name.localeCompare(b.name),
})

const initialState = todosAdapter.getInitialState({
  status: Status.IDLE,
})

export const fetchTodos = createAsyncThunk('todos', async () => {
  // fake calling api in 3 seconds
  await new Promise((resolve, reject) => setTimeout(() => resolve(''), 3000))

  const response = {
    'data': [
      {
        id: randomId(),
        name: 'Learning Redux Toolkit',
        isFinished: false,
      }
    ]
  }

  return response.data
})

export const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: todosAdapter.addOne,
    updateTodo: todosAdapter.updateOne,
    deleteTodo: todosAdapter.removeOne,
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

export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions

export const {
  selectAll: getTodos,
  selectTotal: getTotalTodos,
} = todosAdapter.getSelectors((state: RootState) => state.todos)

export const getStatus = (state: RootState) => state.todos.status

export default todosSlice.reducer
