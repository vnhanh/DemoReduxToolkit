import { createRealmContext } from "@realm/react"
import ToDoRealm from "../features/todo/domain/todo.realm.object"

const realmConfig: Realm.Configuration = {
  schema: [
    ToDoRealm
  ],
}

export const { RealmProvider, useRealm, useObject, useQuery } = createRealmContext(realmConfig)
