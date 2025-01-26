import { NavLink, type NavLinkProps } from '@remix-run/react'
import clsx from 'clsx'

interface StyledNavLinkProps {
  to: NavLinkProps['to']
  children: React.ReactNode
  className?: string
  prefetch?: NavLinkProps['prefetch']
}

export default function StyledNavLink({ to, children, className, prefetch }: StyledNavLinkProps) {
  return (
    <NavLink
      to={to}
      viewTransition
      prefetch={prefetch}
      className={({ isActive }) =>
        clsx(
          {
            'text-blue-600 font-semibold underline': isActive,
            'text-gray-600 hover:text-gray-900 hover:text-blue-lightmorning transition-colors duration-200': !isActive
          },
          className
        )
      }
    >
      {children}
    </NavLink>
  )
}
