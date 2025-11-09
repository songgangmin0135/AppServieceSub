import type { Todo } from "./App"
import TodoItem from "./TodoItem"

export default function TodoList({
  todos,
  onToggle,
  onRemove,
}: {
  todos: Todo[]
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}) {
  return (
    <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  )
}
