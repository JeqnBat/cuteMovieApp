import './css/page.css'
import Header from './Header'
import MovieCard from './MovieCard'
import Footer from './Footer'
import React, { useEffect, useState } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

const Page = () => {
  // HOOKS _______________________________________________ *
  const [hasLoaded, setHasLoaded] = useState(false)
  const movies = useStoreState(state => state.movies)
  const fetchMovies = useStoreActions(actions => actions.fetchMovies)
  // Loads data
  useEffect(() => {
    const a = async () => {
      await fetchMovies()
      setHasLoaded(!hasLoaded)
    }
    a()
    // eslint-disable-next-line
  }, [])
  // Gets movies categories
  const moviesCat = movies.map((el) => {
    return el.category
  })
  const newCat = moviesCat.filter((value, index, self) => {
    return self.indexOf(value) === index
  })

  return (
    <div id="wrapper">
      <Header categories={newCat} />
      <div id="movie-grid">
        {movies.map((el) => (
          <MovieCard 
            key={el.id} 
            title={el.title} 
            cat={el.category} 
            likes={el.likes} 
            dislikes={el.dislikes} 
          />
        ))}
      </div>
      <Footer mentions="mentions légales" />
    </div>
  )
}

export default Page