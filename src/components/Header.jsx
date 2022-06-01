import './css/header.css'

const Header = ({ categories, onClick }) => {
  return (
    <header>
      <div id="logo">
      </div>
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