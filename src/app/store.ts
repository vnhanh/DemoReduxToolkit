import { configureStore } from '@reduxjs/toolkit'

import todosReducer from '../features/todos/slice/todosSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})

console.log(store.getState().todos)

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
