import { useEffect, useState, useCallback } from 'react'

const DELAY = 300

/**
 * A hook that returns a debounced value that only updates after the specified delay.
 * @template T The type of the value being debounced
 * @param {T} value The value to debounce
 * @param {number} [delay=DELAY] The delay in milliseconds
 * @returns {T} The debounced value
 */
export function useDebounce<T>(value: T, delay = DELAY): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  const updateValue = useCallback(() => {
    setDebouncedValue(value)
  }, [value])

  useEffect(() => {
    const timer = setTimeout(updateValue, delay)
    return () => clearTimeout(timer)
  }, [value, delay, updateValue])

  return debouncedValue
}

export type UseDebounce = typeof useDebounce
