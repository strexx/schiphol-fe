import clsx from 'clsx'

type Props = {
  options: { value: string; label: string }[]
  label: string
  defaultValue: string | number
  id: string
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  className?: string
}

export default function Select({ options, defaultValue, label, id, className, onChange }: Props) {
  return (
    <div className={clsx('w-full', className)}>
      <label className="mr-2" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        className="bg-white px-2 py-2 border border-gray-300 rounded-md text-sm focus:outline-none"
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
