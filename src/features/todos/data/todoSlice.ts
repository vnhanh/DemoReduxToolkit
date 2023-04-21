import { createEntityAdapter, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { RootState } from "../../../app/store"
import Status from "../../../common/status"
import { Todo } from "../domain/todo"
import { BASE_IP } from "../../../app/base"

export const todosAdapter = createEntityAdapter<Todo>({
  selectId: ( todo ) => todo.id,
  sortComparer: (a,b) => a.name.localeCompare(b.name),
})

const initialState = todosAdapter.getInitialState({
  status: Status.IDLE,
  error: '',
})

export const fetchTodos = createAsyncThunk('todos', async () => {
  const url = `http://${BASE_IP}:8080/todos`
  const response = await axios.get(url)
  console.log('Alan - get response of list of todos ', JSON.stringify(response.data))

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
        console.log('Alan - fetchTodos.fulfilled ', JSON.stringify(action.payload))
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        const errMsg = action.error.message
        console.log('Alan - fetchTodos.rejected - state ', state)
        state.status = Status.FAILED
        
        if (errMsg) {
          state.error = errMsg
        }
      })
  }
})

export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions

export default todosSlice.reducer
