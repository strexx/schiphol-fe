import React, { forwardRef } from 'react'
import clsx from 'clsx'
import IconSearch from '~/components/Icons/IconSearch'
import IconClear from '~/components/Icons/IconClear'
import { Error } from '~/components/Error/Error'

type Props = {
  placeholder: HTMLInputElement['placeholder']
  type: HTMLInputElement['type']
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleClear?: () => void
  value?: HTMLInputElement['value']
  disabled?: HTMLInputElement['disabled']
  rightIcon?: React.ReactNode
  error?: string | null
  name?: HTMLInputElement['name']
  ref?: React.Ref<HTMLInputElement>
}

export default forwardRef<HTMLInputElement, Props>(function Input(
  { placeholder, type, value, onChange, disabled, rightIcon, handleClear, error, name, ...rest }: Props,
  ref
) {
  return (
    <>
      <div className="relative w-full">
        <input
          ref={ref}
          className={clsx(
            'w-full p-4 bg-white rounded-md',
            'disabled:bg-gray-scattered',
            (rightIcon || type === 'search') && 'pr-12',
            error && 'border border-red-500 focus:border-red-500'
          )}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          autoComplete="off"
          aria-describedby="search-error-message"
          aria-invalid={error ? true : undefined}
          {...rest}
        />

        {type === 'search' && (
          <>
            {value && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-14 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-overcast transition-colors duration-200 p-2"
                aria-label="Clear search"
                disabled={disabled}
              >
                <IconClear />
              </button>
            )}
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 transition-colors duration-200 p-2 hover:text-white hover:bg-blue-schiphol rounded-md"
              aria-label="Search"
              disabled={disabled}
            >
              <IconSearch />
            </button>
          </>
        )}
        {rightIcon && !value && type !== 'search' && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">{rightIcon}</div>
        )}
      </div>
      {error && (
        <Error id="search-error-message" className="mt-4">
          {error}
        </Error>
      )}
    </>
  )
})
