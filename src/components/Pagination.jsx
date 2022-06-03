import './css/pagination.css'
import { useStoreActions } from 'easy-peasy'

const Pagination = () => {
  const { updateSelector } = useStoreActions((actions) => actions)
  const { selectMovies } = useStoreActions((actions) => actions)

  const handleClick = (e) => {
    updateSelector(Number(e.target.getAttribute('value')))
    selectMovies()
  }
  return (
    <>
      <p>COMBIEN VEUX TU DE FILMS DEMI LUNE ?</p>
      <nav id="pagination">
        <span value="4" onClick={(e) => handleClick(e)}>4</span>
        <span value="8" onClick={(e) => handleClick(e)}>8</span>
        <span value="12" onClick={(e) => handleClick(e)}>12</span>
      </nav>
    </>
  )
}

export default Pagination