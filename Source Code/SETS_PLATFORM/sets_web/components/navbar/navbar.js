import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import Link from 'next/link'

export default function Navibar() {
    return(
        <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
        <div className="col-6">
        <Navbar.Brand href="/">SETS</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="About SETS" id="basic-nav-dropdown" href = "/about-sets">
                <NavDropdown.Item href="/members">Members</NavDropdown.Item>
                
                <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Trading Emissions" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Packages</NavDropdown.Item>
                <NavDropdown.Item href="#">P2P Emission Trading</NavDropdown.Item>
                <NavDropdown.Item href="#">Emision Offset</NavDropdown.Item>
                <NavDropdown.Item href="#">Donation</NavDropdown.Item>
                <NavDropdown.Item href="#">Emission Taxation Accounting</NavDropdown.Item>
                <NavDropdown.Item href="#">Emission Credit Collateral</NavDropdown.Item>
                <NavDropdown.Item href="#">Emission Derivatives</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Carbon Calculator</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Cart</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Check Out</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>  
        </Navbar>
    )
} 