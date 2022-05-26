import './css/movie-card.css'
import Ratio from './Ratio'
import Thumb from '../img/thumb-up.svg'
import UsedThumb from '../img/thumb-up-filled.svg'
import React, { useState } from 'react'

const MovieCard = ({ id, title, cat, likes, dislikes }) => {
  // HOOKS _______________________________________________ *
  const [cardIsVisible, setCardVisibility] = useState(true)
  const [likesCount, setLikesCount] = useState(likes)
  const [dislikesCount, setDislikesCount] = useState(dislikes)
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)

  const removeCard = () => {
    setCardVisibility(!cardIsVisible)
  }
  const addLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1)
      setLiked(false)
    } else {
      setLikesCount(likesCount + 1)
      setLiked(true)
    }
    if (disliked) {
      setDislikesCount(dislikesCount - 1)
      setDisliked(false)
    }
  }
  const addDislike = () => {
    if (disliked) {
      setDislikesCount(dislikesCount - 1)
      setDisliked(false)
    } else {
      setDislikesCount(dislikesCount + 1)
      setDisliked(true)
    }
    if (liked) {
      setLikesCount(likesCount - 1)
      setLiked(false)
    }
  }

  // CUSTOM FUNCTIONS ____________________________________ *
  const short = (nb) => {
    const newNb = nb.toString()
    return Number(newNb.slice(0, 2)) + ',' + Number(newNb.slice(3, 4)) + 'K'
  }

  return (
    <section key={id} className={cardIsVisible ? 'item' : 'item d-none'}>
      <nav className="cross" onClick={removeCard}>╳</nav>
      <h1>{title}</h1>
      <h2>{cat}</h2>
      <div className="spacer"></div>
      <Ratio likes={likesCount} dislikes={dislikesCount}/>
      <div className="like-count">
        <img
          onClick={addLike} 
          alt="Thumb-up" 
          src={liked ? UsedThumb : Thumb} 
          height="18px" 
          width="18px">
        </img>
        <span>
          {likesCount > 999 ? short(likesCount) : likesCount} 
        </span>
        <img 
          onClick={addDislike} 
          alt="Thumb-down" 
          src={disliked ? UsedThumb : Thumb} 
          height="18px" 
          width="18px">
        </img>
        <span>
          {dislikesCount > 999 ? short(dislikesCount) : dislikesCount} 
        </span>
      </div>
    </section>
  )
}

export default MovieCard