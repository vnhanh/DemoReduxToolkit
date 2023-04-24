import { RootState } from "../../../../app/store"
import { todosAdapter } from "./todoSlice"


export const {
  selectAll: getToDos,
} = todosAdapter.getSelectors((state: RootState) => state.todo)

export const getStatus = (state: RootState) => state.todo.status
export const getError = (state: RootState) => state.todo.error
