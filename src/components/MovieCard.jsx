// @refresh reset
import './css/movie-card.css'
import Thumb from '../img/thumb-up.svg'
import UsedThumb from '../img/thumb-up-filled.svg'
import { rounded } from '../logic/logic.js'
import Ratio from './Ratio'
import { useStoreActions } from 'easy-peasy'

const MovieCard = ({ props }) => {
  const remove = useStoreActions((actions) => actions.remove)
  const like = useStoreActions((actions) => actions.like)
  const dislike = useStoreActions((actions) => actions.dislike)

  return (
    <section key={props.id} id={props.id} className={'item'}>
      <nav className="cross" onClick={() => remove(props)}>╳</nav>
      <h1>{props.title}</h1>
      <h2>{props.category}</h2>
      <div className="spacer"></div>
      <Ratio likes={props.likes} dislikes={props.dislikes}/>
      <div className="like-count">
        <img
          onClick={() => like(props)} 
          alt="Thumb-up" 
          src={props.liked ? UsedThumb : Thumb} 
          height="18px" 
          width="18px">
        </img>
        <span>
          {props.likes > 999 ? rounded(props.likes) : props.likes} 
        </span>
        <img 
          onClick={() => dislike(props)}
          alt="Thumb-down" 
          src={props.disliked ? UsedThumb : Thumb} 
          height="18px" 
          width="18px">
        </img>
        <span>
          {props.dislikes > 999 ? rounded(props.dislikes) : props.dislikes} 
        </span>
      </div>
    </section>
  )
}

export default MovieCard