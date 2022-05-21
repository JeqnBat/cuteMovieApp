import './css/page.css'
import Header from './Header'
import MovieCard from './MovieCard'
import Footer from './Footer'
import React, { useEffect, useState } from 'react'
import { cuteMoviesDB } from '../data/cuteMoviesDB'

const Page = () => {
  // HOOKS _______________________________________________ *
  const [movies, setMovies] = useState([])
  useEffect(() => {load(cuteMoviesDB)}, [])
  // CUSTOM FUNCTIONS ____________________________________ *
  // Loads data
  async function load(db) {
    const feed = await db
    setMovies(feed)
  }
  const search = (selection) => {
    const result = movies.filter((el) => el.category === selection)
    setMovies(result)
  }
  // Gets movies categories
  const moviesCat = movies.map((el) => {
    return el.category
  })
  const newCat = moviesCat.filter((value, index, self) => {
    return self.indexOf(value) === index
  })

  return (
    <div id="wrapper">
      <Header categories={newCat} onClick={search}/>
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