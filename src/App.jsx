import Page from './components/Page'
import modal from './data/modal'
import { StoreProvider, createStore } from 'easy-peasy'

const store = createStore(modal)

const App = () => {
  return (
    <StoreProvider store={store}>
      <Page />
    </StoreProvider>
  )
}

export default App
