import { useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
export default function TodoInsert({
  onAdd,
}: {
  onAdd: (text: string) => void
}) {
  const [value, setValue] = useState("")

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = value.trim()
    if (!text) return
    onAdd(text)
    setValue("")
  }

  return (
    <form onSubmit={onSubmit} style={{ marginTop: "10px" }}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력하고 Enter"
        style={{
          padding: "8px",
          width: "70%",
          border: "1px solid #aaa",
          borderRadius: "4px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 12px",
          marginLeft: "8px",
          background: "#D5D5D5",
          color: "black",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        추가
      </button>
    </form>
  )
}
