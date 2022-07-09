import axios from "axios"

const chainId=80001 // Polygon-Mumbai Chain Id
const contractAddress=`0x0D29bbc2095d58E0aA5dc0B4295c7C195eeE10d0`
const covalenthqKey = `ckey_f57b943596fb4bada55cf1e8656`
export async function greet(name) {
  const get = await axios.get(
    `https://api.covalenthq.com/v1/${chainId}/address/${contractAddress}/transactions_v2/?&key=${covalenthqKey}`
  )
  return get.data
}
