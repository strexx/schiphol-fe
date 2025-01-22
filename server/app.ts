import { createRequestHandler } from '@react-router/express'
import express from 'express'
import 'react-router'
import { flights } from '~/data'
import delayedResponse from '~/utils/delayedResponse'
import { filterFlights, limitFlights } from '~/utils/flights'
import validateSearch from '~/utils/validateSearch'

declare module 'react-router' {
  export interface AppLoadContext {
    VALUE_FROM_VERCEL: string
  }
}

const app = express()

// Flights endpoint
app.get('/api/flights', async (req, res) => {
  try {
    const searchQuery = req.query.search || ''
    const limitQuery = req.query.limit

    // If no search query, return all flights with limit if specified
    if (!searchQuery) {
      const flightsToReturn = limitQuery ? limitFlights(flights.flights, Number(limitQuery)) : flights.flights
      const response = await delayedResponse(flightsToReturn)
      return res.status(200).json(response)
    }

    // Validate search query if needed
    if (!validateSearch(searchQuery)) {
      return res.status(400).json({
        error: 'Invalid input',
        message: 'Search query must be a string and at least 3 characters long'
      })
    }

    // Filter flights based on search query
    const filteredFlights = filterFlights(flights.flights, searchQuery as string)

    // Only limit the results if limitQuery is provided
    const flightsToReturn = limitQuery ? limitFlights(filteredFlights, Number(limitQuery)) : filteredFlights

    // Add 1 second delay before sending response
    const response = await delayedResponse(flightsToReturn)

    res.status(200).json(response)
  } catch (error) {
    console.error('Error processing flights request:', error)

    res.status(500).json({
      error: 'Internal server error',
      message: 'An error occurred while processing your request'
    })
  }
})

// Then add the React Router handler
app.use(
  createRequestHandler({
    // @ts-expect-error - virtual module provided by React Router at build time
    build: () => import('virtual:react-router/server-build'),
    getLoadContext() {
      return {
        VALUE_FROM_VERCEL: 'Hello from Vercel'
      }
    }
  })
)

export default app
