import { createEntityAdapter, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import Status from "../../../../common/status"
import { Todo } from "../../domain/todo"
import { BASE_IP } from "../../../../app/base"
import { addTodoRealmObjects } from "../realm/createTodo.realm"

interface TodoResponse {
  id: string,
  name: string,
  done: string,
}

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

        addTodoRealmObjects(action.payload)
          .then((resolve: any) => {
            console.log('Alan - fetchTodos - run resolve')
          })
          .catch((exception: any) => {
            console.log('Alan - fetchTodos - run reject')
          })
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

export const isTodoResponse = (data: any): data is Todo => {
  return 'id' in data && 'name' in data && 'done' in data
}

export default todosSlice.reducer
