import './css/header.css'
import Filter from './Filter'
import { useStoreState } from 'easy-peasy'

const Header = () => {
  const { categories } = useStoreState((state) => state.selector)
  return (
    <header>
      <div id="logo"></div>
      <h1>CUTE MOVIE APP</h1>
      <Filter categories={categories} />
    </header>
  )
}

export default Header