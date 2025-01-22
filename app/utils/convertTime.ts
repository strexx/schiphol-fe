import type { Flight, Sort } from 'types'

/**
 * This gets converted to timestamp format
 * @param time - HH:MM
 * @returns string - timestamp
 */
function convertTimeToTimestamp(time: string): number {
  if (!/^\d{2}:\d{2}$/.test(time)) {
    throw new Error('Invalid time format. Expected HH:MM')
  }

  const [hours, minutes] = time.split(':').map(Number)

  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    throw new Error('Invalid time values')
  }

  // Use a fixed date to ensure consistent comparison
  const baseDate = new Date(2000, 0, 1)
  return baseDate.setHours(hours, minutes)
}

export function compareTimestamps(a: Flight, b: Flight, sort: Sort): number {
  const dateA = convertTimeToTimestamp(a.expectedTime)
  const dateB = convertTimeToTimestamp(b.expectedTime)

  return sort === 'descending' ? dateB - dateA : dateA - dateB
}
