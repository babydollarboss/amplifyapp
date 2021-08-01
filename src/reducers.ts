import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { reducers as appReducers } from './redux/app'

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    // rest of your reducers
    ...appReducers,
  })

export default createRootReducer
