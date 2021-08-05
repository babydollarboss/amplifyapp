import { useCallback } from 'react'
import { claim } from '../utils/calls/claim'
import useActiveWeb3React from './useActiveWeb3React'

const useClaim = (symbol: string) => {
  const { library } = useActiveWeb3React()
  const handleClaim = useCallback(
    async () => {
      const txHash = await claim(symbol, library.getSigner())
      console.info(txHash)
      return txHash
    },
    [symbol, library]
  )

  return { onClaim: handleClaim }
}

export default useClaim
