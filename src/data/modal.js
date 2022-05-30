import { action, thunk } from 'easy-peasy'
import { cuteMoviesDB } from './cuteMoviesDB'

const model = {
  movies: [],
  // Thunks
  fetchMovies: thunk(async actions => {
    try {
      const newMovies = await cuteMoviesDB
      actions.setMovies(newMovies)
    } catch(e) {
      console.log(e)
    }
  }),
  // Actions
  setMovies: action((state, payload) => {
    state.movies = payload

  }),
  removeMovieCard: action((state, id) => {
    state.movies = state.movies.filter(el => el.id !== id)
  })
}

export default model