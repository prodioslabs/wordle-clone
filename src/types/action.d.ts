type DeleteAction = {
  type: 'delete'
}

type InsertAction = {
  type: 'insert'
  character: string
}

type EnterAction = {
  type: 'enter'
}

type Action = DeleteAction | InsertAction | EnterAction
