import { action, thunk } from 'easy-peasy'
import { cuteMoviesDB } from './cuteMoviesDB'

const model = {
  movies: [],
  // Thunks
  fetchMovies: thunk(async actions => {
    try {
      const movies = await cuteMoviesDB
      actions.load(movies)
    } catch(e) {
      console.log(e)
    }
  }),
  // Actions
  load: action((state, movies) => {
    state.movies = movies
  })
}

export default model