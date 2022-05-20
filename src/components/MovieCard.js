import './css/movie-card.css'
import Ratio from './Ratio'
import Thumb from '../img/thumb-up.svg'

const MovieCard = ({ id, title, cat, likes, dislikes }) => {
  return (
    <section key={id} className='item'>
      <h1>{title}</h1>
      <h2>{cat}</h2>
      <Ratio likes={likes} dislikes={dislikes}/>
      <div className="like-count">
        <img alt="Thumb-up" src={Thumb} height="20px" width="20px"></img>
        <span>{likes}</span>
        <img alt="Thumb-up" src={Thumb} height="20px" width="20px"></img>
        <span>{dislikes}</span>
      </div>
    </section>
  )
}

export default MovieCard