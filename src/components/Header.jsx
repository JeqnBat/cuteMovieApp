import './css/header.css'
import Logo from '../img/babyYoda.webp'
import { useStoreState } from 'easy-peasy'

const Header = ({ categories, onClick }) => {

  const intel = useStoreState((state) => state.intelligence)

  return (
    <header>
      <img src={Logo} alt="babyYoda" height="130px"></img>
      CUTE MOVIE APP
      <nav id="filter">
        <p>Catégories {intel}</p>
          {categories.map((el, index) => (
            <div key={index} onClick={() => onClick(el)}>{el}</div>
          ))}
      </nav>
    </header>
  )
}

export default Header