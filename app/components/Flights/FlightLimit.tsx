import clsx from 'clsx'
import type { Sort } from 'types'
import Select from '~/components/Form/Select'

type FlightResultsProps = {
  limit: number
  className?: string
  handleLimit: React.ChangeEventHandler<HTMLSelectElement>
}

const options = [
  { value: '5', label: '5' },
  { value: '10', label: '10' }
]

export default function FlightLimit({ limit = 5, handleLimit, className }: FlightResultsProps) {
  return (
    <section className={clsx('flex justify-end', className)}>
      <Select options={options} defaultValue={limit} label="Limit" id="limit" onChange={handleLimit} />
    </section>
  )
}
