import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from "react-redux";

import store from "./store";
import { getLibrary } from "./utils/web3react";

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        {children}
      </Provider>
    </Web3ReactProvider>
  );
};

export default Providers;
