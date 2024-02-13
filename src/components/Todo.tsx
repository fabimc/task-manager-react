import { type Todo as Props } from '../types'

export const Todo = ({ id, title, completed }: Props) => {
  return (
    <div className='view'>
      <input className='toggle' type='checkbox' checked={completed} onChange={() => console.log('toggled')} />
      <label>{title}</label>
      <button className='destroy' onClick={() => console.log('destroyed')} />
    </div>
  )
}
