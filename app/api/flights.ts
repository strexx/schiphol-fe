import type { Flight } from 'types'

export const getFlights = async (): Promise<Flight[]> => {
  try {
    const response = await fetch(`/api/flights`)
    const data = await response.json()
    return data
  } catch (err) {
    throw err
  }
}

export const getFlightsBySearch = async (search: string, limit: number): Promise<Flight[]> => {
  try {
    const response = await fetch(`/api/flights?search=${encodeURIComponent(search)}&limit=${limit}`)
    const data = await response.json()
    return data
  } catch (err) {
    throw err
  }
}
