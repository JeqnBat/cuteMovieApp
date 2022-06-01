import './css/page.css'
import Header from './Header'
import MovieCard from './MovieCard'
import Footer from './Footer'
import { useStoreState, useStoreActions } from 'easy-peasy'
import React, { useState, useEffect } from 'react'

const Page = () => {
  // HOOKS _______________________________________________ *
  const { movies } = useStoreState(store => store)
  const { fdp } = useStoreState(store => store)
  const { clickClick } = useStoreActions(actions => actions)

  const [state, setState] = useState(movies)

  // useEffect(() => {
  //   (async () =>  {
  //     await fetchMovies()
  //     setHasLoaded(!hasLoaded)
  //   })()
  //   // eslint-disable-next-line
  // }, [])

  // Gets movies categories
  const moviesCat = state.map(el => el.category)
  const newCat = moviesCat.filter((value, index, self) => {
    return self.indexOf(value) === index
  })
  // JSX _________________________________________________ *
  return (
    <div id="wrapper">
      <Header categories={newCat} />
      <div id="movie-grid">
        {state.map((el) => (
          <MovieCard key={el.id} props={el}/>
        ))}
      </div>
      <button onClick={() => clickClick('try again')}>{fdp}</button>
      <Footer mentions="mentions légales" />
    </div>
  )
}

export default Page