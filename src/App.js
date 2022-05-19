import { cuteMoviesDB } from './data/cuteMoviesDB.js'
import getData from './Fetcher.js'

function App() {
  console.log(getData(cuteMoviesDB))
  return (
    <div>
      CPT
    </div>
  )
}

export default App
