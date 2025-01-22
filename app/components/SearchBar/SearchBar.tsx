import Input from '~/components/Form/Input'
import { useRef, useEffect } from 'react'
import IconSearch from '~/components/Icons/IconSearch'
import { Error } from '~/components/Error/Error'
type SearchBarProps = {
  loading: boolean
  error: string | null
  inputError: string | null
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  handleClear: VoidFunction
}

export default function SearchBar({
  handleChange,
  loading,
  error,
  value,
  handleSubmit,
  handleClear,
  inputError
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const focusInput = () => {
    inputRef.current?.focus()
  }

  useEffect(() => {
    // Keep focus on the input after loading state changes
    if (!loading) {
      focusInput()
    }
  }, [loading])

  const handleClearWithFocus = () => {
    handleClear()
    focusInput()
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <Input
          ref={inputRef}
          type="search"
          placeholder="Enter destination or flight number"
          onChange={handleChange}
          disabled={loading}
          value={value}
          rightIcon={<IconSearch />}
          handleClear={handleClearWithFocus}
          error={inputError}
        />
      </form>
      {error && <Error className="mb-16">{error}</Error>}
    </div>
  )
}