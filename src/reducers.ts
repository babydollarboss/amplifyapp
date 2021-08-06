import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { reducers as appReducers } from "./redux/app";
import { reducers as connectWalletPopupReducers } from "./redux/connectWalletPopup";

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    // rest of your reducers
    ...appReducers,
    ...connectWalletPopupReducers,
  });

export default createRootReducer;
