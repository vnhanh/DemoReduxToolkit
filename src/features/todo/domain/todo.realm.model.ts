import Realm from 'realm'

export const TodoRealmObjectName = 'Todo'

class ToDoModel extends Realm.Object<ToDoModel> {
  id!: string
  name!: string
  done!: boolean

  static schema = {
    name: TodoRealmObjectName,
    properties: {
      id: 'string',
      name: 'string',
      done: 'bool',
    },
    primaryKey: 'id',
  }
}

export default ToDoModel
