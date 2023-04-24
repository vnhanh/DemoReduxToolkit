import { createRealmContext } from "@realm/react"
import ToDoModel from "../features/todo/domain/todo.realm.model"

export const realmConfig: Realm.Configuration = {
  schema: [
    ToDoModel
  ],
}

export const { RealmProvider, useRealm, useObject, useQuery } = createRealmContext(realmConfig)
