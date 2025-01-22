import Container from '~/components/Container/Container'
import Logo from '~/components/Logo/Logo'
import StyledNavLink from '~/components/NavLink/StyledNavLink'

export default function TopBar() {
  return (
    <div className="bg-white p-2 mb-8">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <nav className="space-x-4">
            <StyledNavLink to="/">Search Flights</StyledNavLink>
            <StyledNavLink to="/flights">All Flights</StyledNavLink>
          </nav>
        </div>
      </Container>
    </div>
  )
}
