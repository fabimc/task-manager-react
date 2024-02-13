import { type Todo as TodoType } from '../types'
import { Todo } from './Todo'

type Props = {
  todos: TodoType[]
}

export const Todos = ({ todos }: Props) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
        </li>
      ))}
    </ul>
  )
}