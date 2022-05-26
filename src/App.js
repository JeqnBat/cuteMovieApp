import Page from './components/Page'
import model from './data/model'
import { StoreProvider, createStore } from 'easy-peasy'

const store = createStore(model)

const App = () => {
  return (
    <StoreProvider store={store}>
      <Page />
    </StoreProvider>
  )
}

export default App
