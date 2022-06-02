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
const addLike = (movie) => {
  if (movie.liked === false && movie.disliked === false) {
    movie.likes = movie.likes + 1
    movie.liked = !movie.liked
  } else if (movie.liked === false && movie.disliked === true) {
    movie.likes = movie.likes + 1
    movie.liked = !movie.liked
    movie.dislikes = movie.dislikes - 1
    movie.disliked = !movie.disliked
  } else if (movie.liked === true) {
    movie.likes = movie.likes - 1
    movie.liked = !movie.liked
  }
}
const addDislike = (movie) => {
  if (movie.liked === false && movie.disliked === false) {
    movie.dislikes = movie.dislikes + 1
    movie.disliked = !movie.disliked
  } else if (movie.liked === true && movie.disliked === false) {
    movie.likes = movie.likes - 1
    movie.liked = !movie.liked
    movie.dislikes = movie.dislikes + 1
    movie.disliked = !movie.disliked
  } else if (movie.disliked === true) {
    movie.dislikes = movie.dislikes - 1
    movie.disliked = !movie.disliked
  }
}

export { rounded, percent, addLike, addDislike }