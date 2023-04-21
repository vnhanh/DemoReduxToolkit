import { createRealmContext } from "@realm/react"
import ToDoRealm from "../features/todos/domain/todo.realm"

const realmConfig: Realm.Configuration = {
  schema: [
    ToDoRealm
  ],
}

export const { RealmProvider, useRealm, useObject, useQuery } = createRealmContext(realmConfig)
