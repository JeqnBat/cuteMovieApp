import './css/page.css'
import Header from './Header'
import MovieCard from './MovieCard'
import { useEffect, useState } from 'react'
import { cuteMoviesDB } from '../data/cuteMoviesDB'

const Page = () => {

  async function load(db) {
    const feed = await db
    setMovies(feed)
  }
  
  const [movies, setMovies] = useState([])
  // dependency array to prevent useEffect from reloading
  useEffect(() => {load(cuteMoviesDB)}, [])
  return (
    <div id="wrapper">
      <Header mainTitle="Cute Movie App" />

      <div id="movie-grid">
        {movies.map((el) => (
          <MovieCard key={el.id} title={el.title} cat={el.category} likes={el.likes} dislikes={el.dislikes} />
        ))}
      </div>
      <Header mainTitle="légales" />
    </div>
  )
}

export default Page