import {
  APP_SHOW_WHATS_NEW,
  APP_HIDE_WHATS_NEW,
  APP_SHOW_RELOAD_OPTION,
  APP_HIDE_RELOAD_OPTION,
  APP_GET_LATEST_VERSION,
  APP_INITIALIZE,
  APP_GET_SETTINGS_SUCCESS,
  APP_SHOW_INSTALL,
  APP_HIDE_INSTALL,
  APP_INSTALL
} from './constants'
import { IAppSettingsRes } from './types'

export function showWhatsNew() {
  return {
    type: APP_SHOW_WHATS_NEW
  }
}

export function hideWhatsNew() {
  return {
    type: APP_HIDE_WHATS_NEW
  }
}

export function showReloadOption() {
  return {
    type: APP_SHOW_RELOAD_OPTION
  }
}

export function hideReloadOption() {
  return {
    type: APP_HIDE_RELOAD_OPTION
  }
}

export function getLatestVersion() {
  return {
    type: APP_GET_LATEST_VERSION
  }
}

export function appInit() {
  return {
    type: APP_INITIALIZE
  }
}

export function getAppSettingsSuccess(settings: IAppSettingsRes) {
  return {
    type: APP_GET_SETTINGS_SUCCESS,
    payload: { settings }
  }
}

export function showAppInstallOption(deferredPrompt: Event) {
  return {
    type: APP_SHOW_INSTALL,
    payload: { deferredPrompt }
  }
}

export function hideAppInstallOption() {
  return {
    type: APP_HIDE_INSTALL
  }
}

export function appInstall() {
  return {
    type: APP_INSTALL
  }
}
