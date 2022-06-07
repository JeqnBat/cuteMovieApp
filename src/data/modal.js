import { action, thunk } from 'easy-peasy'
import { cuteMoviesDB } from './cuteMoviesDB'
import { manageLike, manageDislike } from '../logic/logic'

const modal = {
  allMovies: [],
  visibleMovies: [],
  moviesByCat: [],
  selector: {
    begin: 0,
    end: 4,
    instances: 4,
    categories: []
  },
  // THUNKS
  fetchMovies: thunk(async actions => {
    try {
      const newMovies = await cuteMoviesDB
      actions.add(newMovies)
      actions.selectMovies()
      actions.loadCat()
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
        manageLike(movie)
      }
      return movie
    })
  }),
  dislike: action((state, payload) => {
    state.visibleMovies.map((movie) => {
      if (movie.id === payload.id) {
        manageDislike(movie)
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
    let step = 0
    state.selector.instances = payload
    state.selector.begin = 0
    state.selector.end = 0
    while ((step < payload) && (state.selector.end < state.allMovies.length)) {
      state.selector.end++
      step++
    }
  }),
  prev: action((state) => {
    let i = 0
    while ((state.selector.begin > 0) && (i < state.selector.instances)) {
      i++
      state.selector.begin--
      state.selector.end--
    }
  }),
  next: action((state) => {
    let i = 0
    while ((i < state.selector.instances) && (state.selector.end < state.allMovies.length)) {
      i++
      state.selector.begin++
      state.selector.end++
    }
  }),
  loadCat: action((state) => {
    const moviesCat = state.allMovies.map(movie => movie.category)
    state.selector.categories = moviesCat.filter((value, index, self) => {
      return self.indexOf(value) === index
    })
  })
}

export default modal