import ToDoModel from "../features/todo/domain/todo.realm.model"

export const TodoRealm = () => new Realm({ schema: [ ToDoModel ] })
