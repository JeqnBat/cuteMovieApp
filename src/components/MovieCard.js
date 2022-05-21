import './css/movie-card.css'
import Ratio from './Ratio'
import Thumb from '../img/thumb-up.svg'

const MovieCard = ({ id, title, cat, likes, dislikes }) => {

  // Trims large number (> 4 digits) to make them fit the DIV
  function short(nb) {
    const newNb = nb.toString()
    return Number(newNb.slice(0, 2))+ 'K'
  }

  return (
    <section key={id} className='item'>
      <h1>{title}</h1>
      <h2>{cat}</h2>
      <Ratio likes={likes} dislikes={dislikes}/>
      <div className="like-count">
        <img alt="Thumb-up" src={Thumb} height="20px" width="20px"></img>
        <span>
          {likes > 999 ? short(likes) : likes} 
        </span>
        <img alt="Thumb-up" src={Thumb} height="20px" width="20px"></img>
        <span>
          {dislikes > 999 ? short(dislikes) : dislikes} 
        </span>
      </div>
    </section>
  )
}

export default MovieCard