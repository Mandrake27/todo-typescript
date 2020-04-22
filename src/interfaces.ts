export interface TodoFormProps {
  handleAdd: (title: string) => void
}
export interface ITodo {
  title: string
  id: number
  completed: boolean
}
