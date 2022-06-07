import './css/header.css'
import Filter from './Filter'
import { useStoreState } from 'easy-peasy'

const Header = () => {
  const { categories } = useStoreState((state) => state.selector)
  return (
    <header>
      <section id="title">
        <div id="logo"></div>
        <h1>Cute Movie App</h1>
      </section>
      <Filter categories={categories} />
    </header>
  )
}

export default Header