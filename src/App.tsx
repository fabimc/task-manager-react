import { useState } from 'react'
import { Todos } from './components/Todos'
import { FilterValue, Todo as TodoType } from './types'
import { TODO_FILTERS } from './const'
import { Footer } from './components/Footer'

const mockTodos: TodoType[] = [
  { id: 1, title: 'Learn TypeScript', completed: true },
  { id: 2, title: 'Try out Deno', completed: false },
  { id: 3, title: 'Build an app', completed: false }
]
const App = () => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleToggleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }
  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.filter((todo) => todo.completed).length

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed
    }
    if (filterSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed
    }
    return true
  })

  return (
    <div className='todoapp'>
      <Todos onToggleCompleted={handleToggleCompleted} onRemove={handleRemove} todos={filteredTodos} />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={handleClearCompleted}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
