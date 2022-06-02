import { action, thunk } from 'easy-peasy'
import { cuteMoviesDB } from './cuteMoviesDB'
import { addLike, addDislike } from './logic'

const modal = {
  movies: [],
  // THUNKS
  fetchMovies: thunk(async actions => {
    try {
      const newMovies = await cuteMoviesDB
      actions.add(newMovies)
    } catch(e) {
      console.log(e)
    }
  }),
  // ACTIONS
  add: action((state, payload) => {
    state.movies = payload
  }),
  remove: action((state, payload) => {
    state.movies = state.movies.filter(el => el.id !== payload.id)
  }),
  like: action((state, payload) => {
    state.movies.map((movie) => {
      if (movie.id === payload.id) {
        addLike(movie)
      }
      return movie
    })
  }),
  dislike: action((state, payload) => {
    state.movies.map((movie) => {
      if (movie.id === payload.id) {
        addDislike(movie)
      }
      return movie
    })
  }),
  selectCat: action((state, payload) => {
    state.movies = state.movies.filter(movie => movie.category === payload)
  })
}

export default modal