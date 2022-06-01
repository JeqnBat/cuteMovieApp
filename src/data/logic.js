// Used in MovieCard.jsx
const rounded = (nb) => {
  const newNb = nb.toString()
  return Number(newNb.slice(0, 2)) + ',' + Number(newNb.slice(3, 4)) + 'K'
}
// Used in Ratio.jsx
const percent = (firstVal, secondVal) => {
  const sum = firstVal + secondVal
  const percent = (firstVal / sum).toFixed(2) * 100
  return percent
}

export { rounded, percent }