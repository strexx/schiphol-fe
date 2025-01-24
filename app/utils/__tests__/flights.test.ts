import { describe, it, expect } from 'vitest'
import { sortFlightsByTime, filterFlights, limitFlights } from '../flights'
import flightsData from '~/data/flights.json'
import type { Flight } from 'types'

describe('flights', () => {
  const flights = flightsData.flights as Flight[]

  describe('sortFlightsByTime', () => {
    it('should sort flights by time in ascending order', () => {
      const sortedFlights = sortFlightsByTime(flights, 'ascending')
      expect(sortedFlights[0].flightNumber).toBe('BA 2761')
      expect(sortedFlights[1].flightNumber).toBe('KL 1019')
      expect(sortedFlights[2].flightNumber).toBe('EZY 3004')
    })

    it('should sort flights by time in descending order', () => {
      const sortedFlights = sortFlightsByTime(flights, 'descending')
      expect(sortedFlights[0].flightNumber).toBe('FR 3007')
      expect(sortedFlights[1].flightNumber).toBe('KL 939')
      expect(sortedFlights[2].flightNumber).toBe('EI 611')
    })
  })

  describe('filterFlights', () => {
    it('should filter flights by flight number', () => {
      const filteredFlights = filterFlights(flights, 'UA 969')
      expect(filteredFlights.length).toBe(1)
      expect(filteredFlights[0].flightNumber).toBe('UA 969')
    })

    it('should filter flights by airport', () => {
      const filteredFlights = filterFlights(flights, 'San Francisco')
      expect(filteredFlights.length).toBe(2)
      expect(filteredFlights[0].airport).toBe('San Francisco')
    })

    it('should find flights by flight number without spaces', () => {
      const filteredFlights = filterFlights(flights, 'UA969')
      expect(filteredFlights).toHaveLength(1)
      expect(filteredFlights[0].flightNumber).toBe('UA 969')
    })
  })

  describe('limitFlights', () => {
    it('should limit the number of flights returned', () => {
      const limitedFlights = limitFlights(flights, 2)
      expect(limitedFlights.length).toBe(2)
    })
  })
})
