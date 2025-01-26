import clsx from 'clsx'

type ErrorProps = { children: React.ReactNode; className?: string; id?: string }

export function Error({ children, className, id }: ErrorProps) {
  return (
    <div role="alert" className={clsx('text-red', className)} id={id}>
      <p>{children}</p>
    </div>
  )
}
