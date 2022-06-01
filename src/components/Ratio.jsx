import './css/ratio.css'
import { percent } from '../data/logic'

const Ratio = ({likes, dislikes}) => {
  // Sets .ratio::before width property using a variable
  const length = percent(likes, dislikes) + '%'
  const beforeStyle = {
    '--width' : length
  }

  return (
    <>
    <div className="ratio-bar" style={beforeStyle}></div>
    <div className="ratio-number">{percent(likes, dislikes)}%</div>
    </>
  )
}

export default Ratio