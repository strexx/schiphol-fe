import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

interface StyledNavLinkProps {
  to: string
  children: React.ReactNode
  className?: string
}

export default function StyledNavLink({ to, children, className }: StyledNavLinkProps) {
  return (
    <NavLink
      to={to}
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
