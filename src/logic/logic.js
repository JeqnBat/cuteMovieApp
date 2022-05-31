const rounded = (nb) => {
  const newNb = nb.toString()
  return Number(newNb.slice(0, 2)) + ',' + Number(newNb.slice(3, 4)) + 'K'
}

export { rounded }