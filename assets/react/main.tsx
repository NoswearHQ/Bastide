import React from "react"
import { createRoot } from "react-dom/client"

function Test() {
  return <div style={{padding:"2rem"}}>✅ Vite + React OK</div>
}

const el = document.getElementById("app")
if (el) {
  createRoot(el).render(<Test />)
  console.log("[DEV] React monté")
} else {
  console.error("Conteneur #app introuvable")
}
