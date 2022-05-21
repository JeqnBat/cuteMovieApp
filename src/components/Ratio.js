import './css/ratio.css'

const Ratio = ({likes, dislikes}) => {

  // Returns movie 'likes/dislikes' ratio in number type 
  function calculate(likes, dislikes) {
    const sum = likes + dislikes
    const percent = (likes / sum).toFixed(2) * 100
    return percent
  }
  
  // Sets .ratio::before width property using a variable
  const lengthInPx = calculate(likes, dislikes) + '%'
  const beforeStyle = {
    '--width' : lengthInPx
  }

  return (
    <>
    <div className="ratio-bar" style={beforeStyle}></div>
    <div className="ratio-number">{calculate(likes, dislikes)}%</div>
    </>
  )
}

export default Ratio