import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavbarComponent() {
    return (
        <Navbar bg="light" expanded="sm">
            <Navbar.Brand as={Link} to="/">
                MY DRIVE
            </Navbar.Brand>

            <Nav.Link as={Link} to="/user">
                Profile
            </Nav.Link>
        </Navbar>
    )
}

export default NavbarComponent
