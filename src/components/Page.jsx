import './css/page.css'
import Header from './Header'
import MovieCard from './MovieCard'
import Footer from './Footer'
import { useStoreState, useStoreActions } from 'easy-peasy'
import React, { useEffect } from 'react'

const Page = () => {
  const { movies } = useStoreState((state) => state)
  const { fetchMovies } = useStoreActions((actions) => actions)
  
  useEffect(() => {
    fetchMovies()
    // eslint-disable-next-line
  }, [])

  // Gets movies categories
  const moviesCat = movies.map(movie => movie.category)
  const newCat = moviesCat.filter((value, index, self) => {
    return self.indexOf(value) === index
  })

  return (
    <main id="wrapper">
      <Header categories={newCat} />
      <section id="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} props={movie} />
        ))}
      </section>
      <Footer mentions="mentions légales" />
    </main>
  )
}

export default Page