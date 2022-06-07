// @refresh reset
import './css/page.css'
import Header from './Header'
import MovieCard from './MovieCard'
import Footer from './Footer'
import { useStoreState, useStoreActions } from 'easy-peasy'
import React, { useEffect } from 'react'

const Page = () => {
  const { visibleMovies } = useStoreState((state) => state)
  const { fetchMovies } = useStoreActions((actions) => actions)

  useEffect(() => {
    fetchMovies()
    // eslint-disable-next-line
  }, [])

  return (
    <main id="wrapper">
      <Header />
      <section id="movie-grid">
        {visibleMovies.map((movie) => (
          <MovieCard key={movie.id} props={movie} />
        ))}
      </section>

      <Footer mentions="mentions légales" />
    </main>
  )
}

export default Page