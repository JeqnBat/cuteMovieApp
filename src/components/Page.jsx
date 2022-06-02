import './css/page.css'
import Header from './Header'
import MovieCard from './MovieCard'
import Footer from './Footer'
import { useStoreState } from 'easy-peasy'

const Page = () => {
  const { movies } = useStoreState((state) => state)
  // useEffect(() => {
  //   (async () =>  {
  //     await fetchMovies()
  //     setHasLoaded(!hasLoaded)
  //   })()
  //   // eslint-disable-next-line
  // }, [])

  // Gets movies categories
  const moviesCat = movies.map(movie => movie.category)
  const newCat = moviesCat.filter((value, index, self) => {
    return self.indexOf(value) === index
  })

  return (
    <main id="wrapper">
      <Header categories={newCat} />
      <section id="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} props={movie} />
        ))}
      </section>
      <Footer mentions="mentions légales" />
    </main>
  )
}

export default Page