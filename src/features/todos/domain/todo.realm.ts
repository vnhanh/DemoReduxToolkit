import Realm from 'realm'

class ToDoRealm extends Realm.Object<ToDoRealm> {
  _id!: Realm.BSON.ObjectId
  name!: string
  done!: boolean

  static schema = {
    name: 'ToDo',
    properties: {
      _id: 'objectId',
      name: 'string',
      done: 'bool',
    },
    primaryKey: '_id',
  }
}

export default ToDoRealm
