import { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
  { id: 1, title: 'Learn TypeScript', completed: true },
  { id: 2, title: 'Try out Deno', completed: false },
  { id: 3, title: 'Build an app', completed: false }
]
const App = () => {
  const [todos, setTodos] = useState(mockTodos)
  return (
    <>
      <Todos todos={todos} />
    </>
  )
}

export default App
