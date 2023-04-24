import Realm from 'realm'

export const TodoRealmName = 'Todo'

class ToDoModel extends Realm.Object<ToDoModel> {
  id!: string
  name!: string
  done!: boolean

  static schema = {
    name: TodoRealmName,
    properties: {
      id: 'string',
      name: 'string',
      done: 'bool',
    },
    primaryKey: 'id',
  }
}

export default ToDoModel
