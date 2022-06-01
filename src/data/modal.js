import { action, thunk } from 'easy-peasy'
import { cuteMoviesDB } from './cuteMoviesDB'

const model = {
  fdp: 'mais ui mais ui',
  movies: [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2
    }, {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3
    }, {
      id: '7',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    },
  ],
  // Thunks
  fetchMovies: thunk(async actions => {
    try {
      const newMovies = await cuteMoviesDB
      actions.add(newMovies)
    } catch(e) {
      console.log(e)
    }
  }),
  // Actions
  remove: action((state, id) => {
    state.movies = state.movies.filter(el => el.id !== id)
    console.log(state.movies.length);
  }),
  like: action((state, id) => {
    state.movies.forEach((movie) => {
      if(movie.id === id) {
        movie.likes = movie.likes + 1
      }
    })
  }),
  dislike: action((state, id) => {
    state.movies.forEach((movie) => {
      if(movie.id === id) {
        movie.dislikes = movie.dislikes + 1
      }
    })
  }),
  clickClick: action((state, payload) => {
    state.fdp = payload
  })
}

export default model