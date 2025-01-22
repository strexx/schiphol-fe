import clsx from 'clsx'
import type { Sort } from 'types'
import Select from '~/components/Form/Select'

type FlightResultsProps = {
  handleSort: React.ChangeEventHandler<HTMLSelectElement>
  sort: Sort
  className?: string
}

const options = [
  { value: 'ascending', label: 'Ascending' },
  { value: 'descending', label: 'Descending' }
]

export default function FlightSort({ handleSort, sort = 'ascending', className }: FlightResultsProps) {
  return (
    <section className={clsx('flex justify-end', className)}>
      <Select options={options} defaultValue={sort} label="Order" id="sort-order" onChange={handleSort} />
    </section>
  )
}
