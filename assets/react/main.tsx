import React from "react"
import { createRoot } from "react-dom/client"

function Test() {
  return <div style={{padding:"2rem"}}>✅ Vite + React OK (build)</div>
}

const el = document.getElementById("app")
if (el) createRoot(el).render(<Test />)
