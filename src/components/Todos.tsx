import { type Todo as TodoType } from '../types'
import { Todo } from './Todo'

type Props = {
  todos: TodoType[]
  onToggleCompleted: (todo: Pick<TodoType, 'id' | 'completed'>) => void
  onRemove: (id: number) => void
}

export const Todos = ({ todos, onRemove, onToggleCompleted }: Props) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} onToggleCompleted={onToggleCompleted} onRemove={onRemove} />
        </li>
      ))}
    </ul>
  )
}
