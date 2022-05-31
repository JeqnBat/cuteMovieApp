import './css/movie-card.css'
import Thumb from '../img/thumb-up.svg'
import UsedThumb from '../img/thumb-up-filled.svg'
import { rounded } from '../logic/logic.js'
import Ratio from './Ratio'
import { useStoreActions } from 'easy-peasy'
import React, { useState } from 'react'

const MovieCard = ({ props }) => {
  // HOOKS _______________________________________________ *
  const [state, setState] = useState(props)
  const [likesCount, setLikesCount] = useState(props.likes)
  const [isLiked, setIsliked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  // CUSTOM FUNCTIONS ____________________________________ *
  const remove = useStoreActions(actions => actions.remove)
  const like = useStoreActions(actions => actions.like)
  const dislike = useStoreActions(actions => actions.dislike)

  const addLike = (id) => {
    like(id)
    setIsliked(!isLiked)
    setLikesCount(likesCount + 1);
  }
  const addDislike = (id) => {
    dislike(id)
    setDisliked(!disliked)
  }

  
  // JSX _________________________________________________ *
  return (
    <section key={state.id} id={state.id} className={'item'}>
      <nav className="cross" onClick={() => remove(state.id)}>╳</nav>
      <h1>{state.title}</h1>
      <h2>{state.cat}</h2>
      <div className="spacer"></div>
      <Ratio likes={likesCount} dislikes={state.dislikes}/>
      <div className="like-count">
        <img
          onClick={() => addLike(state.id)} 
          alt="Thumb-up" 
          src={isLiked ? UsedThumb : Thumb} 
          height="18px" 
          width="18px">
        </img>
        <span>
          {likesCount > 999 ? rounded(likesCount) : likesCount} 
        </span>
        <img 
          onClick={() => addDislike(state.id)}
          alt="Thumb-down" 
          src={disliked ? UsedThumb : Thumb} 
          height="18px" 
          width="18px">
        </img>
        <span>
          {state.dislikes > 999 ? rounded(state.dislikes) : state.dislikes} 
        </span>
      </div>
    </section>
  )
}

export default MovieCard