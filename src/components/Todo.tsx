import { Todo as TodoType } from '../types'
interface Props {
  id: number
  title: string
  completed: boolean
  onRemove: (id: number) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo = ({ id, title, completed, onRemove, onToggleCompleted }: Props) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggleCompleted({ id, completed: event.target.checked })
  }

  return (
    <div className='view'>
      <input className='toggle' type='checkbox' checked={completed} onChange={handleChangeCheckbox} />
      <label>{title}</label>
      <button className='destroy' onClick={() => onRemove(id)} />
    </div>
  )
}
