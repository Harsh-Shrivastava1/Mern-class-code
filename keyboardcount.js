let score = 0
let enabled = true

const scoreEl = document.getElementById("score")
const btn = document.getElementById("toggleBtn")

document.addEventListener("keydown", e => {
  if (!enabled) return
  if (e.key === "a") score++
  if (e.key === "d") score--
  if (e.key === "s") score = 0
  scoreEl.textContent = score
})

btn.onclick = () => {
  enabled = !enabled
  btn.textContent = enabled ? "Disable Controls" : "Enable Controls"
}
