import './css/movie-card.css'
import Thumb from '../img/thumb-up.svg'
// import UsedThumb from '../img/thumb-up-filled.svg'
import { rounded } from '../data/logic.js'
import Ratio from './Ratio'
import { useStoreActions } from 'easy-peasy'

const MovieCard = ({ props }) => {
  const remove = useStoreActions(actions => actions.remove)
  const like = useStoreActions(actions => actions.like)
  const dislike = useStoreActions(actions => actions.dislike)

  // JSX _________________________________________________ *
  return (
    <section key={props.id} id={props.id} className={'item'}>
      <nav className="cross" onClick={() => remove(props.id)}>╳</nav>
      <h1>{props.title}</h1>
      <h2>{props.cat}</h2>
      <div className="spacer"></div>
      <Ratio likes={props.likes} dislikes={props.dislikes}/>
      <div className="like-count">
        <img
          onClick={() => like(props.id)} 
          alt="Thumb-up" 
          // src={isLiked ? UsedThumb : Thumb} 
          src={Thumb} 
          height="18px" 
          width="18px">
        </img>
        <span>
          {props.likes > 999 ? rounded(props.likes) : props.likes} 
        </span>
        <img 
          onClick={() => dislike(props.id)}
          alt="Thumb-down" 
          // src={disliked ? UsedThumb : Thumb} 
          src={Thumb} 
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