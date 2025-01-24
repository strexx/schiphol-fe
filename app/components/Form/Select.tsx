import React, { forwardRef } from 'react'
import clsx from 'clsx'

type Props = {
  options: { value: string; label: string }[]
  label: string
  defaultValue: string | number
  id: HTMLSelectElement['id']
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  className?: string
}

const Select = forwardRef<HTMLSelectElement, Props>(function Select(
  { options, defaultValue, label, id, className, onChange },
  ref
) {
  return (
    <div className={clsx('w-full', className)}>
      <label className="mr-2" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        ref={ref}
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
})

export default Select
