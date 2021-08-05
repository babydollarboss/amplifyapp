// import { DEFAULT_GAS_LIMIT } from '../../config'
import { getDividendTokenContract } from '../contractHelpers'

const options = {
  gasLimit: 90658,
}

export const claim = async (tokenSymbol: string, signer) => {
  const contract = getDividendTokenContract(tokenSymbol, signer);
  const tx = await contract.claim(options)
  const receipt = await tx.wait()
  return receipt
};