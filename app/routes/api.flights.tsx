import { json, LoaderFunctionArgs } from '@remix-run/node'
import { flightsSchema } from 'schema/flights'
import { Flight } from 'types'
import { z } from 'zod'
import { flights } from '~/data'
import delayedResponse from '~/utils/delayedResponse'
import { filterFlights, limitFlights } from '~/utils/flights'

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const url = new URL(request.url)
    const data = flights.flights as Flight[]
    const searchParams = Object.fromEntries(url.searchParams.entries())

    // Validate query parameters using Zod
    const { search, limit } = flightsSchema.parse(searchParams)

    // If no search query, return all flights with limit if specified
    if (!search) {
      const flightsToReturn = limit ? limitFlights(data, Number(limit)) : data
      const response = await delayedResponse(flightsToReturn)

      return json(response, { status: 200 })
    }

    // Filter flights based on search query
    const filteredFlights = filterFlights(data, search)

    // Only limit the results if limit is provided
    const flightsToReturn = limit ? limitFlights(filteredFlights, Number(limit)) : filteredFlights

    // Randomize delay between 250ms and 1000
    const randomizedDelay = Math.floor(Math.random() * 751) + 250

    // Add 1 second delay before sending response
    const response = await delayedResponse(flightsToReturn, randomizedDelay)

    return json(response, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle Zod validation errors
      return json(
        {
          error: 'Invalid input',
          message: error.errors.map((e) => e.message).join(', ')
        },
        { status: 400 }
      )
    } else {
      console.error('Error processing flights request:', error)

      return json(
        {
          error: 'Internal server error',
          message: 'An error occurred while processing your request'
        },
        { status: 500 }
      )
    }
  }
}
