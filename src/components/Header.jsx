import './css/header.css'
import { useStoreActions } from 'easy-peasy'

const Header = ({ categories }) => {
  const { selectCat } = useStoreActions((actions) => actions)

  return (
    <header>
      <div id="logo"></div>
      CUTE MOVIE APP
      <nav id="filter">
        <p>Catégories</p>
          {categories.map((cat, index) => (
            <div key={index} onClick={() => selectCat(cat)}>{cat}</div>
          ))}
      </nav>
    </header>
  )
}

export default Header