import { DEFAULT_SEARCH_LENGTH } from '~/constants'

export default function validateSearch(search: any): boolean {
  return typeof search === 'string' && search.length >= DEFAULT_SEARCH_LENGTH
}
