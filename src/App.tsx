import { useState, useRef } from "react"
import TodoTemplate from "./TodoTemplate"
import TodoInsert from "./TodoInsert"
import TodoList from "./TodoList"

export type Todo = {
  id: number
  text: string
  done: boolean
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const nextId = useRef(1)

  // ➕ 할 일 추가
  const handleAdd = (text: string) => {
    setTodos((prev) => [...prev, { id: nextId.current++, text, done: false }])
  }

  // ✅ 완료 토글
  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  // ❌ 삭제
  const handleRemove = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <TodoTemplate>
      <h1>Todo List</h1>
      <TodoInsert onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
    </TodoTemplate>
  )
}
