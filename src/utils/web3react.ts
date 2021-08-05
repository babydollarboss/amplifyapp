import { InjectedConnector } from '@web3-react/injected-connector'
import { ethers } from 'ethers'

const POLLING_INTERVAL = 12000

export enum ConnectorNames {
  Injected = 'injected'
}

const chainId = parseInt('56', 10)

const injected = new InjectedConnector({ supportedChainIds: [chainId] })

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
}

console.log('connectorsByName', connectorsByName)

export const getLibrary = (provider): ethers.providers.Web3Provider => {
  const library = new ethers.providers.Web3Provider(provider)
  library.pollingInterval = POLLING_INTERVAL
  return library
}