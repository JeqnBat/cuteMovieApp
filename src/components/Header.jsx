import './css/header.css'
import Filter from './Filter'
import { useStoreState } from 'easy-peasy'

const Header = () => {
  const { allMovies } = useStoreState((store) => store)

  // Gets all UNIQUE categories & stores them in 'newCat'
  const moviesCat = allMovies.map(movie => movie.category)
  const newCat = moviesCat.filter((value, index, self) => {
    return self.indexOf(value) === index
  })

  return (
    <header>
      <div id="logo"></div>
      <h1>CUTE MOVIE APP</h1>
      <Filter categories={newCat} />
    </header>
  )
}

export default Header