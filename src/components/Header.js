import './css/header.css'
import Logo from '../img/babyYoda.webp'

const Header = ({ categories, onClick }) => {
  return (
    <header>
      <img src={Logo} alt="babyYoda" height="130px"></img>
      CUTE MOVIE APP
      <nav id="filter">
        <p>Catégories</p>
          {categories.map((el, index) => (
            <div key={index} onClick={() => onClick(el)}>{el}</div>
          ))}
      </nav>
    </header>
  )
}

export default Header