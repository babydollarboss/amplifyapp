import createReducer from '../../utils/create-reducer'
import {
  APP_GET_SETTINGS_SUCCESS,
  APP_HIDE_INSTALL,
  APP_HIDE_RELOAD_OPTION,
  APP_HIDE_WHATS_NEW,
  APP_SHOW_INSTALL,
  APP_SHOW_RELOAD_OPTION,
  APP_SHOW_WHATS_NEW
} from './constants'
import { IAppSettingsRes, IAppState } from './types'

export const initialStates = {
  showReloadOption: false,
  showWhatsNew: false,
  showAppInstallOption: false,
  deferredAppInstallPrompt: undefined
} as IAppState

export default createReducer(initialStates, {
  [APP_SHOW_WHATS_NEW]: (state: IAppState) => ({
    ...state,
    showWhatsNew: true
  }),

  [APP_HIDE_WHATS_NEW]: (state: IAppState) => ({
    ...state,
    showWhatsNew: false
  }),

  [APP_SHOW_RELOAD_OPTION]: (state: IAppState) => ({
    ...state,
    showReloadOption: true
  }),

  [APP_HIDE_RELOAD_OPTION]: (state: IAppState) => ({
    ...state,
    showReloadOption: false
  }),

  [APP_GET_SETTINGS_SUCCESS]: (
    state: IAppState,
    { settings }: { settings: IAppSettingsRes }
  ) => ({
    ...state,
    settings
  }),

  [APP_SHOW_INSTALL]: (
    state: IAppState,
    { deferredPrompt }: { deferredPrompt: Event }
  ) => ({
    ...state,
    deferredAppInstallPrompt: deferredPrompt,
    showAppInstallOption: true
  }),

  [APP_HIDE_INSTALL]: (state: IAppState) => ({
    ...state,
    deferredAppInstallPrompt: undefined,
    showAppInstallOption: false
  })
})
