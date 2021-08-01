import { all } from 'redux-saga/effects'
import { sagas as appSaga } from './redux/app'

// Main Saga
export default function* rootSaga() {
  yield all([
    ...appSaga,
  ])
}
