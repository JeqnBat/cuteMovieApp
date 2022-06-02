import { action, thunk } from 'easy-peasy'
import { cuteMoviesDB } from './cuteMoviesDB'

const modal = {
  movies: [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1,
      liked: false,
      disliked: false
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0,
      liked: false,
      disliked: false
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1,
      liked: false,
      disliked: false
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6,
      liked: false,
      disliked: false
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2,
      liked: false,
      disliked: false
    }, {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3,
      liked: false,
      disliked: false
    }, {
      id: '7',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32,
      liked: false,
      disliked: false
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      liked: false,
      disliked: false
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      liked: false,
      disliked: false
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12,
      liked: false,
      disliked: false
    }
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
  remove: action((state, payload) => {
    state.movies = state.movies.filter(el => el.id !== payload.id)
  }),
  like: action((state, payload) => {
    state.movies.map((movie) => {
      if (movie.id === payload.id) {
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
      return movie
    })
  }),
  dislike: action((state, payload) => {
    state.movies.map((movie) => {
      if (movie.id === payload.id) {
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
    return movie
    })
  })
}

export default modal