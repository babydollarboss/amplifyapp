import {
  CONNECT_WALLET_POPUP_HIDE,
  CONNECT_WALLET_POPUP_SHOW
} from './constants'

export function showConnectWalletPopup() {
  return {
    type: CONNECT_WALLET_POPUP_SHOW,
  }
}

export function hideConnectWalletPopup() {
  return {
    type: CONNECT_WALLET_POPUP_HIDE
  }
}
