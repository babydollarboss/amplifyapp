import {
  put,
  fork,
  takeLatest,
  select
} from 'redux-saga/effects'
import {

  hideAppInstallOption
} from './actions'

import {
  APP_INSTALL
} from './constants'
import { IAppState } from './types'

export const getInstallEvent = ({ app }: { app: IAppState }) =>
  app.deferredAppInstallPrompt

export function* appInstallHandler() {
  try {
    const deferredAppInstallPrompt = yield select(getInstallEvent)
    yield put(hideAppInstallOption())
    deferredAppInstallPrompt.prompt()
  } catch (err) {
    console.log(err)
  }
}

function* watchAppInstall() {
  yield takeLatest(APP_INSTALL, appInstallHandler)
}

export default [
  fork(watchAppInstall)
]
