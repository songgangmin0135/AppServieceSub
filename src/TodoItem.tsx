import type { Todo } from "./App"

export default function TodoItem({
  todo,
  onToggle,
  onRemove,
}: {
  todo: Todo
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <label style={{ flexGrow: 1, textAlign: "left", cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <span
          style={{
            marginLeft: "10px",
            textDecoration: todo.done ? "line-through" : "none",
            color: todo.done ? "rgba(0,0,0,0.5)" : "black", // ✅ 흐릿한 글씨 효과
            transition: "color 0.2s ease, text-decoration 0.2s ease",
          }}
        >
          {todo.text}
        </span>
      </label>

      <button
        onClick={() => onRemove(todo.id)}
        style={{
          background: "none",
          border: "none",
          color: "black", // ✅ 검은색 X
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        ✕
      </button>
    </li>
  )
}
