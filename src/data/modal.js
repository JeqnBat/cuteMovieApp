import { action, thunk } from 'easy-peasy'
import { cuteMoviesDB } from './cuteMoviesDB'
import { sortLike, sortDislike } from '../logic/logic'

const modal = {
  allMovies: [],
  visibleMovies: [],
  selector: {
    begin: 0,
    end: 4,
    fraction: 4
  },
  // THUNKS
  fetchMovies: thunk(async actions => {
    try {
      const newMovies = await cuteMoviesDB
      actions.add(newMovies)
      actions.selectMovies()
    } catch(e) {
      console.log(e)
    }
  }),
  // ACTIONS
  add: action((state, payload) => {
    state.allMovies = payload
  }),
  remove: action((state, payload) => {
    state.visibleMovies = state.visibleMovies.filter(el => el.id !== payload.id)
  }),
  like: action((state, payload) => {
    state.visibleMovies.map((movie) => {
      if (movie.id === payload.id) {
        sortLike(movie)
      }
      return movie
    })
  }),
  dislike: action((state, payload) => {
    state.visibleMovies.map((movie) => {
      if (movie.id === payload.id) {
        sortDislike(movie)
      }
      return movie
    })
  }),
  selectCat: action((state, payload) => {
    state.visibleMovies = state.visibleMovies.filter(movie => movie.category === payload)
  }),
  selectMovies: action((state) => {
    state.visibleMovies = state.allMovies.slice(state.selector.begin, state.selector.end)
  }),
  updateSelector: action((state, payload) => {
    if (state.selector.end )
    state.selector.end = payload
    state.selector.fraction = payload
  }),
  prev: action((state) => {
    state.selector.end = state.selector.begin
    state.selector.begin = state.selector.begin - state.selector.fraction
  }),
  next: action((state) => {
    if (state.selector.end > state.allMovies.length) {
      return
    }
    state.selector.begin = state.selector.end
    state.selector.end = state.selector.end + state.selector.fraction
  })
}

export default modal