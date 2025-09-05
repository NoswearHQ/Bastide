import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

// Commence simple : import relatif (tu pourras remettre "@/..." après)
import Home from "./pages/Home"

const registry: Record<string, React.FC> = { Home }

document.querySelectorAll<HTMLElement>("[data-react-page]").forEach((el) => {
  const name = el.dataset.reactPage || ""
  const Cmp = registry[name]
  if (!Cmp) { console.warn(`Page React introuvable: "${name}"`); return }
  createRoot(el).render(<Cmp />)
})
