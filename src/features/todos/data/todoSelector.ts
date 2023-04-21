import { RootState } from "../../../app/store"
import { todosAdapter } from "./todoSlice"


export const {
  selectAll: getTodos,
  selectTotal: getTotalTodos,
} = todosAdapter.getSelectors((state: RootState) => state.todos)

export const getStatus = (state: RootState) => state.todos.status
export const getError = (state: RootState) => state.todos.error
