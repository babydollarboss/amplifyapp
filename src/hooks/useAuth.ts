import { useCallback } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import { connectorsByName, ConnectorNames } from '../utils/web3react'
import { setupNetwork } from '../utils/wallet'

const useAuth = () => {
  const { activate, deactivate } = useWeb3React()

  const login = useCallback(
    (connectorID: ConnectorNames) => {
      const connector = connectorsByName[connectorID]
      if (connector) {
        activate(connector, async (error: Error) => {
          if (error instanceof UnsupportedChainIdError) {
            const hasSetup = await setupNetwork()
            if (hasSetup) {
              activate(connector)
            }
          } else {
            if (error instanceof NoEthereumProviderError) {
              console.log('No provider was found')
            } else if ( 
              error instanceof UserRejectedRequestErrorInjected
            ) {
              console.log('Authorization Error')
            } else {
              console.log(error.name, error.message)
            }
          }
        })
      } else {
        console.log('Unable to find connector')
      }
    },
    [activate],
  )

  const logout = useCallback(() => {
    deactivate()
    // This localStorage key is set by @web3-react/walletconnect-connector
  }, [deactivate])

  return { login, logout }
}

export default useAuth
