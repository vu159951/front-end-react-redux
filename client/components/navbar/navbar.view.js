import React from 'react'
import { Link } from 'react-router'
import { Nav, Navbar, NavItem, Glyphicon } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const NavbarView = () => {
  return (
    <Navbar default fixedTop fluid bsStyle='bg-primary'>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/dashboard'>
            <span bsSize="large"> <Glyphicon glyph="dashboard">Dashboard</Glyphicon> </span>
          </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <LinkContainer to='/about'>
          <NavItem>About Us</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  )
}
