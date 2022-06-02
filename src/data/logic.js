// Used in components/MovieCard.jsx
const rounded = (nb) => {
  const newNb = nb.toString()
  return Number(newNb.slice(0, 2)) + ',' + Number(newNb.slice(3, 4)) + 'K'
}
// Used in components/Ratio.jsx
const percent = (firstVal, secondVal) => {
  const sum = firstVal + secondVal
  const percent = (firstVal / sum).toFixed(2) * 100
  return percent
}
// Used in data/modal.js
const dealWith = (val1, val2, status1, status2) => {
  if (status1 === false && status2 === false) {
    console.log('scénario 1 les deux sont faux')
    val1 = val1 + 1
    status1 = !status1
    console.log(status1);
  } else if (status1 === false && status2 === true) {
    console.log('scénario 2 le cliqué est faux, l\'autre est vrai')
    val1 = val1 + 1
    status1 = !status1
    val2 = val2 - 1
    val2 = !val2
  } else if (status1 === true) {
    console.log('scénario 3 le cliqué est vrai')
    val1 = val1 - 1
    status1 = !status1
  }
}

export { rounded, percent, dealWith }