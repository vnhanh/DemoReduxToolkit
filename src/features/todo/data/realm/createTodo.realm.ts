import Realm from "realm"
import { TodoRealmObjectName } from "../../domain/todo.realm.model"
import { realmConfig } from "../../../../database/configureRealm"
import { isTodoResponse } from '../redux/todoSlice'

export const addTodoRealmObjects = (data: any) => new Promise((resolve, reject) => {
  Realm.open(realmConfig)
    .then((realm) => {
      try {
        realm.write(() => {
          let success = true
  
          Object.entries(data).forEach(([key, value]) => {
            if (isTodoResponse(value)) {
              realm.create(TodoRealmObjectName, value)
            } else {
              success = false
            }
          })
          resolve(success)
        })
      } catch (e) {
        console.log('caught exception while writing database ', e)
      }
    })
})

/**
 * This way can not run out of a component
 */
// const realm = new Realm({
//   schema: [ToDoModel]
// })

// const addTodoRO= ( id: string, name: string, done: boolean) => {
//   console.log('Alan - running in createTodo.realm.ts')

//   realm.write(() => {
//     realm.create(TodoRealmObjectName, {
//       id: id,
//       name: name,
//       done: done,
//     })
//   })
// }
