import type { Flight } from 'types'

export const getFlights = async (url = '/api/flights'): Promise<Flight[]> => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (err) {
    console.error('Error fetching flights:', err)
    throw err
  }
}

export const getFlightsBySearch = async (search: string, limit: number): Promise<Flight[]> => {
  try {
    const response = await fetch(`/api/flights?search=${encodeURIComponent(search)}&limit=${limit}`)
    const data = await response.json()
    return data
  } catch (err) {
    console.error('Error fetching flights by search:', err)
    throw err
  }
}
