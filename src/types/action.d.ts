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

type WordMap = { [key: number]: string }

type Action = DeleteAction | InsertAction | EnterAction
