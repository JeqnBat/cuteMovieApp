const data = [
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
    likes: 11,
    dislikes: 9,
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
]

export const cuteMoviesDB = new Promise((resolve, reject) => setTimeout(resolve, 100, data))