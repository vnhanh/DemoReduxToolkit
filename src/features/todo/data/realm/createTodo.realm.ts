import { useEffect } from "react"
import { useRealm } from "../../../../database/configureRealm"
import ToDoRealm, { TodoRealmObjectName } from "../../domain/todo.realm.object"

const addTodoRO= (realm: Realm, realmObject: ToDoRealm) => {
  console.log('Alan - running in createTodo.realm.ts')

  realm.write(()=> {
    console.log('Alan - running realm.write()')
  })

  // realm.write(() => {
  //   const createRealObjectResult = realm.create(TodoRealmObjectName, {
  //     id: realmObject.id,
  //     name: realmObject.name,
  //     done: realmObject.done,
  //   })

  //   console.log('Alan - result of creating todo realm object ', createRealObjectResult)
  // })
}

export default addTodoRO
