import React from "react"

export default function TodoTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        width: "600px",
        margin: "40px auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </div>
  )
}
