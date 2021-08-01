import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import history from './history'
import createRootReducer from './reducers'
import sagaMiddleware from './saga-middleware'

let composeEnhancers = compose

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

if (
  process.env.REACT_APP_DEV_MODE === '1' ||
  process.env.REACT_APP_DEV_MODE === 'true'
) {
  composeEnhancers =
    (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose
}

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
)

const store = createStore(createRootReducer(history), enhancer)

export default store
