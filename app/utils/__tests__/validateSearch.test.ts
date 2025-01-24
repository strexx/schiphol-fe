import { describe, it, expect } from 'vitest'
import validateSearch from '../validateSearch'
import { DEFAULT_SEARCH_LENGTH } from '~/constants'

describe('validateSearch', () => {
  it('should return true for valid search strings', () => {
    const validSearch = 'a'.repeat(DEFAULT_SEARCH_LENGTH)
    expect(validateSearch(validSearch)).toBe(true)
  })

  it('should return false for search strings shorter than DEFAULT_SEARCH_LENGTH', () => {
    const shortSearch = 'a'
    expect(validateSearch(shortSearch)).toBe(false)
  })

  it('should return false for non-string inputs', () => {
    const invalidInputs = [123, {}, [], null, undefined]
    invalidInputs.forEach((input) => expect(validateSearch(input)).toBe(false))
  })
})
