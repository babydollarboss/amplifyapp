import createReducer from "../../utils/create-reducer";
import { IConnectWalletPopupState } from "./types";
import {
  CONNECT_WALLET_POPUP_HIDE,
  CONNECT_WALLET_POPUP_SHOW,
} from "./constants";

export const initialStates = {
  visible: false,
} as IConnectWalletPopupState;

export default createReducer(initialStates, {
  [CONNECT_WALLET_POPUP_SHOW]: (state: IConnectWalletPopupState) => ({
    ...state,
    visible: true,
  }),

  [CONNECT_WALLET_POPUP_HIDE]: (state: IConnectWalletPopupState) => ({
    ...state,
    visible: false,
  }),
});
