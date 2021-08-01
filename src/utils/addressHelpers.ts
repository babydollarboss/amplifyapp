import { ChainId } from '../config'
import tokens from '../config/constants/tokens'

interface Address {
  97?: string
  56: string
}

export const getAddress = (address: Address): string => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  return address[chainId] ? address[chainId] : address[ChainId.MAINNET]
}

export const getCakeAddress = () => {
  return getAddress(tokens.cake.address)
}
export const getWbnbAddress = () => {
  return getAddress(tokens.wbnb.address)
}
