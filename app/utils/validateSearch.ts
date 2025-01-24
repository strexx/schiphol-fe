import { DEFAULT_SEARCH_LENGTH } from '~/constants'

export default function validateSearch(search: unknown): boolean {
  return typeof search === 'string' && search.length >= DEFAULT_SEARCH_LENGTH
}
