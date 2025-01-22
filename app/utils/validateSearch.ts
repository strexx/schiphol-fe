export default function validateSearch(search: any): boolean {
  return typeof search === 'string' && search.length >= 3
}
