import React from 'react'
import clsx from 'clsx'

type Props = {
  options: { value: string; label: string }[]
  label: string
  defaultValue: string | number
  id: HTMLSelectElement['id']
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  className?: string
  ref?: React.Ref<HTMLSelectElement>
}

export default function Select({ options, defaultValue, label, id, className, onChange, ref, ...rest }: Props) {
  return (
    <div className={clsx('w-full', className)}>
      <label className="mr-2" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        ref={ref}
        className={clsx(
          'bg-white px-2 py-2 border border-gray-300 rounded-md text-sm',
          'focus:outline-none focus:ring-2 focus:ring-blue-500'
        )}
        defaultValue={defaultValue}
        onChange={onChange}
        {...rest}
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
