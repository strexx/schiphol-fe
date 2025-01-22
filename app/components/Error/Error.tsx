import clsx from 'clsx'

type ErrorProps = { children: React.ReactNode; className?: string }

export function Error({ children, className }: ErrorProps) {
  return (
    <div role="alert" className={clsx('text-red', className)}>
      <p>{children}</p>
    </div>
  )
}
