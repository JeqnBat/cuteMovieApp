import './css/header.css'
import { useStoreState, useStoreActions } from 'easy-peasy'

const Header = () => {
  const { selectCat } = useStoreActions((actions) => actions)
  const { allMovies } = useStoreState((store) => store)

  // Gets all UNIQUE categories & stores them in 'newCat'
  const moviesCat = allMovies.map(movie => movie.category)
  const newCat = moviesCat.filter((value, index, self) => {
    return self.indexOf(value) === index
  })

  return (
    <header>
      <div id="logo"></div>
      CUTE MOVIE APP
      <nav id="filter">
        <p>Catégories</p>
          {newCat.map((cat, index) => (
            <div key={index} onClick={() => selectCat(cat)}>{cat}</div>
          ))}
      </nav>
    </header>
  )
}

export default Header