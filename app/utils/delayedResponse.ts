import { ARTIFICIAL_DELAY_MS } from '~/constants'

export default async function delayedResponse<T>(data: T, delay = ARTIFICIAL_DELAY_MS): Promise<T> {
  await new Promise((resolve) => setTimeout(resolve, delay))
  return data
}
