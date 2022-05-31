import './css/page.css'
import Header from './Header'
import MovieCard from './MovieCard'
import Footer from './Footer'
import { useStoreState } from 'easy-peasy'

const Page = () => {
  // HOOKS _______________________________________________ *

  // From Model.js
  const movies = useStoreState(state => state.movies)

  // useEffect(() => {
  //   (async () =>  {
  //     await fetchMovies()
  //     setHasLoaded(!hasLoaded)
  //   })()
  //   // eslint-disable-next-line
  // }, [])
  // Gets movies categories
  const moviesCat = movies.map((el) => {
    return el.category
  })
  const newCat = moviesCat.filter((value, index, self) => {
    return self.indexOf(value) === index
  })
  // JSX _________________________________________________ *
  return (
    <div id="wrapper">
      <Header categories={newCat} />
      <div id="movie-grid">
        {movies.map((el) => (
          <MovieCard key={el.id} props={el}/>
        ))}
      </div>
      <Footer mentions="mentions légales" />
    </div>
  )
}

export default Page